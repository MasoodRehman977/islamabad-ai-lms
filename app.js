// ==================== COURSE DATABASE ====================
const coursesData = {
    "ml-fundamentals": {
        title: "Machine Learning Fundamentals",
        tagline: "Master linear algebra, regression, decision trees, and regression evaluation metrics.",
        difficulty: "Beginner",
        duration: "8 weeks",
        instructor: "Dr. Adnan Mahmood",
        rating: "4.8 (2,410 ratings)",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80",
        videoEmbed: "https://www.youtube.com/embed/ukzFI9rgwfU",
        progress: 80,
        syllabus: [
            {
                title: "Module 1: Introduction to ML Foundations",
                lessons: ["1.1 Course Overview & Environment Setup", "1.2 Supervised vs Unsupervised Learning", "1.3 Linear Algebra & Statistics Review"]
            },
            {
                title: "Module 2: Regression Models",
                lessons: ["2.1 Simple & Multiple Linear Regression", "2.2 Cost Functions & Gradient Descent", "2.3 Regularization: Ridge, Lasso & ElasticNet"]
            },
            {
                title: "Module 3: Classification Techniques",
                lessons: ["3.1 Logistic Regression", "3.2 Support Vector Machines (SVM)", "3.3 Decision Trees & Random Forests"]
            }
        ]
    },
    "deep-learning": {
        title: "Deep Learning with TensorFlow",
        tagline: "Build Neural Networks, CNNs, RNNs, and Transformers for custom vision and sequence modeling applications.",
        difficulty: "Intermediate",
        duration: "10 weeks",
        instructor: "Dr. Adnan Mahmood",
        rating: "4.9 (1,240 ratings)",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=80",
        videoEmbed: "https://www.youtube.com/embed/VyWAvY2CF9c",
        progress: 45,
        syllabus: [
            {
                title: "Module 1: Introduction to Tensors & Neural Nets",
                lessons: ["1.1 Tensor Math Operations", "1.2 Multi-Layer Perceptrons from scratch", "1.3 Backpropagation mathematically"]
            },
            {
                title: "Module 2: Convolutional Neural Networks (CNNs)",
                lessons: ["2.1 Convolutional operations & pooling", "2.2 Replicating AlexNet & VGG-16", "2.3 Image Classification Lab project"]
            },
            {
                title: "Module 3: Sequence Modeling & RNNs",
                lessons: ["3.1 Understanding LSTMs and GRUs", "3.2 Sentiment Classification on text streams"]
            },
            {
                title: "Module 4: Modern Transformer Architectures",
                lessons: ["4.1 Self-Attention and Multi-Head Attention", "4.2 Building a Transformer Encoder"]
            }
        ]
    },
    "generative-ai": {
        title: "Generative AI & LLMs",
        tagline: "Fine-tune large language models, implement RAG systems, and deploy Agentic AI tools.",
        difficulty: "Advanced",
        duration: "6 weeks",
        instructor: "Engr. Sarah Jameel",
        rating: "4.95 (840 ratings)",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
        videoEmbed: "https://www.youtube.com/embed/2IK3DFHRFfw",
        progress: 10,
        syllabus: [
            {
                title: "Module 1: Large Language Model Foundations",
                lessons: ["1.1 Autoregressive models overview", "1.2 GPT & BERT architectures compared", "1.3 Prompt Engineering best practices"]
            },
            {
                title: "Module 2: Embedding Spaces & Vector Databases",
                lessons: ["2.1 Storing high-dimensional vectors", "2.2 Similarity search algorithms (Cosine, L2)", "2.3 Setting up ChromaDB & Pinecone"]
            },
            {
                title: "Module 3: Retrieval-Augmented Generation (RAG)",
                lessons: ["3.1 Implementing RAG pipelines", "3.2 Prompt context injection strategies", "3.3 Evaluation metrics for RAG systems"]
            }
        ]
    },
    "computer-vision": {
        title: "Computer Vision",
        tagline: "Learn image recognition, object detection with YOLO, image segmentation, and GANs.",
        difficulty: "Intermediate",
        duration: "8 weeks",
        instructor: "Dr. Adnan Mahmood",
        rating: "4.7 (910 ratings)",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
        videoEmbed: "https://www.youtube.com/embed/WFr2WgN9_xE",
        progress: 0,
        syllabus: [
            {
                title: "Module 1: Classical Image Processing",
                lessons: ["1.1 Image representations & filtering", "1.2 Kernel transformations & Sobel filter", "1.3 OpenCV basics for image loading"]
            },
            {
                title: "Module 2: Deep Vision Pipelines",
                lessons: ["2.1 CNN architectures for feature maps", "2.2 Transfer learning with ResNet50"]
            }
        ]
    },
    "nlp": {
        title: "Natural Language Processing",
        tagline: "Study speech recognition, sequence modeling, BERT, text generation, and custom embeddings.",
        difficulty: "Advanced",
        duration: "8 weeks",
        instructor: "Engr. Sarah Jameel",
        rating: "4.8 (750 ratings)",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&q=80",
        videoEmbed: "https://www.youtube.com/embed/CMrHM8a3hqw",
        progress: 0,
        syllabus: [
            {
                title: "Module 1: Text Tokenization & Representation",
                lessons: ["1.1 Byte-Pair Encoding (BPE)", "1.2 TF-IDF & Word2Vec representations"]
            },
            {
                title: "Module 2: Attention Mechanisms",
                lessons: ["2.1 Query-Key-Value paradigm", "2.2 Scaling attention layers"]
            }
        ]
    },
    "mlops": {
        title: "MLOps & Deployment",
        tagline: "Deploy pipelines with Docker, Kubernetes, MLflow, Airflow, and configure model drift monitors.",
        difficulty: "Advanced",
        duration: "12 weeks",
        instructor: "Kamran Khan",
        rating: "4.9 (1,020 ratings)",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
        videoEmbed: "https://www.youtube.com/embed/s8XjEuplx_U",
        progress: 0,
        syllabus: [
            {
                title: "Module 1: Production Engineering",
                lessons: ["1.1 Virtual environments & dependencies", "1.2 Building Docker containers for Flask models"]
            },
            {
                title: "Module 2: Model Tracking & Lifecycles",
                lessons: ["2.1 Registering models with MLflow", "2.2 Hyperparameter tracking runs"]
            }
        ]
    }
};

