import json
import os
import re
import traceback
from datetime import datetime
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
import google.generativeai as genai
from django.contrib.auth.hashers import make_password, check_password
from .db_sqlalchemy import get_db, DBUser, DBCourse, DBUserProgress, DBUserProfile, DBUserProject

# ==================== GEMINI API CONFIGURATION ====================
# Load API key from .env file
from pathlib import Path
env_path = Path(__file__).resolve().parent.parent / '.env'
if env_path.exists():
    with open(env_path) as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith('#') and '=' in line:
                key, value = line.split('=', 1)
                os.environ[key.strip()] = value.strip()

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "")

genai.configure(api_key=GEMINI_API_KEY)

# System instruction for the AI Mentor persona
SYSTEM_INSTRUCTION = """You are the Islamabad.AI Virtual Mentor — an expert AI assistant for a next-generation AI learning platform based in Islamabad, Pakistan.

Your expertise covers:
- Machine Learning (regression, classification, clustering, SVMs, decision trees)
- Deep Learning (CNNs, RNNs, LSTMs, Transformers, attention mechanisms)
- Generative AI (LLMs, GPT, BERT, RAG, prompt engineering, fine-tuning)
- Natural Language Processing (tokenization, embeddings, sentiment analysis)
- Computer Vision (image classification, object detection, YOLO, GANs)
- MLOps (Docker, Kubernetes, MLflow, model deployment, CI/CD)
- Career guidance for AI/ML roles in Pakistan and globally

Rules:
1. Always respond in a helpful, professional, and encouraging tone.
2. When explaining code, use Python with PyTorch or TensorFlow examples.
3. Format responses with markdown: use **bold**, bullet points, and ```python code blocks.
4. Keep responses concise but informative (max 300 words unless a detailed explanation is needed).
5. If asked about non-AI topics, politely redirect to AI/ML topics.
6. Reference Islamabad.AI platform courses when relevant.
7. Use technical accuracy — never make up facts about algorithms or papers."""

# Initialize Gemini model
try:
    model = genai.GenerativeModel(
        model_name="gemini-2.5-flash",
        system_instruction=SYSTEM_INSTRUCTION
    )
    GEMINI_AVAILABLE = True
    print("[OK] Gemini API initialized successfully with gemini-1.5-flash")
except Exception as e:
    GEMINI_AVAILABLE = False
    print(f"[WARN] Gemini API initialization failed: {e}")

# ==================== FALLBACK RESPONSES ====================
FALLBACK_TEMPLATES = {
    "code": """Here is an explanation of the self-attention formula in Transformers:

$$Attention(Q, K, V) = softmax(\\frac{QK^T}{\\sqrt{d_k}})V$$

In PyTorch, a single head self-attention can be implemented as:
```python
import torch
import torch.nn as nn
import math

class SelfAttention(nn.Module):
    def __init__(self, d_model):
        super().__init__()
        self.q = nn.Linear(d_model, d_model)
        self.k = nn.Linear(d_model, d_model)
        self.v = nn.Linear(d_model, d_model)

    def forward(self, x):
        Q, K, V = self.q(x), self.k(x), self.v(x)
        scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(K.size(-1))
        attn = torch.softmax(scores, dim=-1)
        return torch.matmul(attn, V)
```
Let me know if you want me to explain backpropagation through these layers!""",

    "resume": """To stand out in Islamabad's AI/ML ecosystem, your resume should highlight:
1. **GitHub Repos**: Clean PyTorch/TensorFlow projects, not notebook scraps.
2. **Key Architectures**: Fine-tuning LLMs (Llama-3, Mistral) with LoRA/QLoRA.
3. **MLOps Tools**: Docker, MLflow, Weights & Biases.
4. **Quantified Achievements**: e.g., "reduced latency by 35% via INT8 quantization".

Would you like me to analyze a specific project description?""",

    "interview": """**Practice Question:** Explain L1 vs L2 regularization.

* **L1**: Adds sum of |w_i| → produces sparse weights → built-in feature selection
* **L2**: Adds sum of w_i² → shrinks weights → preserves all features
* Use L1 for irrelevant features, L2 for correlated features.

Want a follow-up coding challenge?""",

    "career": """**AI Engineer Roadmap for Islamabad:**
1. **Months 1-3**: Python, NumPy, Pandas, Scikit-Learn
2. **Months 4-6**: PyTorch CNNs, loss functions, optimizers
3. **Months 7-9**: Transformers, RAG, prompt engineering
4. **Months 10-12**: Docker, cloud APIs, CI/CD for models

Want course recommendations for any phase?""",

    "project": """**3 High-Impact Portfolio Projects:**
1. **Urdu RAG System** — LangChain + ChromaDB + multilingual embeddings
2. **Defect Detection** — YOLOv8 + OpenCV + FastAPI + Docker
3. **LLM Quantization Benchmark** — AutoGPTQ + HuggingFace PEFT

Which matches your current skillset?"""
}


