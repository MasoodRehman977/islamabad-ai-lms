from django.db import models
from django.contrib.auth.models import User

class Course(models.Model):
    DIFFICULTY_CHOICES = [
        ('Beginner', 'Beginner'),
        ('Intermediate', 'Intermediate'),
        ('Advanced', 'Advanced'),
    ]
    
    course_id = models.CharField(max_length=100, unique=True)
    title = models.CharField(max_length=200)
    tagline = models.TextField()
    difficulty = models.CharField(max_length=20, choices=DIFFICULTY_CHOICES, default='Beginner')
    duration = models.CharField(max_length=50)
    instructor = models.CharField(max_length=100)
    rating = models.CharField(max_length=50, default='4.8 (100 ratings)')
    image = models.URLField(max_length=500)
    video_url = models.URLField(max_length=500)
    
    def __str__(self):
        return self.title

class SyllabusTopic(models.Model):
    course = models.ForeignKey(Course, related_name='topics', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    order = models.PositiveIntegerField(default=0)
    
    class Meta:
        ordering = ['order']
        
    def __str__(self):
        return f"{self.course.title} - {self.title}"

class UserProgress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    completed_topics = models.ManyToManyField(SyllabusTopic, blank=True)
    progress_percentage = models.PositiveIntegerField(default=0)
    last_accessed = models.DateTimeField(auto_now=True)
    
    class Meta:
        unique_together = ('user', 'course')
        
    def __str__(self):
        return f"{self.user.username} - {self.course.title} ({self.progress_percentage}%)"

class ChatMessage(models.Model):
    SENDER_CHOICES = [
        ('user', 'User'),
        ('ai', 'AI Mentor'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    sender = models.CharField(max_length=10, choices=SENDER_CHOICES)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['timestamp']
        
    def __str__(self):
        return f"{self.user.username} - {self.sender} at {self.timestamp}"
