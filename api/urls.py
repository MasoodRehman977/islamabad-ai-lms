from django.urls import path
from . import views

urlpatterns = [
    path('courses/', views.get_courses, name='get_courses'),
    path('analytics/', views.get_analytics, name='get_analytics'),
    path('chat/', views.chat_mentor, name='chat_mentor'),
]