# ==================== COURSE DATA STORE ====================
COURSES_DATA = {
    "ml-fundamentals": {
        "title": "Machine Learning Fundamentals",
        "difficulty": "Beginner",
        "duration": "8 weeks",
        "instructor": "Dr. Adnan Mahmood",
        "progress": 80,
    },
    "deep-learning": {
        "title": "Deep Learning with TensorFlow",
        "difficulty": "Intermediate",
        "duration": "10 weeks",
        "instructor": "Dr. Adnan Mahmood",
        "progress": 45,
    },
    "generative-ai": {
        "title": "Generative AI & LLMs",
        "difficulty": "Advanced",
        "duration": "6 weeks",
        "instructor": "Engr. Sarah Jameel",
        "progress": 10,
    },
    "computer-vision": {
        "title": "Computer Vision",
        "difficulty": "Intermediate",
        "duration": "8 weeks",
        "instructor": "Dr. Adnan Mahmood",
        "progress": 0,
    },
    "nlp": {
        "title": "Natural Language Processing",
        "difficulty": "Advanced",
        "duration": "8 weeks",
        "instructor": "Engr. Sarah Jameel",
        "progress": 0,
    },
    "mlops": {
        "title": "MLOps & Deployment",
        "difficulty": "Advanced",
        "duration": "12 weeks",
        "instructor": "Kamran Khan",
        "progress": 0,
    }
}


# ==================== VIEW ENDPOINTS ====================

# ==================== VIEW ENDPOINTS ====================

@api_view(['GET'])
def get_courses(request):
    """Returns dynamic list of available courses with progress from SQLAlchemy"""
    username = request.query_params.get("username") or request.headers.get("X-Username")
    
    db = get_db()
    try:
        db_courses = db.query(DBCourse).all()
        
        # If logged in, get user's progress for each course
        user = None
        if username and username != "null":
            user = db.query(DBUser).filter(DBUser.username == username).first()
            
        courses_res = {}
        for c in db_courses:
            progress_val = 0
            is_enrolled = False
            if user:
                up = db.query(DBUserProgress).filter(
                    DBUserProgress.user_id == user.id,
                    DBUserProgress.course_id == c.id
                ).first()
                if up:
                    progress_val = up.progress_percentage
                    is_enrolled = True
            
            courses_res[c.course_id] = {
                "title": c.title,
                "tagline": c.tagline,
                "difficulty": c.difficulty,
                "duration": c.duration,
                "instructor": c.instructor,
                "rating": c.rating,
                "image": c.image,
                "video_url": c.video_url,
                "progress": progress_val,
                "enrolled": is_enrolled
            }
        return Response(courses_res)
    except Exception as e:
        print(f"[Error] get_courses failed: {e}")
        traceback.print_exc()
        return Response({"error": "Failed to fetch courses data."}, status=500)
    finally:
        db.close()


