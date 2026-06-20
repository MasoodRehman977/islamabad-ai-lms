from django.urls import path
from . import views

urlpatterns = [
    path('courses/', views.get_courses, name='get_courses'),
    path('analytics/', views.get_analytics, name='get_analytics'),
    path('chat/', views.chat_mentor, name='chat_mentor'),
    path('auth/register/', views.register_user, name='register_user'),
    path('auth/login/', views.login_user, name='login_user'),
    path('courses/progress/', views.update_progress, name='update_progress'),
    path('projects/', views.get_projects, name='get_projects'),
    path('projects/register/', views.register_project, name='register_project'),
    path('projects/submit/', views.submit_project, name='submit_project'),
    path('profile/', views.get_profile, name='get_profile'),
    path('profile/update/', views.update_profile, name='update_profile'),
    path('sandbox/run/', views.run_python_code, name='run_python_code'),
]
