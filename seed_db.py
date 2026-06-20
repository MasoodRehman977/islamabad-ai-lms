import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'lms_project.settings')
django.setup()

from api.models import Course, SyllabusTopic
from django.contrib.auth.models import User

# Ensure a default test user exists
user, created = User.objects.get_or_create(
    username="muhammad_bilal",
    email="bilal@islamabad.ai"
)
if created:
    user.set_password("admin123")
    user.save()
    print("Created default user: muhammad_bilal")

# Delete old records to start fresh
SyllabusTopic.objects.all().delete()
Course.objects.all().delete()

courses = [
    {
        "course_id": "ml-fundamentals",
        "title": "Machine Learning Fundamentals",
        "tagline": "Master linear algebra, regression, decision trees, and regression evaluation metrics.",
        "difficulty": "Beginner",
        "duration": "8 weeks",
        "instructor": "Dr. Adnan Mahmood",
        "rating": "4.8 (2,410 ratings)",
        "image": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80",
        "video_url": "https://www.youtube.com/embed/ukzFI9rgwfU",
        "topics": [
            "Introduction to Linear Algebra and Vector Spaces",
            "Supervised Learning: Linear and Logistic Regression",
            "Decision Trees and Random Forest Classifiers",
            "Model Evaluation Metrics: ROC, AUC, and F1-Score"
        ]
    },
    {
        "course_id": "deep-learning",
        "title": "Deep Learning with TensorFlow",
        "tagline": "Build Neural Networks, CNNs, RNNs, and Transformers for custom vision and sequence modeling applications.",
        "difficulty": "Intermediate",
        "duration": "10 weeks",
        "instructor": "Dr. Adnan Mahmood",
        "rating": "4.9 (1,240 ratings)",
        "image": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=80",
        "video_url": "https://www.youtube.com/embed/VyWAvY2CF9c",
        "topics": [
            "Neural Network Architecture and Forward Propagation",
            "Backpropagation and Optimization Algorithms (Adam, SGD)",
            "Convolutional Neural Networks (CNNs) for Computer Vision",
            "Sequence Modeling: RNNs, LSTMs, and Attention Mechanisms"
        ]
    },
    {
        "course_id": "generative-ai",
        "title": "Generative AI & LLMs",
        "tagline": "Learn prompt engineering, RAG pipelines, fine-tuning, and deploy models locally or on the cloud.",
        "difficulty": "Advanced",
        "duration": "6 weeks",
        "instructor": "Engr. Sarah Jameel",
        "rating": "4.95 (840 ratings)",
        "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
        "video_url": "https://www.youtube.com/embed/2IK3DFHRFfw",
        "topics": [
            "Transformer Architecture and Self-Attention",
            "Prompt Engineering and Few-Shot Learning Strategies",
            "Retrieval-Augmented Generation (RAG) with Vector DBs",
            "Fine-Tuning LLMs using LoRA and QLoRA"
        ]
    },
    {
        "course_id": "computer-vision",
        "title": "Computer Vision",
        "tagline": "Object detection, segmentation, optical flow, and image generation using YOLO and Stable Diffusion.",
        "difficulty": "Intermediate",
        "duration": "8 weeks",
        "instructor": "Dr. Adnan Mahmood",
        "rating": "4.7 (910 ratings)",
        "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
        "video_url": "https://www.youtube.com/embed/WFr2WgN9_xE",
        "topics": [
            "Image Processing Fundamentals & OpenCV Basics",
            "Object Detection with YOLOv8 and SSDs",
            "Semantic and Instance Segmentation (Mask R-CNN)",
            "Generative Vision: GANs and Diffusion Models"
        ]
    },
    {
        "course_id": "nlp",
        "title": "Natural Language Processing",
        "tagline": "Tokenization, word embeddings, sequence-to-sequence models, and sentiment classification.",
        "difficulty": "Advanced",
        "duration": "8 weeks",
        "instructor": "Engr. Sarah Jameel",
        "rating": "4.8 (750 ratings)",
        "image": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&q=80",
        "video_url": "https://www.youtube.com/embed/CMrHM8a3hqw",
        "topics": [
            "Text Preprocessing: Tokenization, Stemming, and Lemmatization",
            "Word Embeddings: Word2Vec, GloVe, and FastText",
            "Sequence-to-Sequence Models with Attention",
            "BERT and Fine-Tuning Encoder Models"
        ]
    },
    {
        "course_id": "mlops",
        "title": "MLOps & Deployment",
        "tagline": "Dockerize ML workflows, build CI/CD pipelines, monitor models, and govern production deployments.",
        "difficulty": "Advanced",
        "duration": "12 weeks",
        "instructor": "Kamran Khan",
        "rating": "4.9 (1,020 ratings)",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
        "video_url": "https://www.youtube.com/embed/s8XjEuplx_U",
        "topics": [
            "Containerization: Building Docker Images for ML Models",
            "Model Registry and Tracking with MLflow",
            "CI/CD Pipelines for Machine Learning Deployment",
            "Model Drift Monitoring and Automated Retraining"
        ]
    }
]

for c_data in courses:
    course = Course.objects.create(
        course_id=c_data["course_id"],
        title=c_data["title"],
        tagline=c_data["tagline"],
        difficulty=c_data["difficulty"],
        duration=c_data["duration"],
        instructor=c_data["instructor"],
        rating=c_data["rating"],
        image=c_data["image"],
        video_url=c_data["video_url"]
    )
    print(f"Created Course: {course.title}")
    
    for idx, topic_title in enumerate(c_data["topics"]):
        SyllabusTopic.objects.create(
            course=course,
            title=topic_title,
            order=idx
        )
        print(f"  Added Topic: {topic_title}")

print("Database seeding completed successfully!")