@api_view(['GET'])
def get_analytics(request):
    """Returns dynamic student stats and weekly analytics based on logged-in user"""
    username = request.query_params.get("username") or request.headers.get("X-Username")
    if not username or username == "null":
        username = "muhammad_bilal"
        
    db = get_db()
    try:
        user = db.query(DBUser).filter(DBUser.username == username).first()
        if not user:
            return Response({"error": f"User '{username}' not found."}, status=404)
            
        # Ensure user profile exists (or create one automatically as fallback)
        profile = user.profile
        if not profile:
            profile = DBUserProfile(
                user_id=user.id,
                avatar_url=f"https://api.dicebear.com/7.x/initials/svg?seed={user.username}&backgroundColor=06b6d4,3b82f6",
                streak=1,
                study_hours=0.0,
                weekly_hours_csv="0.0,0.0,0.0,0.0,0.0,0.0,0.0"
            )
            db.add(profile)
            db.commit()
            db.refresh(profile)

        # Query user progress entries
        progress_entries = db.query(DBUserProgress).filter(DBUserProgress.user_id == user.id).all()
        
        completed_count = 0
        in_progress_count = 0
        total_progress = 0
        
        for entry in progress_entries:
            total_progress += entry.progress_percentage
            if entry.progress_percentage >= 100:
                completed_count += 1
            elif entry.progress_percentage > 0:
                in_progress_count += 1
                
        # Calculate dynamic skill score: base 60 + average progress * 0.4
        # If no courses are enrolled, score is 0.
        if len(progress_entries) == 0:
            skill_score = 0
        else:
            avg_progress = total_progress / len(progress_entries)
            skill_score = min(100, 60 + int(avg_progress * 0.4))
        
        # Display display name cleanly
        display_name = f"{user.first_name} {user.last_name}".strip()
        if not display_name:
            display_name = user.username.replace("_", " ").title()
            
        # Parse CSV hours
        days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        try:
            hours_vals = [float(h) for h in profile.weekly_hours_csv.split(",")]
        except Exception:
            hours_vals = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
        weekly_breakdown = dict(zip(days, hours_vals))
            
        analytics_data = {
            "student_name": display_name,
            "avatar_url": profile.avatar_url,
            "streak": profile.streak,
            "skill_score": skill_score,
            "weekly_hours": profile.study_hours,
            "completed_courses": completed_count,
            "in_progress_courses": in_progress_count,
            "certificates_earned": completed_count,
            "weekly_breakdown": weekly_breakdown
        }
        return Response(analytics_data)
    except Exception as e:
        print(f"[Error] Fetching analytics failed: {e}")
        traceback.print_exc()
        return Response({"error": "Failed to fetch student analytics."}, status=500)
    finally:
        db.close()


@api_view(["GET"])
def get_profile(request):
    """Returns full editable profile data for a user."""
    username = request.GET.get("username", "")
    if not username:
        return Response({"error": "username required"}, status=400)
    db = get_db()
    try:
        user = db.query(DBUser).filter(DBUser.username == username).first()
        if not user:
            return Response({"error": "User not found"}, status=404)

        profile = user.profile
        avatar_url  = profile.avatar_url  if profile else ""
        bio         = profile.bio         if profile and hasattr(profile, 'bio') else ""

        # Count enrolled courses and completed projects
        from datetime import timezone
        course_count   = db.query(DBUserProgress).filter(DBUserProgress.user_id == user.id).count()
        project_count  = db.query(DBUserProject).filter(
            DBUserProject.user_id == user.id,
            DBUserProject.status == "submitted"
        ).count()
        study_hours    = profile.study_hours if profile else 0.0
        streak         = profile.streak      if profile else 0

        # Date joined from Django user (date_joined field)
        date_joined = user.date_joined.strftime("%B %Y") if hasattr(user, 'date_joined') and user.date_joined else "Recently"

        return Response({
            "username":    user.username,
            "first_name":  user.first_name,
            "last_name":   user.last_name,
            "email":       user.email,
            "bio":         bio,
            "avatar_url":  avatar_url,
            "date_joined": date_joined,
            "course_count":  course_count,
            "project_count": project_count,
            "study_hours":   study_hours,
            "streak":        streak,
        })
    except Exception as e:
        traceback.print_exc()
        return Response({"error": str(e)}, status=500)
    finally:
        db.close()


@api_view(["POST"])
def update_profile(request):
    """Updates user profile: first_name, last_name, email, avatar_url, bio."""
    db = get_db()
    try:
        data        = json.loads(request.body)
        username    = data.get("username", "").strip()
        first_name  = data.get("first_name", "").strip()
        last_name   = data.get("last_name",  "").strip()
        email       = data.get("email",      "").strip()
        avatar_url  = data.get("avatar_url", "").strip()
        bio         = data.get("bio",        "").strip()

        if not username:
            return Response({"error": "username required"}, status=400)

        user = db.query(DBUser).filter(DBUser.username == username).first()
        if not user:
            return Response({"error": "User not found"}, status=404)

        # Update Django auth_user fields
        if first_name: user.first_name = first_name
        if last_name:  user.last_name  = last_name
        if email:      user.email      = email

        # Update profile
        profile = user.profile
        if not profile:
            profile = DBUserProfile(
                user_id=user.id,
                avatar_url=avatar_url or f"https://api.dicebear.com/7.x/initials/svg?seed={username}&backgroundColor=06b6d4,3b82f6",
                streak=0, study_hours=0.0,
                weekly_hours_csv="0.0,0.0,0.0,0.0,0.0,0.0,0.0"
            )
            db.add(profile)
        else:
            if avatar_url: profile.avatar_url = avatar_url

        # Store bio in profile if the column exists, otherwise ignore gracefully
        try:
            profile.bio = bio
        except Exception:
            pass

        db.commit()
        return Response({"message": "Profile updated successfully!"})
    except Exception as e:
        traceback.print_exc()
        return Response({"error": str(e)}, status=500)
    finally:
        db.close()


