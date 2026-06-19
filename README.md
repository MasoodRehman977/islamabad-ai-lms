# Islamabad.AI LMS — Next-Generation AI Learning Platform

A premium, modern AI Learning Management System dashboard built for Islamabad.AI. The platform includes interactive dashboards, course paths, project hubs, and a Virtual AI Mentor powered by the Gemini 2.5 Flash API.

## Project Structure
- `/` - Frontend static web app (HTML, CSS, JS)
- `/api/` - Django app containing REST endpoints (`/api/chat/`, `/api/courses/`, `/api/analytics/`)
- `/lms_project/` - Django configuration files

---

## 🚀 Fast Deployment Guide

### Part 1: Push Project to GitHub

1. **Initialize git and add your files:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Islamabad.AI LMS with Gemini API integration"
   ```

2. **Create a repository on GitHub:**
   - Go to [github.com/new](https://github.com/new).
   - Name it `islamabad-ai-lms`.
   - Leave it public or private, do not add README or gitignore (as we already have them).

3. **Link and push your local files:**
   ```bash
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/islamabad-ai-lms.git
   git branch -M main
   git push -u origin main
   ```

---

### Part 2: Deploy Frontend on GitHub Pages (Free)

1. Go to your repository settings on GitHub: **Settings** -> **Pages**.
2. Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Within 1-2 minutes, your frontend will be live at:
   `https://YOUR_GITHUB_USERNAME.github.io/islamabad-ai-lms/`

---

### Part 3: Deploy Django Backend on Render (Free)

1. Sign up on [Render.com](https://render.com) using your GitHub account.
2. Click **New +** -> **Web Service**.
3. Connect your `islamabad-ai-lms` repository.
4. Configure the Web Service settings:
   - **Name:** `islamabad-ai-backend`
   - **Runtime:** `Python`
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `gunicorn lms_project.wsgi:application --bind 0.0.0.0:$PORT`
5. Under **Environment**, click **Add Environment Variable**:
   - Key: `GEMINI_API_KEY`
   - Value: `YOUR_GEMINI_API_KEY` (paste your API key here)
6. Click **Deploy Web Service**.

Once deployed, copy your Render web service URL (e.g. `https://islamabad-ai-backend.onrender.com`) and update `API_BASE` in `app.js`:
```javascript
const API_BASE = "https://your-render-backend-url.onrender.com";
```
Then push the change back to GitHub!
