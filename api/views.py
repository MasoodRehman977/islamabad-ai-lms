import json
import os
import traceback
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
import google.generativeai as genai

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

@api_view(['GET'])
def get_courses(request):
    """Returns list of available courses"""
    return Response(COURSES_DATA)


@api_view(['GET'])
def get_analytics(request):
    """Returns current student stats and weekly analytics"""
    analytics_data = {
        "student_name": "Muhammad Bilal",
        "skill_score": 85,
        "weekly_hours": 24.5,
        "completed_courses": 3,
        "certificates_earned": 2,
        "weekly_breakdown": {
            "Mon": 4.0, "Tue": 3.2, "Wed": 5.0,
            "Thu": 2.5, "Fri": 4.8, "Sat": 3.0, "Sun": 2.0
        }
    }
    return Response(analytics_data)


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