@api_view(['POST'])
def register_user(request):
    """
    Registers a new user in the system using SQLAlchemy.
    Performs validation and exception handling.
    """
    try:
        username = request.data.get("username", "").strip()
        email = request.data.get("email", "").strip()
        password = request.data.get("password", "")
        
        if not username or not email or not password:
            return Response({"error": "Username, email, and password are required fields."}, status=400)
            
        if len(password) < 6:
            return Response({"error": "Password must be at least 6 characters long."}, status=400)
            
        if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
            return Response({"error": "Invalid email address format."}, status=400)
            
        db = get_db()
        try:
            # Check duplicate username
            existing_user = db.query(DBUser).filter(DBUser.username == username).first()
            if existing_user:
                return Response({"error": "Username already exists. Please choose a different one."}, status=400)
                
            # Check duplicate email
            existing_email = db.query(DBUser).filter(DBUser.email == email).first()
            if existing_email:
                return Response({"error": "Email is already registered. Please log in instead."}, status=400)
                
            # Create user with Django-compatible hashed password
            hashed_pwd = make_password(password)
            new_user = DBUser(
                username=username,
                email=email,
                password=hashed_pwd,
                is_active=True,
                is_superuser=False,
                is_staff=False
            )
            db.add(new_user)
            db.commit()
            db.refresh(new_user)
            
            # Create default UserProfile
            new_profile = DBUserProfile(
                user_id=new_user.id,
                avatar_url=f"https://api.dicebear.com/7.x/initials/svg?seed={username}&backgroundColor=06b6d4,3b82f6",
                streak=0,
                study_hours=0.0,
                weekly_hours_csv="0.0,0.0,0.0,0.0,0.0,0.0,0.0"
            )
            db.add(new_profile)
            db.commit()
            
            return Response({
                "message": "User registered successfully!",
                "user": {
                    "id": new_user.id,
                    "username": new_user.username,
                    "email": new_user.email
                }
            }, status=201)
        except Exception as db_err:
            db.rollback()
            print(f"[Error] Database operation failed during signup: {db_err}")
            traceback.print_exc()
            return Response({"error": "Internal database error occurred. Please try again later."}, status=500)
        finally:
            db.close()
            
    except Exception as e:
        print(f"[Error] Sign up error: {e}")
        traceback.print_exc()
        return Response({"error": "An unexpected error occurred during signup."}, status=500)


@api_view(['POST'])
def login_user(request):
    """
    Logs in a user using SQLAlchemy.
    Performs validation, credentials checking, and exception handling.
    """
    try:
        username = request.data.get("username", "").strip()
        password = request.data.get("password", "")
        
        if not username or not password:
            return Response({"error": "Both username and password are required."}, status=400)
            
        db = get_db()
        try:
            user = db.query(DBUser).filter(DBUser.username == username).first()
            if not user:
                return Response({"error": "Invalid username or password."}, status=401)
                
            # Verify password
            if not check_password(password, user.password):
                return Response({"error": "Invalid username or password."}, status=401)
                
            if not user.is_active:
                return Response({"error": "This account is inactive. Please contact support."}, status=403)
                
            # Update last login time
            user.last_login = datetime.utcnow()
            
            # Ensure user profile exists (or create one automatically as fallback)
            profile = user.profile
            if not profile:
                profile = DBUserProfile(
                    user_id=user.id,
                    avatar_url=f"https://api.dicebear.com/7.x/initials/svg?seed={user.username}&backgroundColor=06b6d4,3b82f6",
                    streak=14 if user.username == "muhammad_bilal" else 0,
                    study_hours=24.5 if user.username == "muhammad_bilal" else 0.0,
                    weekly_hours_csv="4.0,3.2,5.0,2.5,4.8,3.0,2.0" if user.username == "muhammad_bilal" else "0.0,0.0,0.0,0.0,0.0,0.0,0.0"
                )
                db.add(profile)
                
            db.commit()
            
            return Response({
                "message": "Login successful!",
                "user": {
                    "id": user.id,
                    "username": user.username,
                    "email": user.email
                }
            })
        except Exception as db_err:
            print(f"[Error] Database operation failed during login: {db_err}")
            traceback.print_exc()
            return Response({"error": "Database error occurred during validation."}, status=500)
        finally:
            db.close()
            
    except Exception as e:
        print(f"[Error] Login error: {e}")
        traceback.print_exc()
        return Response({"error": "An unexpected error occurred during login."}, status=500)