// ==================== APP INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initHeroNeuralCanvas();
    initChatInterface();
    initCourseDetails();
    initNewsletter();
});

// ==================== SCREEN ROUTING & NAVIGATION ====================
function initNavigation() {
    const navLinks = document.querySelectorAll(".nav-link, .sidebar-link");
    const viewPanels = document.querySelectorAll(".view-panel");
    const mobileToggle = document.getElementById("mobile-toggle");
    const navLinksContainer = document.querySelector(".nav-links");

    // Helper function to switch screens
    window.switchView = function(targetId) {
        viewPanels.forEach(panel => {
            panel.classList.remove("active");
        });
        
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) {
            targetPanel.classList.add("active");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }

        // Keep header nav links highlighted
        document.querySelectorAll(".nav-link").forEach(link => {
            link.classList.remove("active");
            const linkTarget = link.getAttribute("data-target");
            
            // Highlight Home if landing-page is active
            if (targetId === "landing-page" && linkTarget === "landing-page") {
                link.classList.add("active");
            } else if (targetId === "student-dashboard" && linkTarget === "student-dashboard") {
                link.classList.add("active");
            } else if (targetId === "ai-assistant-page" && linkTarget === "ai-assistant-page") {
                link.classList.add("active");
            } else if (targetId === "course-detail-page" && linkTarget === "courses-section") {
                link.classList.add("active");
            }
        });
    };

    // Nav Links event listener
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = link.getAttribute("data-target") || link.getAttribute("href").substring(1);
            
            if (target === "courses-section") {
                // If courses section is on landing page
                switchView("landing-page");
                setTimeout(() => {
                    const el = document.getElementById("courses-section");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 200);
            } else if (target === "project-lab-section") {
                switchView("landing-page");
                setTimeout(() => {
                    const el = document.getElementById("project-lab-section");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 200);
            } else if (target === "certificates-section") {
                switchView("landing-page");
                setTimeout(() => {
                    const el = document.getElementById("certificates-section");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 200);
            } else {
                switchView(target);
            }

            // Close mobile menu if open
            if (navLinksContainer.classList.contains("mobile-active")) {
                navLinksContainer.classList.remove("mobile-active");
            }
        });
    });

    // Mobile Hamburger Menu Toggle
    mobileToggle.addEventListener("click", () => {
        navLinksContainer.classList.toggle("mobile-active");
    });

    // Extra Call-To-Action buttons mapping
    document.getElementById("explore-courses-btn").addEventListener("click", () => {
        document.getElementById("courses-section").scrollIntoView({ behavior: "smooth" });
    });
    
    document.getElementById("start-learning-hero-btn").addEventListener("click", () => {
        switchView("student-dashboard");
    });
    
    document.getElementById("start-learning-nav-btn").addEventListener("click", () => {
        switchView("student-dashboard");
    });

    document.getElementById("nav-logo-btn").addEventListener("click", (e) => {
        e.preventDefault();
        switchView("landing-page");
    });

    // Sidebar widgets connectors
    document.getElementById("dash-courses-trigger").addEventListener("click", (e) => {
        e.preventDefault();
        switchView("landing-page");
        setTimeout(() => {
            document.getElementById("courses-section").scrollIntoView({ behavior: "smooth" });
        }, 100);
    });

    document.getElementById("dash-chat-trigger").addEventListener("click", (e) => {
        e.preventDefault();
        switchView("ai-assistant-page");
    });

    document.getElementById("dash-projects-trigger").addEventListener("click", (e) => {
        e.preventDefault();
        switchView("landing-page");
        setTimeout(() => {
            document.getElementById("project-lab-section").scrollIntoView({ behavior: "smooth" });
        }, 100);
    });

    document.getElementById("dash-cert-trigger").addEventListener("click", (e) => {
        e.preventDefault();
        switchView("landing-page");
        setTimeout(() => {
            document.getElementById("certificates-section").scrollIntoView({ behavior: "smooth" });
        }, 100);
    });

    // Login Toggle Alert (Simulation)
    document.getElementById("login-toggle-btn").addEventListener("click", () => {
        alert("Authentication Integration: Login module activated. Connecting to Islamabad.AI SSO portal.");
    });
}

