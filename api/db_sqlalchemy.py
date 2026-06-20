import os
from datetime import datetime
from sqlalchemy import create_engine, Column, Integer, String, Boolean, Float, DateTime, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from django.conf import settings

# Database connection details
DB_PATH = os.path.join(settings.BASE_DIR, 'db.sqlite3')
DATABASE_URL = f"sqlite:///{DB_PATH}"

# Connect to the SQLite database
engine = create_engine(
    DATABASE_URL, 
    connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class DBUser(Base):
    __tablename__ = "auth_user"
    
    id = Column(Integer, primary_key=True, index=True)
    password = Column(String(128), nullable=False)
    last_login = Column(DateTime, nullable=True)
    is_superuser = Column(Boolean, default=False)
    username = Column(String(150), unique=True, index=True, nullable=False)
    first_name = Column(String(150), default="")
    last_name = Column(String(150), default="")
    email = Column(String(254), nullable=False)
    is_staff = Column(Boolean, default=False)
    is_active = Column(Boolean, default=True)
    date_joined = Column(DateTime, default=datetime.utcnow, nullable=False)
    
    progress = relationship("DBUserProgress", back_populates="user")
    profile = relationship("DBUserProfile", back_populates="user", uselist=False)

class DBUserProfile(Base):
    __tablename__ = "api_userprofile"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("auth_user.id"), unique=True, nullable=False)
    avatar_url = Column(String(500), nullable=True)
    streak = Column(Integer, default=5)
    study_hours = Column(Float, default=12.5)
    weekly_hours_csv = Column(String(100), default="4.0,3.2,5.0,2.5,4.8,3.0,2.0")
    bio = Column(String(500), nullable=True)
    
    user = relationship("DBUser", back_populates="profile")

class DBCourse(Base):
    __tablename__ = "api_course"
    
    id = Column(Integer, primary_key=True, index=True)
    course_id = Column(String(100), unique=True, nullable=False)
    title = Column(String(200), nullable=False)
    tagline = Column(String, nullable=False)
    difficulty = Column(String(20), default="Beginner")
    duration = Column(String(50), nullable=False)
    instructor = Column(String(100), nullable=False)
    rating = Column(String(50), default="4.8 (100 ratings)")
    image = Column(String(500), nullable=False)
    video_url = Column(String(500), nullable=False)
    
    progress = relationship("DBUserProgress", back_populates="course")

class DBUserProgress(Base):
    __tablename__ = "api_userprogress"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("auth_user.id"), nullable=False)
    course_id = Column(Integer, ForeignKey("api_course.id"), nullable=False)
    progress_percentage = Column(Integer, default=0)
    last_accessed = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    user = relationship("DBUser", back_populates="progress")
    course = relationship("DBCourse", back_populates="progress")

class DBUserProject(Base):
    __tablename__ = "api_userproject"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("auth_user.id"), nullable=False)
    project_id = Column(String(100), nullable=False)  # slug identifier, e.g. 'sentiment-analyzer'
    status = Column(String(20), default="registered")  # 'registered' | 'submitted' | 'completed'
    registered_at = Column(DateTime, default=datetime.utcnow)
    submitted_at = Column(DateTime, nullable=True)
    submission_notes = Column(String(1000), nullable=True)
    
    user = relationship("DBUser")

# Automatically create tables in SQLite if they do not exist yet
Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        return db
    except Exception as e:
        db.close()
        raise e
