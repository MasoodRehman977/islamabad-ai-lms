"""
URL configuration for lms_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import os
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.http import HttpResponse, FileResponse

def serve_index(request):
    file_path = os.path.join(settings.BASE_DIR, 'index.html')
    return FileResponse(open(file_path, 'rb'), content_type='text/html')

def serve_static_root(request, filename):
    file_path = os.path.join(settings.BASE_DIR, filename)
    if not os.path.exists(file_path):
        return HttpResponse("File not found", status=404)
    
    content_type = 'text/plain'
    if filename.endswith('.css'):
        content_type = 'text/css'
    elif filename.endswith('.js'):
        content_type = 'application/javascript'
    elif filename.endswith('.png'):
        content_type = 'image/png'
    elif filename.endswith('.webp'):
        content_type = 'image/webp'
    elif filename.endswith('.mp4'):
        content_type = 'video/mp4'
        
    return FileResponse(open(file_path, 'rb'), content_type=content_type)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', serve_index, name='index'),
    path('<path:filename>', serve_static_root, name='static_files'),
]