// ==================== NEURAL NETWORK CANVAS ANIMATION ====================
function initHeroNeuralCanvas() {
    const canvas = document.getElementById("neural-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];
    const maxParticles = 60;
    const connectionDistance = 110;
    
    // Set proper resolution
    function resizeCanvas() {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = rect.height * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    
    window.addEventListener("resize", () => {
        cancelAnimationFrame(animationId);
        resizeCanvas();
        createParticles();
        animate();
    });

    class Particle {
        constructor(width, height) {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.7;
            this.vy = (Math.random() - 0.5) * 0.7;
            this.radius = Math.random() * 2 + 1.5;
            this.color = Math.random() > 0.5 ? "#06b6d4" : "#3b82f6";
        }

        update(width, height) {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce on boundaries
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw(width, height) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 8;
            ctx.shadowColor = this.color;
            ctx.fill();
            ctx.shadowBlur = 0; // reset shadow
        }
    }

    function createParticles() {
        const rect = canvas.getBoundingClientRect();
        particles = [];
        for (let i = 0; i < maxParticles; i++) {
            particles.push(new Particle(rect.width, rect.height));
        }
    }

    // Mouse interactive node
    let mouse = { x: null, y: null };
    canvas.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    canvas.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
    });

    function animate() {
        const rect = canvas.getBoundingClientRect();
        ctx.clearRect(0, 0, rect.width, rect.height);

        // Update and draw particles
        particles.forEach(p => {
            p.update(rect.width, rect.height);
            p.draw(rect.width, rect.height);
        });

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < connectionDistance) {
                    const alpha = (1 - dist / connectionDistance) * 0.18;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
                    ctx.lineWidth = 0.85;
                    ctx.stroke();
                }
            }

            // Mouse interaction drawing
            if (mouse.x !== null && mouse.y !== null) {
                const dx = particles[i].x - mouse.x;
                const dy = particles[i].y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < connectionDistance + 20) {
                    const alpha = (1 - dist / (connectionDistance + 20)) * 0.35;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }

        animationId = requestAnimationFrame(animate);
    }

    resizeCanvas();
    createParticles();
    animate();
}