@api_view(['POST'])
def update_progress(request):
    """
    Updates the progress percentage for a course.
    Only increments study hours when progress genuinely increases.
    """
    try:
        username = request.data.get("username", "").strip() or request.headers.get("X-Username")
        course_id = request.data.get("course_id", "").strip()
        progress = int(request.data.get("progress", 0))
        
        if not username or not course_id:
            return Response({"error": "Missing username or course_id"}, status=400)
            
        if progress < 0 or progress > 100:
            return Response({"error": "Progress must be between 0 and 100."}, status=400)
            
        db = get_db()
        try:
            user = db.query(DBUser).filter(DBUser.username == username).first()
            if not user:
                return Response({"error": "User not found"}, status=404)
                
            course = db.query(DBCourse).filter(DBCourse.course_id == course_id).first()
            if not course:
                return Response({"error": "Course not found"}, status=404)
                
            # Find or create UserProgress
            up = db.query(DBUserProgress).filter(
                DBUserProgress.user_id == user.id,
                DBUserProgress.course_id == course.id
            ).first()
            
            # Track whether this is a genuine progress increase
            old_progress = up.progress_percentage if up else 0
            is_progress_increase = progress > old_progress
            
            if not up:
                up = DBUserProgress(
                    user_id=user.id,
                    course_id=course.id,
                    progress_percentage=progress
                )
                db.add(up)
            else:
                up.progress_percentage = progress
                
            # Only increment study hours if progress genuinely increased
            if is_progress_increase:
                profile = user.profile
                if not profile:
                    profile = DBUserProfile(
                        user_id=user.id,
                        avatar_url=f"https://api.dicebear.com/7.x/initials/svg?seed={user.username}&backgroundColor=06b6d4,3b82f6",
                        streak=1,
                        study_hours=0.0,
                        weekly_hours_csv="0.0,0.0,0.0,0.0,0.0,0.0,0.0"
                    )
                    db.add(profile)
                    db.commit()
                    db.refresh(profile)
                
                # Increment study hours by 0.5h per lesson toggle
                profile.study_hours = round(profile.study_hours + 0.5, 1)
                
                # Also update today's day in weekly breakdown
                try:
                    hours_list = [float(h) for h in profile.weekly_hours_csv.split(",")]
                    if len(hours_list) == 7:
                        today_idx = datetime.utcnow().weekday()  # 0=Mon, 6=Sun
                        hours_list[today_idx] = round(hours_list[today_idx] + 0.5, 1)
                        profile.weekly_hours_csv = ",".join(map(str, hours_list))
                except Exception as parse_err:
                    print(f"[Warning] Failed parsing weekly hours: {parse_err}")
                
            db.commit()
            return Response({"message": "Progress updated successfully", "progress": up.progress_percentage})
        except Exception as db_err:
            db.rollback()
            print(f"[Error] DB update progress failed: {db_err}")
            return Response({"error": "Failed to update progress in database."}, status=500)
        finally:
            db.close()
    except Exception as e:
        print(f"[Error] Update progress error: {e}")
        return Response({"error": "Unexpected progress update error."}, status=500)