// ==================== INTERACTIVE DYNAMIC COURSE DETAILS ====================
function initCourseDetails() {
    const courseCards = document.querySelectorAll(".course-card");
    const syllabusContainer = document.querySelector(".syllabus-accordion");

    // Dynamic loader function
    function loadCourseDetail(courseId) {
        const course = coursesData[courseId];
        if (!course) return;

        // Populate course header/detail
        document.getElementById("course-det-title").innerText = course.title;
        document.querySelector(".course-detail-tagline").innerText = course.tagline;
        document.querySelector(".course-badge").innerText = course.difficulty;
        document.querySelector(".course-detail-meta").innerHTML = `
            <span><i class="fa-solid fa-user-tie"></i> ${course.instructor}</span>
            <span><i class="fa-solid fa-star"></i> ${course.rating}</span>
            <span><i class="fa-solid fa-globe"></i> English / Urdu subtitles</span>
        `;

        // Reset video preview box to image and play button
        const videoBox = document.querySelector(".video-preview-box");
        videoBox.innerHTML = `
            <img src="${course.image}" alt="Video cover" class="video-cover" id="course-det-img">
            <button class="video-play-btn" id="play-video-btn"><i class="fa-solid fa-play"></i></button>
        `;
        
        // Video play action — replace cover image with YouTube iframe
        const playBtn = document.getElementById("play-video-btn");
        playBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            e.preventDefault();
            console.log("Play button clicked, loading video:", course.videoEmbed);
            if (course.videoEmbed) {
                videoBox.innerHTML = `
                    <iframe class="video-iframe" 
                            src="${course.videoEmbed}?autoplay=1&mute=1&rel=0" 
                            title="${course.title}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen
                            style="width:100%;height:100%;border:none;">
                    </iframe>
                `;
            } else {
                alert("This course video is currently offline.");
            }
        });

        // Render Action Button based on progress
        const actionBtn = document.getElementById("course-action-btn");
        if (course.progress > 0) {
            actionBtn.innerHTML = `Resume Course (${course.progress}%) <i class="fa-solid fa-chevron-right"></i>`;
            actionBtn.onclick = () => switchView("student-dashboard");
        } else {
            actionBtn.innerHTML = `Enroll in Course <i class="fa-solid fa-plus"></i>`;
            actionBtn.onclick = () => {
                course.progress = 10; // Start course progress
                alert(`Successfully enrolled in ${course.title}! Redirecting to student panel.`);
                switchView("student-dashboard");
            };
        }

        // Render syllabus
        syllabusContainer.innerHTML = "";
        course.syllabus.forEach((module, index) => {
            const moduleItem = document.createElement("div");
            moduleItem.className = `syllabus-item ${index === 0 ? "active" : ""}`;
            
            const header = document.createElement("div");
            header.className = "syllabus-header";
            header.innerHTML = `
                <h4>${module.title}</h4>
                <span class="syllabus-icon"><i class="fa-solid ${index === 0 ? "fa-chevron-down" : "fa-chevron-right"}"></i></span>
            `;
            
            const content = document.createElement("div");
            content.className = "syllabus-content";
            
            const list = document.createElement("ul");
            list.className = "lesson-list";
            
            module.lessons.forEach((lesson, lessonIndex) => {
                const item = document.createElement("li");
                // simulate some completed lessons if progress is high
                const completed = course.progress > 40 || (course.progress > 0 && index === 0 && lessonIndex < 2);
                item.className = completed ? "lesson-completed" : "";
                item.innerHTML = `
                    <i class="fa-solid ${completed ? "fa-circle-check" : "fa-circle"}"></i>
                    ${lesson}
                    <span class="duration">${Math.floor(Math.random() * 20) + 15} mins</span>
                `;
                list.appendChild(item);
            });
            
            content.appendChild(list);
            moduleItem.appendChild(header);
            moduleItem.appendChild(content);
            syllabusContainer.appendChild(moduleItem);

            // Accordion toggle click listener
            header.addEventListener("click", () => {
                const isActive = moduleItem.classList.contains("active");
                
                // Close all modules
                document.querySelectorAll(".syllabus-item").forEach(item => {
                    item.classList.remove("active");
                    item.querySelector(".syllabus-icon i").className = "fa-solid fa-chevron-right";
                });

                if (!isActive) {
                    moduleItem.classList.add("active");
                    header.querySelector(".syllabus-icon i").className = "fa-solid fa-chevron-down";
                }
            });
        });

        switchView("course-detail-page");
    }

    // Bind event listeners to card clicks
    courseCards.forEach(card => {
        card.addEventListener("click", () => {
            const courseId = card.getAttribute("data-course-id");
            loadCourseDetail(courseId);
        });
    });

    // Course Detail Enroll links
    document.querySelectorAll(".enroll-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation(); // prevent card container click
            const courseId = btn.getAttribute("data-course-id");
            loadCourseDetail(courseId);
        });
    });

    document.getElementById("back-to-courses-btn").addEventListener("click", () => {
        switchView("landing-page");
        setTimeout(() => {
            document.getElementById("courses-section").scrollIntoView({ behavior: "smooth" });
        }, 100);
    });

    // Verified Certificate actions
    document.getElementById("download-cert-btn").addEventListener("click", () => {
        alert("Downloading cryptographically verified certificate: CERT-AI-DL-9823.pdf");
    });

    document.getElementById("share-linkedin-btn").addEventListener("click", () => {
        alert("Connecting to LinkedIn Credential API to share certificate 'Deep Learning with TensorFlow' issued by Islamabad.AI.");
    });

    // Dashboard personalized recommendations
    document.getElementById("rec-watch-btn").addEventListener("click", () => {
        loadCourseDetail("deep-learning");
    });
    
    document.getElementById("rec-proj-btn").addEventListener("click", () => {
        switchView("landing-page");
        setTimeout(() => {
            document.getElementById("project-lab-section").scrollIntoView({ behavior: "smooth" });
        }, 100);
    });
}

// ==================== MOCK CHAT INTERFACE WITH AI MENTOR ====================
function initChatInterface() {
    const chatInput = document.getElementById("chat-input-field");
    const sendBtn = document.getElementById("chat-send-btn");
    const messagesContainer = document.getElementById("chat-messages-container");
    const promptButtons = document.querySelectorAll(".prompt-btn");

    let API_BASE = "";
    const isLocalhost = ["localhost", "127.0.0.1", "192.168.1.12"].includes(window.location.hostname);
    if (isLocalhost) {
        API_BASE = window.location.origin;
    } else {
        // Fallback to the PC's Wi-Fi IP address so mobile devices can access the backend server
        API_BASE = "http://192.168.1.12:8080";
    }

    const answers = {
        code: `Here is an explanation of the self-attention formula in Transformers:

$$Attention(Q, K, V) = softmax(\\frac{QK^T}{\\sqrt{d_k}})V$$

In PyTorch, a single head self-attention can be implemented as follows:
\`\`\`python
import torch
import torch.nn as nn
import math

class SelfAttention(nn.Module):
    def __init__(self, d_model):
        super().__init__()
        self.q_linear = nn.Linear(d_model, d_model)
        self.k_linear = nn.Linear(d_model, d_model)
        self.v_linear = nn.Linear(d_model, d_model)
        
    def forward(self, x):
        # x shape: [batch_size, seq_len, d_model]
        Q = self.q_linear(x)
        K = self.k_linear(x)
        V = self.v_linear(x)
        
        # Matrix multiply Q and K.T, then scale
        scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(K.size(-1))
        
        # Softmax to get attention weights
        attention_weights = torch.softmax(scores, dim=-1)
        
        # Output is attention weights multiplied by V
        return torch.matmul(attention_weights, V)
\`\`\`
Let me know if you want me to explain backpropagation through these layers!`,

        resume: `To stand out to recruiters in Islamabad's growing AI/ML ecosystem, your resume should highlight:
1. **GitHub Repositories**: Link to projects containing clean, modular PyTorch or TensorFlow code, rather than notebook scraps.
2. **Key Architectures**: Explicitly mention experience fine-tuning LLMs (e.g., Llama-3, Mistral) using LoRA/QLoRA or implementing RAG indexes.
3. **MLOps Tools**: Add tools like Docker, MLflow, or Weights & Biases. 
4. **Structured Format**:
   - *Summary*: 2-3 lines emphasizing system implementation speed and model evaluation accuracy.
   - *Technical Skills*: Language, Deep Learning, Cloud/Deployments.
   - *Projects*: Quantify achievements (e.g., "reduced model latency by 35% through quantization").

Would you like me to analyze a specific project description?`,

        interview: `Here is a practice interview question for an AI/ML Intern position:
**Question:** Explain the difference between L1 and L2 regularization. When would you prefer one over the other?

**Suggested Answer Outline:**
* **Formulas:** L1 adds the sum of absolute values of weights ($|w_i|$), while L2 adds the sum of squared values of weights ($w_i^2$) to the loss function.
* **Effect:** L1 produces sparse weights (zeroing out less important features), acting as built-in feature selection. L2 shrinks weights close to zero but keeps all features.
* **Selection:** Use L1 when you suspect most features are irrelevant or redundant and you need a compact model. Use L2 when you have many correlated features and want to prevent overfitting while preserving all signal.

Would you like to try answering a follow-up coding challenge?`,

        career: `Here is a structured career roadmap to become a Senior Generative AI Engineer in Islamabad:

1. **Phase 1: Foundations (Months 1-3)**
   - Linear algebra, calculus, and multi-variable optimization.
   - Python scripting, NumPy, Pandas, Scikit-Learn.
   
2. **Phase 2: Deep Learning (Months 4-6)**
   - Building feedforward and convolutional neural networks in PyTorch.
   - Understanding loss landscapes, optimizers (AdamW, SGD), and tuning.

3. **Phase 3: LLM & Generative Systems (Months 7-9)**
   - Transformer blocks, tokenizers, scaling laws.
   - Prompt engineering, Vector Databases (Pinecone, ChromaDB), and RAG frameworks.

4. **Phase 4: Production & MLOps (Months 10-12)**
   - Dockerization, cloud APIs (AWS/GCP), CI/CD pipelines for models, Triton Inference Server.

Would you like recommendation links to courses for any of these specific phases?`,

        project: `Here are three high-impact portfolio projects tailored for recruiters:

1. **Urdu RAG System (Highly Recommended locally)**
   - **Idea:** A system that reads Urdu PDFs, parses them into tokens using multilingual embeddings, and answers queries in Urdu.
   - **Tech:** LangChain, ChromaDB, HuggingFace Transformers.

2. **Real-Time Automated Defect Detection**
   - **Idea:** Fine-tune a YOLOv8 model to detect flaws in product assembly images via Webhooks.
   - **Tech:** OpenCV, PyTorch, FastAPI, Docker.

3. **Model Quantization Benchmark Tool**
   - **Idea:** Take an open LLM (e.g., Llama-3-8B) and perform INT8/INT4 quantization. Measure memory footprint and response latency differences.
   - **Tech:** AutoGPTQ, PyTorch, HuggingFace PEFT.

Which one of these matches your current skillset?`
    };

    function appendMessage(sender, text) {
        const bubble = document.createElement("div");
        bubble.className = `chat-bubble ${sender}`;
        
        const avatar = document.createElement("div");
        avatar.className = "bubble-avatar";
        avatar.innerHTML = sender === "ai" ? '<i class="fa-solid fa-robot"></i>' : '<i class="fa-solid fa-user"></i>';
        
        const content = document.createElement("div");
        content.className = "bubble-content";
        
        // Simple paragraph wrapper, formatted if code is present
        if (text.includes("```")) {
            // Formatting code block
            const parts = text.split("```");
            let html = "";
            parts.forEach((part, index) => {
                if (index % 2 === 1) {
                    const lines = part.split("\n");
                    const lang = lines[0].trim();
                    const code = lines.slice(1).join("\n").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                    html += `<pre><code class="language-${lang}">${code}</code></pre>`;
                } else {
                    html += `<p>${part.replace(/\n/g, "<br>")}</p>`;
                }
            });
            content.innerHTML = html;
        } else {
            content.innerHTML = `<p>${text.replace(/\n/g, "<br>")}</p>`;
        }
        
        bubble.appendChild(avatar);
        bubble.appendChild(content);
        messagesContainer.appendChild(bubble);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function showTypingIndicator() {
        const indicator = document.createElement("div");
        indicator.className = "chat-bubble ai typing-indicator";
        indicator.innerHTML = `
            <div class="bubble-avatar"><i class="fa-solid fa-robot"></i></div>
            <div class="bubble-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        messagesContainer.appendChild(indicator);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return indicator;
    }

    function handleUserInput() {
        const query = chatInput.value.trim();
        if (!query) return;

        appendMessage("user", query);
        chatInput.value = "";

        const typingIndicator = showTypingIndicator();

        // Connect chatbot to Django API backend endpoint with fallback to client simulation
        fetch(`${API_BASE}/api/chat/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: query })
        })
        .then(res => {
            if (!res.ok) throw new Error("API Offline");
            return res.json();
        })
        .then(data => {
            typingIndicator.remove();
            appendMessage("ai", data.reply);
        })
        .catch(err => {
            console.log("Falling back to local simulation:", err);
            // Local fallback simulation
            setTimeout(() => {
                typingIndicator.remove();
                let lowerQuery = query.toLowerCase();
                let matchedAnswer = "I have noted your query. As an Islamabad.AI mentor, I'll analyze this in detail. If this is related to a course module, code execution, or job hunting in Islamabad, feel free to try clicking the quick action tags on the left!";
                
                if (lowerQuery.includes("code") || lowerQuery.includes("python") || lowerQuery.includes("transformer")) {
                    matchedAnswer = answers.code;
                } else if (lowerQuery.includes("resume") || lowerQuery.includes("cv") || lowerQuery.includes("profile")) {
                    matchedAnswer = answers.resume;
                } else if (lowerQuery.includes("interview") || lowerQuery.includes("question") || lowerQuery.includes("practice")) {
                    matchedAnswer = answers.interview;
                } else if (lowerQuery.includes("career") || lowerQuery.includes("roadmap") || lowerQuery.includes("job")) {
                    matchedAnswer = answers.career;
                } else if (lowerQuery.includes("project") || lowerQuery.includes("idea")) {
                    matchedAnswer = answers.project;
                }

                appendMessage("ai", matchedAnswer);
            }, 1000);
        });
    }

    // Input listeners
    sendBtn.addEventListener("click", handleUserInput);
    chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            handleUserInput();
        }
    });

    // Prompt buttons click listeners
    promptButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const promptType = btn.getAttribute("data-prompt");
            const btnText = btn.innerText.trim();
            
            appendMessage("user", `Requesting information for: ${btnText}`);
            const typingIndicator = showTypingIndicator();

            fetch(`${API_BASE}/api/chat/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: btnText })
            })
            .then(res => {
                if (!res.ok) throw new Error("API Offline");
                return res.json();
            })
            .then(data => {
                typingIndicator.remove();
                appendMessage("ai", data.reply);
            })
            .catch(err => {
                console.log("Falling back to local simulation:", err);
                setTimeout(() => {
                    typingIndicator.remove();
                    appendMessage("ai", answers[promptType]);
                }, 1000);
            });
        });
    });
}

// ==================== NEWSLETTER FORM ====================
function initNewsletter() {
    const form = document.getElementById("newsletter-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = form.querySelector("input").value;
        alert(`Thank you! ${email} has been subscribed to the Islamabad.AI newsletter. We'll send you updates on new courses and local hackathons.`);
        form.reset();
    });
}