@api_view(['POST'])
def chat_mentor(request):
    """
    Handles user prompts sent to the Islamabad.AI mentor.
    Uses Gemini API as primary engine with fallback to templates.
    """
    user_message = request.data.get("message", "").strip()
    if not user_message:
        return Response({"reply": "I did not receive any message. How can I help you today?"}, status=400)

    # Try Gemini API first
    if GEMINI_AVAILABLE:
        try:
            response = model.generate_content(user_message)
            reply = response.text
            print(f"[OK] Gemini replied to: '{user_message[:50]}...'")
            return Response({"reply": reply})
        except Exception as e:
            print(f"[WARN] Gemini API error: {e}")
            traceback.print_exc()
            # Fall through to fallback

    # Fallback: keyword-based template matching
    msg_lower = user_message.lower()

    if any(k in msg_lower for k in ["code", "python", "transformer", "attention", "pytorch", "tensorflow"]):
        reply = FALLBACK_TEMPLATES["code"]
    elif any(k in msg_lower for k in ["resume", "cv", "profile", "job", "recruiter", "hire"]):
        reply = FALLBACK_TEMPLATES["resume"]
    elif any(k in msg_lower for k in ["interview", "question", "test", "quiz", "l1", "l2"]):
        reply = FALLBACK_TEMPLATES["interview"]
    elif any(k in msg_lower for k in ["career", "roadmap", "specialist", "learn", "study"]):
        reply = FALLBACK_TEMPLATES["career"]
    elif any(k in msg_lower for k in ["project", "idea", "portfolio", "rag", "yolo"]):
        reply = FALLBACK_TEMPLATES["project"]
    else:
        reply = (
            f"Thank you for reaching out! I've received your query: '{user_message}'. "
            "As the Islamabad.AI Virtual Mentor, I specialize in Machine Learning, Deep Learning, Generative AI, "
            "and career prep. Feel free to ask me to write a coding snippet, review your CV, or structure an AI study roadmap!"
        )

    return Response({"reply": reply})


# ==================== PROJECT MANAGEMENT ====================

@api_view(["GET"])
def get_projects(request):
    """Return all available projects with the user's status for each."""
    username = request.GET.get("username", "")
    db = get_db()
    try:
        # Catalog of all available AI projects
        ALL_PROJECTS = [
            {
                "id": "sentiment-analyzer",
                "title": "Sentiment Analyzer",
                "description": "Build a real-time sentiment analysis model using NLP techniques on social media text data.",
                "difficulty": "Beginner",
                "tech": ["Python", "NLTK", "Scikit-learn"],
                "duration": "1-2 weeks",
                "icon": "fa-face-smile",
                "color": "#06b6d4"
            },
            {
                "id": "image-classifier",
                "title": "Image Classifier",
                "description": "Train a CNN to classify images from the CIFAR-10 dataset using PyTorch and achieve 85%+ accuracy.",
                "difficulty": "Intermediate",
                "tech": ["PyTorch", "CNN", "CIFAR-10"],
                "duration": "2-3 weeks",
                "icon": "fa-image",
                "color": "#3b82f6"
            },
            {
                "id": "chatbot-rag",
                "title": "Urdu RAG Chatbot",
                "description": "Build a Retrieval Augmented Generation chatbot that answers queries from Urdu PDF documents.",
                "difficulty": "Advanced",
                "tech": ["LangChain", "ChromaDB", "Gemini API"],
                "duration": "3-4 weeks",
                "icon": "fa-robot",
                "color": "#8b5cf6"
            },
            {
                "id": "stock-predictor",
                "title": "Stock Price Predictor",
                "description": "Use LSTM networks to predict stock prices using historical data from the Pakistan Stock Exchange.",
                "difficulty": "Intermediate",
                "tech": ["TensorFlow", "LSTM", "Pandas"],
                "duration": "2-3 weeks",
                "icon": "fa-chart-line",
                "color": "#10b981"
            },
            {
                "id": "object-detection",
                "title": "Real-Time Object Detection",
                "description": "Fine-tune YOLOv8 on a custom dataset and build a live webcam object detection dashboard.",
                "difficulty": "Advanced",
                "tech": ["YOLOv8", "OpenCV", "FastAPI"],
                "duration": "3-4 weeks",
                "icon": "fa-eye",
                "color": "#f59e0b"
            },
            {
                "id": "data-dashboard",
                "title": "ML Data Dashboard",
                "description": "Create an interactive dashboard to visualize and explore a real-world dataset using Python.",
                "difficulty": "Beginner",
                "tech": ["Plotly", "Pandas", "Streamlit"],
                "duration": "1 week",
                "icon": "fa-chart-bar",
                "color": "#ec4899"
            },
        ]

        user_statuses = {}
        if username:
            user = db.query(DBUser).filter(DBUser.username == username).first()
            if user:
                user_projs = db.query(DBUserProject).filter(DBUserProject.user_id == user.id).all()
                for up in user_projs:
                    user_statuses[up.project_id] = {
                        "status": up.status,
                        "registered_at": up.registered_at.isoformat() if up.registered_at else None,
                        "submitted_at": up.submitted_at.isoformat() if up.submitted_at else None,
                        "submission_notes": up.submission_notes
                    }

        result = []
        for proj in ALL_PROJECTS:
            proj_data = dict(proj)
            proj_data["user_status"] = user_statuses.get(proj["id"], None)
            result.append(proj_data)

        return Response(result)
    except Exception as e:
        return Response({"error": str(e)}, status=500)
    finally:
        db.close()


@api_view(["POST"])
def register_project(request):
    """Register a user for a project (status = 'registered')."""
    db = get_db()
    try:
        data = json.loads(request.body)
        username = data.get("username", "")
        project_id = data.get("project_id", "")

        if not username or not project_id:
            return Response({"error": "username and project_id are required"}, status=400)

        user = db.query(DBUser).filter(DBUser.username == username).first()
        if not user:
            return Response({"error": "User not found"}, status=404)

        # Check if already registered
        existing = db.query(DBUserProject).filter(
            DBUserProject.user_id == user.id,
            DBUserProject.project_id == project_id
        ).first()

        if existing:
            return Response({"message": "Already registered", "status": existing.status})

        new_proj = DBUserProject(
            user_id=user.id,
            project_id=project_id,
            status="registered",
            registered_at=datetime.utcnow()
        )
        db.add(new_proj)
        db.commit()
        return Response({"message": "Project registered successfully", "status": "registered"})
    except Exception as e:
        return Response({"error": str(e)}, status=500)
    finally:
        db.close()


@api_view(["POST"])
def submit_project(request):
    """Submit a project (status = 'submitted')."""
    db = get_db()
    try:
        data = json.loads(request.body)
        username = data.get("username", "")
        project_id = data.get("project_id", "")
        submission_notes = data.get("submission_notes", "")

        if not username or not project_id:
            return Response({"error": "username and project_id are required"}, status=400)

        user = db.query(DBUser).filter(DBUser.username == username).first()
        if not user:
            return Response({"error": "User not found"}, status=404)

        proj = db.query(DBUserProject).filter(
            DBUserProject.user_id == user.id,
            DBUserProject.project_id == project_id
        ).first()

        if not proj:
            return Response({"error": "Project not registered. Please register first."}, status=400)

        proj.status = "submitted"
        proj.submitted_at = datetime.utcnow()
        proj.submission_notes = submission_notes
        db.commit()
        return Response({"message": "Project submitted successfully!", "status": "submitted"})
    except Exception as e:
        return Response({"error": str(e)}, status=500)
    finally:
        db.close()

@api_view(['POST'])
def run_python_code(request):
    """Execute Python code submitted by the user in a safe subprocess sandbox."""
    import sys
    import subprocess
    import tempfile
    
    try:
        data = json.loads(request.body)
        code = data.get("code", "")
        
        if not code.strip():
            return Response({"stdout": "", "stderr": "Error: Code is empty.", "exit_code": -1})
            
        # Create a temp file inside workspace
        temp_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "temp_playground")
        os.makedirs(temp_dir, exist_ok=True)
        
        with tempfile.NamedTemporaryFile(suffix=".py", dir=temp_dir, delete=False, mode="w", encoding="utf-8") as f:
            f.write(code)
            temp_file_path = f.name
            
        try:
            # Execute python code in a subprocess
            result = subprocess.run(
                [sys.executable, temp_file_path],
                capture_output=True,
                text=True,
                timeout=5.0
            )
            return Response({
                "stdout": result.stdout,
                "stderr": result.stderr,
                "exit_code": result.returncode
            })
        except subprocess.TimeoutExpired:
            return Response({
                "stdout": "",
                "stderr": "TimeoutError: Execution timed out. Maximum execution time is 5.0 seconds.",
                "exit_code": -1
            })
        finally:
            # Clean up temp file
            if os.path.exists(temp_file_path):
                try:
                    os.remove(temp_file_path)
                except Exception:
                    pass
    except Exception as e:
        return Response({"stdout": "", "stderr": f"System Error: {str(e)}", "exit_code": -1})

