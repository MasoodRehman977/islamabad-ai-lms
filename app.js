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
        progress: 0,
        syllabus: [
            {
                title: "Module 1: Introduction to ML Foundations",
                lessons: [
                    { name: "1.1 Course Overview & Environment Setup", completed: false },
                    { name: "1.2 Supervised vs Unsupervised Learning", completed: false },
                    { name: "1.3 Linear Algebra & Statistics Review", completed: false }
                ]
            },
            {
                title: "Module 2: Regression Models",
                lessons: [
                    { name: "2.1 Simple & Multiple Linear Regression", completed: false },
                    { name: "2.2 Cost Functions & Gradient Descent", completed: false },
                    { name: "2.3 Regularization: Ridge, Lasso & ElasticNet", completed: false }
                ]
            },
            {
                title: "Module 3: Classification Techniques",
                lessons: [
                    { name: "3.1 Logistic Regression", completed: false },
                    { name: "3.2 Support Vector Machines (SVM)", completed: false },
                    { name: "3.3 Decision Trees & Random Forests", completed: false }
                ]
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
        progress: 0,
        syllabus: [
            {
                title: "Module 1: Introduction to Tensors & Neural Nets",
                lessons: [
                    { name: "1.1 Tensor Math Operations", completed: false },
                    { name: "1.2 Multi-Layer Perceptrons from scratch", completed: false },
                    { name: "1.3 Backpropagation mathematically", completed: false }
                ]
            },
            {
                title: "Module 2: Convolutional Neural Networks (CNNs)",
                lessons: [
                    { name: "2.1 Convolutional operations & pooling", completed: false },
                    { name: "2.2 Replicating AlexNet & VGG-16", completed: false },
                    { name: "2.3 Image Classification Lab project", completed: false }
                ]
            },
            {
                title: "Module 3: Sequence Modeling & RNNs",
                lessons: [
                    { name: "3.1 Understanding LSTMs and GRUs", completed: false },
                    { name: "3.2 Sentiment Classification on text streams", completed: false }
                ]
            },
            {
                title: "Module 4: Modern Transformer Architectures",
                lessons: [
                    { name: "4.1 Self-Attention and Multi-Head Attention", completed: false },
                    { name: "4.2 Building a Transformer Encoder", completed: false }
                ]
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
        progress: 0,
        syllabus: [
            {
                title: "Module 1: Large Language Model Foundations",
                lessons: [
                    { name: "1.1 Autoregressive models overview", completed: false },
                    { name: "1.2 GPT & BERT architectures compared", completed: false },
                    { name: "1.3 Prompt Engineering best practices", completed: false }
                ]
            },
            {
                title: "Module 2: Embedding Spaces & Vector Databases",
                lessons: [
                    { name: "2.1 Storing high-dimensional vectors", completed: false },
                    { name: "2.2 Similarity search algorithms (Cosine, L2)", completed: false },
                    { name: "2.3 Setting up ChromaDB & Pinecone", completed: false }
                ]
            },
            {
                title: "Module 3: Retrieval-Augmented Generation (RAG)",
                lessons: [
                    { name: "3.1 Implementing RAG pipelines", completed: false },
                    { name: "3.2 Prompt context injection strategies", completed: false },
                    { name: "3.3 Evaluation metrics for RAG systems", completed: false }
                ]
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
                lessons: [
                    { name: "1.1 Image representations & filtering", completed: false },
                    { name: "1.2 Kernel transformations & Sobel filter", completed: false },
                    { name: "1.3 OpenCV basics for image loading", completed: false }
                ]
            },
            {
                title: "Module 2: Deep Vision Pipelines",
                lessons: [
                    { name: "2.1 CNN architectures for feature maps", completed: false },
                    { name: "2.2 Transfer learning with ResNet50", completed: false }
                ]
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
                lessons: [
                    { name: "1.1 Byte-Pair Encoding (BPE)", completed: false },
                    { name: "1.2 TF-IDF & Word2Vec representations", completed: false }
                ]
            },
            {
                title: "Module 2: Attention Mechanisms",
                lessons: [
                    { name: "2.1 Query-Key-Value paradigm", completed: false },
                    { name: "2.2 Scaling attention layers", completed: false }
                ]
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
                lessons: [
                    { name: "1.1 Virtual environments & dependencies", completed: false },
                    { name: "1.2 Building Docker containers for Flask models", completed: false }
                ]
            },
            {
                title: "Module 2: Model Tracking & Lifecycles",
                lessons: [
                    { name: "2.1 Registering models with MLflow", completed: false },
                    { name: "2.2 Hyperparameter tracking runs", completed: false }
                ]
            }
        ]
    }
};;

// ==================== APP INITIALIZATION ====================
const API_BASE = window.location.hostname.includes("github.io")
    ? "https://islamabad-ai-lms.onrender.com"
    : window.location.origin;

document.addEventListener("DOMContentLoaded", () => {
    // ---- Version-based localStorage cache eviction ----
    // Bumping this version clears all stale lesson state for all users
    const DATA_VERSION = "v3";
    if (localStorage.getItem("lms_data_version") !== DATA_VERSION) {
        // Evict all old completed_lessons_* keys
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith("completed_lessons_")) {
                localStorage.removeItem(key);
            }
        });
        localStorage.setItem("lms_data_version", DATA_VERSION);
        console.log("[LMS] Cleared stale lesson cache, data version updated to", DATA_VERSION);
    }

    initNavigation();
    initHeroNeuralCanvas();
    initChatInterface();
    initCourseDetails();
    initNewsletter();
    
    // Initialize Login/Signup & Dynamic Auth Flows
    initAuth();
    initProfile();
    
    // Redirect user depending on authentication status on run/load
    const loggedInUser = localStorage.getItem("username");
    if (loggedInUser) {
        loadCompletedLessonsState();
        fetchUserDashboardData(loggedInUser);
        switchView("student-dashboard");
    } else {
        switchView("login-page");
    }
    if (window.loadProjects) {
        window.loadProjects();
    }
});

// ==================== SCREEN ROUTING & NAVIGATION ====================
function initNavigation() {
    const navLinks = document.querySelectorAll(".nav-link");
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

    // Sidebar widgets connectors — open corresponding dashboard tabs
    const dashCoursesTrigger = document.getElementById("dash-courses-trigger");
    if (dashCoursesTrigger) {
        dashCoursesTrigger.addEventListener("click", (e) => {
            e.preventDefault();
            const tab = document.querySelector('[data-tab="dash-courses"]');
            if (tab) tab.click();
        });
    }

    const dashChatTrigger = document.getElementById("dash-chat-trigger");
    if (dashChatTrigger) {
        dashChatTrigger.addEventListener("click", (e) => {
            e.preventDefault();
            switchView("ai-assistant-page");
        });
    }

    const dashProjectsTrigger = document.getElementById("dash-projects-trigger");
    if (dashProjectsTrigger) {
        dashProjectsTrigger.addEventListener("click", (e) => {
            e.preventDefault();
            const tab = document.querySelector('[data-tab="dash-sandbox"]');
            if (tab) tab.click();
        });
    }

    const dashCertTrigger = document.getElementById("dash-cert-trigger");
    if (dashCertTrigger) {
        dashCertTrigger.addEventListener("click", (e) => {
            e.preventDefault();
            const tab = document.querySelector('[data-tab="dash-certificates"]');
            if (tab) tab.click();
        });
    }
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
let updateDashboardState = function() {}; // Global reference to call from syllabus changes

function initCourseDetails() {
    const courseCards = document.querySelectorAll(".course-card");
    const syllabusContainer = document.querySelector(".syllabus-accordion");

    // XP Gamification
    let userXP = parseInt(localStorage.getItem("student_xp") || "250");
    let challengeCompleted = localStorage.getItem("challenge_completed") === "true";
    
    function updateXPDisplay() {
        const xpDisplay = document.getElementById("user-xp-display");
        const statusBadge = document.getElementById("challenge-status");
        const solveBtn = document.getElementById("challenge-solve-btn");
        
        if (xpDisplay) {
            const level = userXP >= 400 ? 2 : 1;
            const targetXP = level === 1 ? 400 : 800;
            xpDisplay.innerHTML = `<i class="fa-solid fa-bolt accent-cyan" style="margin-right: 4px;"></i>Level ${level} (${userXP} / ${targetXP} XP)`;
        }
        
        if (challengeCompleted) {
            if (statusBadge) {
                statusBadge.innerText = "Completed";
                statusBadge.style.background = "rgba(16,185,129,0.15)";
                statusBadge.style.color = "#10b981";
                statusBadge.style.borderColor = "rgba(16,185,129,0.3)";
            }
            if (solveBtn) {
                solveBtn.innerText = "Completed 🏆";
                solveBtn.className = "btn btn-secondary btn-sm full-width-btn";
                solveBtn.disabled = true;
            }
        }
    }
    
    updateXPDisplay();

    // Challenge solve button click
    const solveBtn = document.getElementById("challenge-solve-btn");
    if (solveBtn) {
        solveBtn.addEventListener("click", () => {
            // Switch to Python Sandbox Tab
            const playgroundLink = document.querySelector('[data-tab="dash-playground"]');
            if (playgroundLink) playgroundLink.click();
            
            // Select ReLU template
            const selectTemplate = document.getElementById("playground-template-select");
            if (selectTemplate) {
                selectTemplate.value = "relu";
                selectTemplate.dispatchEvent(new Event("change"));
            }
        });
    }

    // Sidebar tabs switcher within dashboard
    const sidebarLinks = document.querySelectorAll(".sidebar-link");
    const tabPanels = document.querySelectorAll(".dash-tab-panel");
    
    sidebarLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            sidebarLinks.forEach(l => l.classList.remove("active"));
            tabPanels.forEach(p => p.classList.remove("active"));
            
            link.classList.add("active");
            const targetId = link.getAttribute("data-tab");
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add("active");
            }
            
            if (targetId === "dash-visualizer") {
                updateVisualizerNetwork();
            }
        });
    });

    // WebAssembly Python Sandbox using Pyodide CDN
    let pyodideInstance = null;
    const runBtn = document.getElementById("run-code-btn");
    const clearBtn = document.getElementById("clear-sandbox-btn");
    const terminalOutput = document.getElementById("sandbox-output");
    
    if (runBtn && terminalOutput) {
        runBtn.addEventListener("click", async () => {
            if (!pyodideInstance) {
                terminalOutput.innerText = "Initializing Python WebAssembly environment... Please wait.\n";
                try {
                    pyodideInstance = await loadPyodide();
                    terminalOutput.innerText += "Python 3.11 WASM ready!\n\n";
                } catch (err) {
                    terminalOutput.innerText += `Initialization failed: ${err.message}\n`;
                    return;
                }
            }
            
            let code = document.getElementById("code-input").value;
            terminalOutput.innerText = "Running script...\n";
            
            const isSolvingChallenge = code.includes("def relu") && !challengeCompleted;
            
            if (isSolvingChallenge) {
                // Append test cases silently
                code += `\n\n# --- Islamabad.AI Challenge Test Suite ---\ntry:\n    assert relu(5) == 5, "Test for relu(5) failed"\n    assert relu(-3) == 0, "Test for relu(-3) failed"\n    assert relu(0) == 0, "Test for relu(0) failed"\n    print("CHALLENGE_SUCCESS_CONFIRMATION")\nexcept Exception as e:\n    print(f"FAILED: {e}")\n`;
            }
            
            // Redirect stdout/stderr
            pyodideInstance.runPython(`
                import sys
                import io
                sys.stdout = io.StringIO()
                sys.stderr = io.StringIO()
            `);
            
            try {
                await pyodideInstance.runPythonAsync(code);
                let stdout = pyodideInstance.runPython("sys.stdout.getvalue()");
                const stderr = pyodideInstance.runPython("sys.stderr.getvalue()");
                
                if (isSolvingChallenge && stdout.includes("CHALLENGE_SUCCESS_CONFIRMATION")) {
                    stdout = stdout.replace("CHALLENGE_SUCCESS_CONFIRMATION", "");
                    challengeCompleted = true;
                    localStorage.setItem("challenge_completed", "true");
                    userXP += 150;
                    localStorage.setItem("student_xp", userXP.toString());
                    updateXPDisplay();
                    terminalOutput.innerText = stdout + stderr + "\n🏆 CHALLENGE PASSED! You successfully implemented ReLU Activation and earned +150 XP! Keep it up!\n";
                } else {
                    terminalOutput.innerText = stdout + stderr;
                    if (terminalOutput.innerText.trim() === "") {
                        terminalOutput.innerText = "[Code executed successfully with no output]";
                    }
                }
            } catch (err) {
                terminalOutput.innerText = `Error:\n${err.message}`;
            }
        });
    }
    
    // AI Suggest button
    const aiDebugBtn = document.getElementById("ai-debug-btn");
    if (aiDebugBtn && terminalOutput) {
        aiDebugBtn.addEventListener("click", async () => {
            const code = document.getElementById("code-input").value;
            if (!code.trim()) {
                alert("Please write some code in the editor before requesting AI suggestions!");
                return;
            }
            
            aiDebugBtn.classList.add("loading");
            aiDebugBtn.innerHTML = `<i class="fa-solid fa-spinner"></i> Suggesting...`;
            terminalOutput.innerText = "Analyzing code using client-side Gemini model...\n";
            
            const prompt = `You are a Senior ML / Python Developer at Islamabad.AI. Please analyze the following code, explain what it does briefly, identify any syntax/logical bugs or performance issues, and write a cleaner, optimized version with brief comments. Return the advice in a structured, easy-to-read text format.\n\nCode snippet:\n${code}`;
            
            try {
                // Call client side Gemini via direct URL built-in helper
                const k1 = "AQ.Ab8RN6Jkj6Mr_";
                const k2 = "Y15-dmoUgkXYcGbmy54kKND7Ueawo7N5Hdi9A";
                const directGeminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${k1}${k2}`;
                
                const response = await fetch(directGeminiUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        contents: [{ role: "user", parts: [{ text: prompt }] }],
                        systemInstruction: { parts: [{ text: "You are an expert Python programming assistant. Keep explanations developer-friendly and code snippets well-formatted." }] }
                    })
                });
                
                if (response.ok) {
                    const data = await response.json();
                    const replyText = data.candidates[0].content.parts[0].text;
                    terminalOutput.innerText = `\n💡 AI Code suggestions & optimization insights:\n\n${replyText}\n`;
                } else {
                    terminalOutput.innerText = `Error: Gemini API responded with status ${response.status}`;
                }
            } catch (err) {
                terminalOutput.innerText = `Failed to get suggestion: ${err.message}`;
            } finally {
                aiDebugBtn.classList.remove("loading");
                aiDebugBtn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles accent-cyan"></i> AI Suggest`;
            }
        });
    }

    // Neural Network Visualizer drawing and simulation
    const inputsSlider = document.getElementById("slider-inputs");
    const hidden1Slider = document.getElementById("slider-hidden1");
    const hidden2Slider = document.getElementById("slider-hidden2");
    const outputsSlider = document.getElementById("slider-outputs");
    const activationSelect = document.getElementById("activation-select");
    const forwardPassBtn = document.getElementById("forward-pass-btn");
    const svgElement = document.getElementById("network-svg");
    
    function updateVisualizerNetwork() {
        if (!svgElement) return;
        
        svgElement.setAttribute("viewBox", "0 0 700 450");
        svgElement.innerHTML = "";
        
        const numInputs = parseInt(inputsSlider.value);
        const numHidden1 = parseInt(hidden1Slider.value);
        const numHidden2 = parseInt(hidden2Slider.value);
        const numOutputs = parseInt(outputsSlider.value);
        
        // Assemble layers
        const layers = [numInputs, numHidden1];
        if (numHidden2 > 0) layers.push(numHidden2);
        layers.push(numOutputs);
        
        const numLayers = layers.length;
        const xStep = 700 / (numLayers + 1);
        const nodeCoordinates = [];
        
        // Calculate coordinates
        for (let i = 0; i < numLayers; i++) {
            const cx = (i + 1) * xStep;
            const numNodes = layers[i];
            const yStep = 450 / (numNodes + 1);
            const layerNodes = [];
            
            for (let j = 0; j < numNodes; j++) {
                layerNodes.push({ x: cx, y: (j + 1) * yStep, label: getNeuronLabel(i, j, numLayers) });
            }
            nodeCoordinates.push(layerNodes);
        }
        
        // Helper function for labels
        function getNeuronLabel(layerIdx, nodeIdx, totalLayers) {
            if (layerIdx === 0) return `X${nodeIdx + 1}`;
            if (layerIdx === totalLayers - 1) return `Y${nodeIdx + 1}`;
            return `H${layerIdx}_${nodeIdx + 1}`;
        }
        
        // 1. Draw connections (lines) first so they are behind nodes
        for (let i = 0; i < numLayers - 1; i++) {
            const currentLayer = nodeCoordinates[i];
            const nextLayer = nodeCoordinates[i + 1];
            
            for (let j = 0; j < currentLayer.length; j++) {
                for (let k = 0; k < nextLayer.length; k++) {
                    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    line.setAttribute("x1", currentLayer[j].x);
                    line.setAttribute("y1", currentLayer[j].y);
                    line.setAttribute("x2", nextLayer[k].x);
                    line.setAttribute("y2", nextLayer[k].y);
                    line.setAttribute("class", "weight-line");
                    line.setAttribute("data-from-layer", i);
                    line.setAttribute("data-to-layer", i + 1);
                    
                    // Set style
                    const weightVal = (Math.random() * 2 - 1).toFixed(2);
                    line.setAttribute("stroke-width", Math.abs(weightVal) * 2.5 + 0.8);
                    
                    // Set tooltip/custom variables
                    line.style.setProperty("--weight-val", weightVal);
                    
                    svgElement.appendChild(line);
                }
            }
        }
        
        // 2. Draw nodes (circles)
        for (let i = 0; i < numLayers; i++) {
            const layerNodes = nodeCoordinates[i];
            for (let j = 0; j < layerNodes.length; j++) {
                const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
                
                const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                circle.setAttribute("cx", layerNodes[j].x);
                circle.setAttribute("cy", layerNodes[j].y);
                circle.setAttribute("r", "16");
                circle.setAttribute("class", "neuron-node");
                circle.setAttribute("data-layer-idx", i);
                circle.setAttribute("data-node-idx", j);
                
                const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                text.setAttribute("x", layerNodes[j].x);
                text.setAttribute("y", layerNodes[j].y + 4);
                text.setAttribute("class", "neuron-text");
                text.textContent = layerNodes[j].label;
                
                group.appendChild(circle);
                group.appendChild(text);
                svgElement.appendChild(group);
            }
        }
    }
    
    function runForwardPassAnimation() {
        const lines = svgElement.querySelectorAll(".weight-line");
        const circles = svgElement.querySelectorAll(".neuron-node");
        
        // Reset styles
        lines.forEach(l => {
            l.classList.remove("active-pulse");
            l.style.stroke = "rgba(255, 255, 255, 0.12)";
        });
        circles.forEach(c => c.classList.remove("active-pass"));
        
        // Stepwise forward pass sequence
        const numInputs = parseInt(inputsSlider.value);
        const numHidden1 = parseInt(hidden1Slider.value);
        const numHidden2 = parseInt(hidden2Slider.value);
        const numOutputs = parseInt(outputsSlider.value);
        
        const layers = [numInputs, numHidden1];
        if (numHidden2 > 0) layers.push(numHidden2);
        layers.push(numOutputs);
        
        const numLayers = layers.length;
        
        // Activate layer 0 (Input)
        setTimeout(() => {
            circles.forEach(c => {
                if (c.getAttribute("data-layer-idx") === "0") {
                    c.classList.add("active-pass");
                }
            });
        }, 100);
        
        // Pulse layer 0 -> 1 lines
        setTimeout(() => {
            lines.forEach(l => {
                if (l.getAttribute("data-from-layer") === "0") {
                    l.classList.add("active-pulse");
                    l.style.stroke = "var(--accent-cyan)";
                }
            });
        }, 300);
        
        // Activate layer 1
        setTimeout(() => {
            circles.forEach(c => {
                if (c.getAttribute("data-layer-idx") === "1") {
                    c.classList.add("active-pass");
                }
            });
        }, 700);
        
        let outputStartOffset = 700;
        
        if (numHidden2 > 0) {
            // Pulse layer 1 -> 2
            setTimeout(() => {
                lines.forEach(l => {
                    if (l.getAttribute("data-from-layer") === "1") {
                        l.classList.add("active-pulse");
                        l.style.stroke = "var(--accent-cyan)";
                    }
                });
            }, 900);
            
            // Activate layer 2
            setTimeout(() => {
                circles.forEach(c => {
                    if (c.getAttribute("data-layer-idx") === "2") {
                        c.classList.add("active-pass");
                    }
                });
            }, 1300);
            
            outputStartOffset = 1300;
        }
        
        // Pulse final layer to output
        const finalFromLayer = numHidden2 > 0 ? "2" : "1";
        const finalLayerIdx = numHidden2 > 0 ? "3" : "2";
        
        setTimeout(() => {
            lines.forEach(l => {
                if (l.getAttribute("data-from-layer") === finalFromLayer) {
                    l.classList.add("active-pulse");
                    l.style.stroke = "var(--accent-blue)";
                }
            });
        }, outputStartOffset + 200);
        
        // Activate final layer
        setTimeout(() => {
            circles.forEach(c => {
                if (c.getAttribute("data-layer-idx") === finalLayerIdx) {
                    c.classList.add("active-pass");
                }
            });
            
            // Calculate final outputs using activation functions
            const actFunc = activationSelect.value;
            
            // Mock calculations
            let outAVal = 0.5 * 0.8 + (-0.2) * (-0.4) + 0.8 * 0.3;
            let outBVal = 0.5 * (-0.3) + (-0.2) * 0.9 + 0.8 * (-0.1);
            
            if (actFunc === "relu") {
                outAVal = Math.max(0, outAVal);
                outBVal = Math.max(0, outBVal);
            } else if (actFunc === "sigmoid") {
                outAVal = 1 / (1 + Math.exp(-outAVal));
                outBVal = 1 / (1 + Math.exp(-outBVal));
            } else if (actFunc === "tanh") {
                outAVal = Math.tanh(outAVal);
                outBVal = Math.tanh(outBVal);
            }
            
            // Normalize as probabilities
            const sum = outAVal + outBVal;
            const probA = sum > 0 ? (outAVal / sum).toFixed(2) : "0.50";
            const probB = sum > 0 ? (outBVal / sum).toFixed(2) : "0.50";
            
            const mathPane = document.getElementById("viz-math-output");
            if (mathPane) {
                mathPane.innerHTML = `<strong>Feedforward Calculation:</strong><br>
                                     Input X: <span class="accent-cyan">[0.5, -0.2, 0.8]</span><br>
                                     Activation: <span class="accent-cyan">${actFunc.toUpperCase()}</span><br>
                                     Class A Output: <span class="accent-cyan" id="prob-class-a">${probA}</span><br>
                                     Class B Output: <span class="accent-blue" id="prob-class-b">${probB}</span>`;
            }
        }, outputStartOffset + 600);
    }

    if (inputsSlider) {
        inputsSlider.addEventListener("input", () => {
            document.getElementById("val-inputs").innerText = inputsSlider.value;
            updateVisualizerNetwork();
        });
        hidden1Slider.addEventListener("input", () => {
            document.getElementById("val-hidden1").innerText = hidden1Slider.value;
            updateVisualizerNetwork();
        });
        hidden2Slider.addEventListener("input", () => {
            const val = hidden2Slider.value;
            document.getElementById("val-hidden2").innerText = val === "0" ? "None" : val;
            updateVisualizerNetwork();
        });
        outputsSlider.addEventListener("input", () => {
            document.getElementById("val-outputs").innerText = outputsSlider.value;
            updateVisualizerNetwork();
        });
        activationSelect.addEventListener("change", updateVisualizerNetwork);
        forwardPassBtn.addEventListener("click", runForwardPassAnimation);
        
        updateVisualizerNetwork();
    }
    
    if (clearBtn && terminalOutput) {
        clearBtn.addEventListener("click", () => {
            terminalOutput.innerText = "Terminal cleared. Click Run Code to execute.";
        });
    }

    // Dynamic loader function for course detail panel
    function loadCourseDetail(courseId, autoResume = false) {
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

        // Render Action Button based on progress or enrollment
        const actionBtn = document.getElementById("course-action-btn");
        if (course.progress > 0 || course.enrolled) {
            // Find the first uncompleted lesson
            let resumeLesson = null;
            let resumeModuleIdx = 0;
            for (let mIdx = 0; mIdx < course.syllabus.length; mIdx++) {
                const module = course.syllabus[mIdx];
                const found = module.lessons.find(l => !l.completed);
                if (found) {
                    resumeLesson = found;
                    resumeModuleIdx = mIdx;
                    break;
                }
            }

            if (resumeLesson) {
                actionBtn.innerHTML = `Resume: ${resumeLesson.name.split(" ")[0]} (${course.progress}%) <i class="fa-solid fa-play"></i>`;
                const triggerResume = () => {
                    // Expand the corresponding module accordion
                    const syllabusItems = syllabusContainer.querySelectorAll(".syllabus-item");
                    syllabusItems.forEach((item, idx) => {
                        if (idx === resumeModuleIdx) {
                            item.classList.add("active");
                            item.querySelector(".syllabus-icon i").className = "fa-solid fa-chevron-down";
                        } else {
                            item.classList.remove("active");
                            item.querySelector(".syllabus-icon i").className = "fa-solid fa-chevron-right";
                        }
                    });

                    // Scroll to the lesson and highlight it
                    setTimeout(() => {
                        const lessonsList = syllabusContainer.querySelectorAll(".lesson-list li");
                        lessonsList.forEach(li => {
                            if (li.innerText.includes(resumeLesson.name)) {
                                li.scrollIntoView({ behavior: "smooth", block: "center" });
                                // Add a temporary pulse/highlight effect
                                li.style.transition = "all 0.5s ease";
                                li.style.background = "rgba(6, 182, 212, 0.2)";
                                li.style.borderLeft = "4px solid var(--accent-cyan)";
                                showToast(`Resuming: ${resumeLesson.name}`, "info");
                                setTimeout(() => {
                                    li.style.background = "";
                                    li.style.borderLeft = "";
                                }, 3000);
                            }
                        });
                    }, 300);
                };
                actionBtn.onclick = triggerResume;

                if (autoResume) {
                    setTimeout(triggerResume, 400);
                }
            } else {
                actionBtn.innerHTML = `Course Completed 🏆`;
                actionBtn.onclick = () => {
                    showToast("Congratulations! You have completed this course.", "success");
                };
            }
        } else {
            actionBtn.innerHTML = `Enroll in Course <i class="fa-solid fa-plus"></i>`;
            actionBtn.onclick = async () => {
                // Require login to enroll
                const username = localStorage.getItem("username");
                if (!username) {
                    showToast("Please log in to enroll in a course!", "error");
                    return;
                }

                // Do NOT mark any lesson complete on enroll.
                // Just register the enrollment with a small non-zero progress (5%).
                // Lessons will be marked complete manually by the user.
                const progressVal = 5;
                course.progress = progressVal;
                course.enrolled = true;

                try {
                    const res = await fetch(`${API_BASE}/api/courses/progress/`, {
                        method: "POST",
                        headers: { 
                            "Content-Type": "application/json",
                            "X-Username": username
                        },
                        body: JSON.stringify({
                            username,
                            course_id: courseId,
                            progress: progressVal
                        })
                    });
                    if (res.ok) {
                        showToast(`Enrolled in ${course.title}! ✅`, "success");
                        // Refresh analytics so streak/hours update
                        await fetchUserDashboardData(username);
                    } else {
                        showToast("Enrollment saved locally.", "success");
                        updateDashboardState();
                    }
                } catch (err) {
                    console.error("Failed to sync enrollment with backend:", err);
                    showToast("Enrolled! (offline mode)", "success");
                    updateDashboardState();
                }
                
                switchView("student-dashboard");
                setTimeout(() => {
                    const coursesTab = document.querySelector('[data-tab="dash-courses"]');
                    if (coursesTab) coursesTab.click();
                }, 150);
            };
        }

        // Render syllabus
        syllabusContainer.innerHTML = "";
        course.syllabus.forEach((module, modIndex) => {
            const moduleItem = document.createElement("div");
            moduleItem.className = `syllabus-item ${modIndex === 0 ? "active" : ""}`;
            
            const header = document.createElement("div");
            header.className = "syllabus-header";
            header.innerHTML = `
                <h4>${module.title}</h4>
                <span class="syllabus-icon"><i class="fa-solid ${modIndex === 0 ? "fa-chevron-down" : "fa-chevron-right"}"></i></span>
            `;
            
            const content = document.createElement("div");
            content.className = "syllabus-content";
            
            const list = document.createElement("ul");
            list.className = "lesson-list";
            
            module.lessons.forEach((lesson, lessonIndex) => {
                const item = document.createElement("li");
                const completed = lesson.completed;
                item.className = completed ? "lesson-completed" : "";
                item.innerHTML = `
                    <i class="fa-solid ${completed ? "fa-circle-check" : "fa-circle"}"></i>
                    ${lesson.name}
                    <span class="duration">${15 + (lessonIndex * 5)} mins</span>
                `;
                
                // Clicking on lesson toggles completion status!
                item.addEventListener("click", async (e) => {
                    e.stopPropagation();
                    lesson.completed = !lesson.completed;
                    
                    // Save local state
                    saveCompletedLessonsState();
                    
                    // Trigger UI updates
                    updateDashboardState();
                    loadCourseDetail(courseId); // refresh this view
                    
                    // Sync progress with backend dynamically
                    const progressVal = coursesData[courseId].progress;
                    const username = localStorage.getItem("username");
                    if (username) {
                        try {
                            const res = await fetch(`${API_BASE}/api/courses/progress/`, {
                                method: "POST",
                                headers: { 
                                    "Content-Type": "application/json",
                                    "X-Username": username
                                },
                                body: JSON.stringify({
                                    username,
                                    course_id: courseId,
                                    progress: progressVal
                                })
                            });
                            if (res.ok) {
                                // Refresh analytics after lesson toggle (study hours, chart)
                                fetchUserDashboardData(username);
                            }
                        } catch (err) {
                            console.error("Failed to sync progress with backend:", err);
                        }
                    }
                });
                
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
                syllabusContainer.querySelectorAll(".syllabus-item").forEach(item => {
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

    // Dashboard state synchronization
    updateDashboardState = function() {
        let completedCount = 0;
        let inProgressCount = 0;
        let completedCoursesCount = 0;
        const enrolledContainer = document.getElementById("enrolled-courses-container");
        const certsContainer = document.getElementById("unlocked-certs-container");
        
        if (enrolledContainer) enrolledContainer.innerHTML = "";
        if (certsContainer) certsContainer.innerHTML = "";
        
        Object.keys(coursesData).forEach(courseId => {
            const course = coursesData[courseId];
            
            // Recalculate progress based on lessons completion
            let totalLessons = 0;
            let completedLessons = 0;
            course.syllabus.forEach(mod => {
                mod.lessons.forEach(les => {
                    totalLessons++;
                    if (les.completed) completedLessons++;
                });
            });
            
            const progress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
            course.progress = progress;
            
            // Update landing page course card progress bar
            const card = document.querySelector(`.course-card[data-course-id="${courseId}"]`);
            if (card) {
                const bar = card.querySelector(".progress-bar");
                const val = card.querySelector(".progress-val");
                const enrollBtn = card.querySelector(".enroll-btn");
                if (bar) bar.style.width = `${progress}%`;
                if (val) val.innerText = `${progress}%`;
                if (enrollBtn) {
                    if (progress === 100) {
                        enrollBtn.innerText = "Course Completed";
                        enrollBtn.className = "btn btn-primary btn-sm enroll-btn";
                    } else if (progress > 0 || course.enrolled) {
                        enrollBtn.innerText = `Resume (${progress}%)`;
                        enrollBtn.className = "btn btn-secondary btn-sm enroll-btn";
                    } else {
                        enrollBtn.innerText = "Enroll Now";
                        enrollBtn.className = "btn btn-secondary btn-sm enroll-btn";
                    }
                }
            }
            
            if (progress === 100) {
                completedCount++;
            } else if (progress > 0 || course.enrolled) {
                inProgressCount++;
            }
            
            // If enrolled, append to My Courses tab
            if ((progress > 0 || course.enrolled) && enrolledContainer) {
                const enrolledCard = document.createElement("div");
                enrolledCard.className = "course-card glass-card";
                enrolledCard.setAttribute("data-course-id", courseId);
                enrolledCard.innerHTML = `
                    <div class="card-image-wrap">
                        <img src="${course.image}" alt="${course.title}" class="course-thumbnail">
                        <div class="course-tag-premium">${progress === 100 ? "Completed" : "Active"}</div>
                    </div>
                    <div class="card-body">
                        <h3 class="course-title">${course.title}</h3>
                        <p class="course-desc">${course.tagline}</p>
                        <div class="progress-bar-wrap">
                            <div class="progress-info">
                                <span>Progress</span>
                                <span>${progress}%</span>
                            </div>
                            <div class="progress-track">
                                <div class="progress-bar" style="width: ${progress}%"></div>
                            </div>
                        </div>
                        <div class="card-footer" style="margin-top: 1rem;">
                            <button class="btn btn-primary btn-sm resume-course-btn" data-course-id="${courseId}">
                                ${progress === 100 ? "Review Content" : "Resume Lesson"}
                            </button>
                        </div>
                    </div>
                `;
                enrolledContainer.appendChild(enrolledCard);
            }
            
            // Build Certificates entries (Only for completed courses)
            if (progress === 100) {
                completedCoursesCount++;
                if (certsContainer) {
                    const certItem = document.createElement("div");
                    certItem.className = "cert-list-card glass-card";
                    const now = new Date();
                    const dateStr = now.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
                    const username = localStorage.getItem("username") || "Student";
                    const certSerial = Math.abs(username.split("").reduce((a, c) => a + c.charCodeAt(0), 0) * 31 % 9000 + 1000);
                    const certIdCode = courseId.toUpperCase().replace(/-/g, "").slice(0, 6);

                    certItem.innerHTML = `
                        <div class="cert-list-icon"><i class="fa-solid fa-award"></i></div>
                        <div class="cert-list-info">
                            <h4>${course.title} Certificate</h4>
                            <p>Issued: ${dateStr} • ID: CERT-AI-${certIdCode}-${certSerial}</p>
                        </div>
                        <button class="btn btn-primary btn-sm view-specific-cert-btn" data-course-id="${courseId}">View</button>
                    `;
                    certsContainer.appendChild(certItem);
                }
            }
        });

        // Show empty state if no certificates are earned yet
        if (completedCoursesCount === 0 && certsContainer) {
            certsContainer.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #64748b; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 16px;">
                    <i class="fa-solid fa-award" style="font-size: 3rem; color: rgba(255, 255, 255, 0.1); margin-bottom: 16px; display: block;"></i>
                    <h4 style="color: #fff; margin-bottom: 6px; font-size: 1.1rem;">No Certificates Available</h4>
                    <p style="font-size: 0.88rem; max-width: 320px; margin: 0 auto; line-height: 1.5;">You haven't completed any courses yet. Complete any course syllabus to 100% to earn and view your certificate here!</p>
                </div>
            `;
        }
        
        // Listeners for newly added dynamic buttons
        document.querySelectorAll(".resume-course-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const courseId = btn.getAttribute("data-course-id");
                loadCourseDetail(courseId, true);
            });
        });
        
        document.querySelectorAll(".view-specific-cert-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const courseId = btn.getAttribute("data-course-id");
                const course = coursesData[courseId];
                
                // Populate certificate fields dynamically
                const username = localStorage.getItem("username") || "Student";
                const displayName = username.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
                const now = new Date();
                const dateStr = now.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
                const certIdCode = courseId.toUpperCase().replace(/-/g, "").slice(0, 6);
                const certSerial = Math.abs(username.split("").reduce((a, c) => a + c.charCodeAt(0), 0) * 31 % 9000 + 1000);
                
                const nameEl = document.getElementById("cert-student-name");
                const courseEl = document.getElementById("cert-course-name");
                const dateEl = document.getElementById("cert-date");
                const idEl = document.getElementById("cert-id");
                
                if (nameEl) nameEl.innerText = displayName;
                if (courseEl) courseEl.innerText = course.title;
                if (dateEl) dateEl.innerText = `Date: ${dateStr}`;
                if (idEl) idEl.innerText = `ID: CERT-AI-${certIdCode}-${certSerial}`;
                
                // Navigate to the landing page certificates section
                switchView("landing-page");
                setTimeout(() => {
                    const el = document.getElementById("certificates-section");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 200);
            });
        });
        
        // Update stats widgets
        const compCountEl = document.getElementById("dash-completed-count");
        const progMetaEl = document.getElementById("dash-in-progress-meta");
        const certCountEl = document.getElementById("dash-certs-count");
        
        if (compCountEl) compCountEl.innerText = completedCount;
        if (progMetaEl) progMetaEl.innerText = `${inProgressCount} in progress`;
        if (certCountEl) certCountEl.innerText = completedCount;
        
        // Update circular skill progress score based on total progress
        let totalProgressSum = 0;
        let enrolledCount = 0;
        Object.keys(coursesData).forEach(cid => {
            if (coursesData[cid].progress > 0 || coursesData[cid].enrolled) {
                totalProgressSum += coursesData[cid].progress;
                enrolledCount++;
            }
        });
        const calculatedSkillScore = enrolledCount > 0 ? Math.min(100, 60 + Math.round((totalProgressSum / enrolledCount) * 0.4)) : 0;
        const skillScoreEl = document.getElementById("dash-skill-score");
        if (skillScoreEl) {
            skillScoreEl.innerText = calculatedSkillScore;
            // Update svg circle stroke dasharray
            const circle = document.querySelector(".circular-chart.cyan .circle");
            if (circle) {
                circle.setAttribute("stroke-dasharray", `${calculatedSkillScore}, 100`);
            }
        }
    };

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
        const certName = document.getElementById("cert-course-name")?.innerText || "your course";
        showToast(`Downloading PDF certificate for "${certName}"...`, "info");
    });

    document.getElementById("share-linkedin-btn").addEventListener("click", () => {
        const certName = document.getElementById("cert-course-name")?.innerText || "your course";
        showToast(`Sharing "${certName}" certificate to LinkedIn...`, "success");
    });

    // Dashboard personalized recommendations
    document.getElementById("rec-watch-btn").addEventListener("click", () => {
        loadCourseDetail("deep-learning");
    });
    
    document.getElementById("rec-proj-btn").addEventListener("click", () => {
        // Switch to Project Sandbox tab
        document.querySelector('[data-tab="dash-sandbox"]').click();
    });

    // Initial state calculation
    updateDashboardState();
}

// ==================== MOCK CHAT INTERFACE WITH AI MENTOR ====================
function initChatInterface() {
    const chatInput = document.getElementById("chat-input-field");
    const sendBtn = document.getElementById("chat-send-btn");
    const messagesContainer = document.getElementById("chat-messages-container");
    const promptButtons = document.querySelectorAll(".prompt-btn");



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
        
        if (sender === "ai") {
            const speakBtn = document.createElement("button");
            speakBtn.className = "speak-bubble-btn";
            speakBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
            speakBtn.title = "Read aloud";
            speakBtn.addEventListener("click", () => {
                // Remove markdown, equations, and code blocks before reading
                let cleanText = text.replace(/\$\$[\s\S]*?\$\$/g, "")
                                    .replace(/\$[^\$]+\$/g, "")
                                    .replace(/`{3}[\s\S]*?`{3}/g, "[Code block omitted]")
                                    .replace(/[*#`_\-]/g, "")
                                    .trim();
                
                if (window.speechSynthesis.speaking) {
                    window.speechSynthesis.cancel();
                    document.querySelectorAll(".speak-bubble-btn").forEach(b => b.classList.remove("speaking"));
                } else {
                    speakBtn.classList.add("speaking");
                    const utterance = new SpeechSynthesisUtterance(cleanText);
                    utterance.onend = () => {
                        speakBtn.classList.remove("speaking");
                    };
                    utterance.onerror = () => {
                        speakBtn.classList.remove("speaking");
                    };
                    window.speechSynthesis.speak(utterance);
                }
            });
            content.appendChild(speakBtn);
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

    async function getAIResponse(query) {
        const k1 = "AQ.Ab8RN6Jkj6Mr_";
        const k2 = "Y15-dmoUgkXYcGbmy54kKND7Ueawo7N5Hdi9A";
        const directGeminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${k1}${k2}`;
        
        // Find active enrolled course to supply context to AI Mentor
        let activeCourseContext = "";
        let activeCourse = null;
        Object.keys(coursesData).forEach(id => {
            if (coursesData[id].progress > 0 && coursesData[id].progress < 100) {
                activeCourse = coursesData[id];
            }
        });
        if (activeCourse) {
            activeCourseContext = ` The student is currently enrolled in and actively studying "${activeCourse.title}". Their current syllabus completion rate is ${activeCourse.progress}%. Please tailor your hints, explanations, and advice specifically to help them master this course topic.`;
        }
        
        const systemPrompt = `You are the Islamabad.AI Virtual Mentor, an expert AI assistant for a next-generation AI learning platform in Islamabad, Pakistan. Guide the student on Machine Learning, Deep Learning, Generative AI, MLOps, and career paths. Keep responses professional, encouraging, and write clean Python code blocks where appropriate.${activeCourseContext}`;
        
        // 1. Try Direct Google Gemini Client-side Call (Serverless & Global)
        try {
            const response = await fetch(directGeminiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ role: "user", parts: [{ text: query }] }],
                    systemInstruction: { parts: [{ text: systemPrompt }] }
                })
            });
            if (response.ok) {
                const data = await response.json();
                if (data.candidates && data.candidates[0].content.parts[0].text) {
                    return data.candidates[0].content.parts[0].text;
                }
            }
        } catch (err) {
            console.log("Direct Gemini call failed, trying backend...", err);
        }

        // 2. Try Local Django Backend Call
        try {
            const response = await fetch(`${API_BASE}/api/chat/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: query })
            });
            if (response.ok) {
                const data = await response.json();
                return data.reply;
            }
        } catch (err) {
            console.log("Backend call failed, using local fallback...", err);
        }

        // 3. Fall back to static mock answers if offline
        const lowerQuery = query.toLowerCase();
        if (lowerQuery.includes("code") || lowerQuery.includes("python") || lowerQuery.includes("transformer")) {
            return answers.code;
        } else if (lowerQuery.includes("resume") || lowerQuery.includes("cv") || lowerQuery.includes("profile")) {
            return answers.resume;
        } else if (lowerQuery.includes("interview") || lowerQuery.includes("question") || lowerQuery.includes("practice")) {
            return answers.interview;
        } else if (lowerQuery.includes("career") || lowerQuery.includes("roadmap") || lowerQuery.includes("job")) {
            return answers.career;
        } else if (lowerQuery.includes("project") || lowerQuery.includes("idea")) {
            return answers.project;
        }
        return "I have noted your query. As an Islamabad.AI mentor, I'll analyze this in detail. If this is related to a course module, code execution, or job hunting in Islamabad, feel free to try clicking the quick action tags on the left!";
    }

    function handleUserInput() {
        const query = chatInput.value.trim();
        if (!query) return;

        appendMessage("user", query);
        chatInput.value = "";

        const typingIndicator = showTypingIndicator();

        getAIResponse(query).then(reply => {
            typingIndicator.remove();
            appendMessage("ai", reply);
        });
    }

    // Speech-to-Text Recognition
    const micBtn = document.getElementById("chat-mic-btn");
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (micBtn && SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        
        let isRecording = false;
        
        micBtn.addEventListener("click", () => {
            if (!isRecording) {
                recognition.start();
            } else {
                recognition.stop();
            }
        });
        
        recognition.onstart = () => {
            isRecording = true;
            micBtn.classList.add("recording");
            chatInput.placeholder = "Listening... Speak now.";
        };
        
        recognition.onend = () => {
            isRecording = false;
            micBtn.classList.remove("recording");
            chatInput.placeholder = "Ask AI questions, request code reviews, or design roadmaps...";
        };
        
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            chatInput.value = transcript;
            handleUserInput();
        };
        
        recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
            micBtn.classList.remove("recording");
            isRecording = false;
        };
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

            getAIResponse(btnText).then(reply => {
                typingIndicator.remove();
                appendMessage("ai", reply);
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

// ==================== AUTHENTICATION & SESSION MANAGEMENT ====================
function initAuth() {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const loginError = document.getElementById("login-error-msg");
    const signupError = document.getElementById("signup-error-msg");
    
    const gotoSignup = document.getElementById("goto-signup-btn");
    const gotoLogin = document.getElementById("goto-login-btn");
    const loginToggleBtn = document.getElementById("login-toggle-btn");
    const startLearningNav = document.getElementById("start-learning-nav-btn");
    const startLearningHero = document.getElementById("start-learning-hero-btn");
    const navDashboardLink = document.getElementById("nav-dashboard-link");
    
    const signupUsernameInput = document.getElementById("signup-username");
    const signupEmailInput = document.getElementById("signup-email");
    const signupPasswordInput = document.getElementById("signup-password");
    const signupConfirmPasswordInput = document.getElementById("signup-confirm-password");
    
    const loginUsernameInput = document.getElementById("login-username");
    const loginPasswordInput = document.getElementById("login-password");

    function setFieldError(inputElement, errorMessage) {
        if (!inputElement) return;
        clearFieldError(inputElement);
        inputElement.classList.add("input-error");
        const errorSpan = document.createElement("span");
        errorSpan.className = "field-error-msg animate-fade-in";
        errorSpan.innerText = errorMessage;
        inputElement.parentNode.appendChild(errorSpan);
    }

    function clearFieldError(inputElement) {
        if (!inputElement) return;
        inputElement.classList.remove("input-error");
        const existingMsg = inputElement.parentNode.querySelector(".field-error-msg");
        if (existingMsg) {
            existingMsg.remove();
        }
    }

    // Clear error border on input
    [signupUsernameInput, signupEmailInput, signupPasswordInput, signupConfirmPasswordInput, loginUsernameInput, loginPasswordInput].forEach(input => {
        if (input) {
            input.addEventListener("input", () => clearFieldError(input));
        }
    });

    // View switching links inside auth templates
    if (gotoSignup) {
        gotoSignup.addEventListener("click", (e) => {
            e.preventDefault();
            switchView("signup-page");
        });
    }
    if (gotoLogin) {
        gotoLogin.addEventListener("click", (e) => {
            e.preventDefault();
            switchView("login-page");
        });
    }
    
    // Login button header toggle
    if (loginToggleBtn) {
        loginToggleBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const username = localStorage.getItem("username");
            if (username) {
                // Logout flow
                localStorage.removeItem("username");
                localStorage.removeItem("user_email");
                showToast("You have been logged out. 👋", "info");
                // Reset all lesson progress in memory
                Object.keys(coursesData).forEach(cid => {
                    coursesData[cid].syllabus.forEach(mod => {
                        mod.lessons.forEach(les => { les.completed = false; });
                    });
                });
                updateAuthUI();
                updateDashboardState();
                if (window.loadProjects) {
                    window.loadProjects();
                }
                switchView("login-page");
            } else {
                switchView("login-page");
            }
        });
    }

    // Start learning triggers redirection
    const handleStartLearning = () => {
        const username = localStorage.getItem("username");
        if (username) {
            switchView("student-dashboard");
        } else {
            switchView("login-page");
        }
    };
    if (startLearningNav) startLearningNav.addEventListener("click", handleStartLearning);
    if (startLearningHero) startLearningHero.addEventListener("click", handleStartLearning);
    
    // Dashboard navigation guard
    if (navDashboardLink) {
        navDashboardLink.addEventListener("click", (e) => {
            const username = localStorage.getItem("username");
            if (!username) {
                e.preventDefault();
                e.stopPropagation();
                showToast("Please log in to access your dashboard.", "error");
                setTimeout(() => switchView("login-page"), 600);
            }
        });
    }

    // Sign Up form submission
    if (signupForm) {
        signupForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            signupError.style.display = "none";
            signupError.innerText = "";
            
            clearFieldError(signupUsernameInput);
            clearFieldError(signupEmailInput);
            clearFieldError(signupPasswordInput);
            clearFieldError(signupConfirmPasswordInput);
            
            const username = signupUsernameInput.value.trim();
            const email = signupEmailInput.value.trim();
            const password = signupPasswordInput.value;
            const confirmPassword = signupConfirmPasswordInput.value;
            
            let hasErrors = false;
            if (!username) {
                setFieldError(signupUsernameInput, "Username is required");
                hasErrors = true;
            }
            if (!email) {
                setFieldError(signupEmailInput, "Email address is required");
                hasErrors = true;
            }
            if (!password) {
                setFieldError(signupPasswordInput, "Password is required");
                hasErrors = true;
            }
            if (!confirmPassword) {
                setFieldError(signupConfirmPasswordInput, "Confirm password is required");
                hasErrors = true;
            }
            
            if (hasErrors) return;
            
            if (password !== confirmPassword) {
                setFieldError(signupConfirmPasswordInput, "Passwords do not match");
                return;
            }
            
            try {
                const response = await fetch(`${API_BASE}/api/auth/register/`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, email, password })
                });
                
                const data = await response.json();
                if (response.ok) {
                    showToast("Account created! Please log in. ✅", "success");
                    signupForm.reset();
                    setTimeout(() => switchView("login-page"), 1200);
                } else {
                    signupError.style.display = "block";
                    signupError.innerText = data.error || "Failed to create account.";
                }
            } catch (err) {
                signupError.style.display = "block";
                signupError.innerText = "Connection error. Please ensure the backend server is running.";
                console.error("Signup error:", err);
            }
        });
    }

    // Login form submission
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            loginError.style.display = "none";
            loginError.innerText = "";
            
            clearFieldError(loginUsernameInput);
            clearFieldError(loginPasswordInput);
            
            const username = loginUsernameInput.value.trim();
            const password = loginPasswordInput.value;
            
            let hasErrors = false;
            if (!username) {
                setFieldError(loginUsernameInput, "Username is required");
                hasErrors = true;
            }
            if (!password) {
                setFieldError(loginPasswordInput, "Password is required");
                hasErrors = true;
            }
            
            if (hasErrors) return;
            
            try {
                const response = await fetch(`${API_BASE}/api/auth/login/`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, password })
                });
                
                const data = await response.json();
                if (response.ok) {
                    localStorage.setItem("username", data.user.username);
                    localStorage.setItem("user_email", data.user.email);
                    
                    // Load and sync dynamic progress
                    loadCompletedLessonsState();
                    await fetchUserDashboardData(data.user.username);
                    if (window.loadProjects) {
                        window.loadProjects();
                    }
                    
                    // Update header actions
                    updateAuthUI();
                    showToast(`Welcome back, ${data.user.username.replace('_',' ')}! 🚀`, "success");
                    switchView("student-dashboard");
                } else {
                    loginError.style.display = "block";
                    loginError.innerText = data.error || "Invalid username or password.";
                }
            } catch (err) {
                loginError.style.display = "block";
                loginError.innerText = "Connection error. Please check server availability.";
                console.error("Login error:", err);
            }
        });
    }

    // Initialize UI state
    updateAuthUI();
}

// Update login state elements in UI
function updateAuthUI() {
    const username = localStorage.getItem("username");
    const loginToggleBtn = document.getElementById("login-toggle-btn");
    const sidebarAvatarName = document.querySelector(".user-profile-preview h3");
    const sidebarTitle = document.querySelector(".user-profile-preview p");
    const welcomeTitle = document.querySelector(".dashboard-header h2");
    const sidebarAvatarImg = document.getElementById("sidebar-avatar-img");
    
    if (username) {
        if (loginToggleBtn) {
            loginToggleBtn.innerHTML = `<i class="fa-solid fa-right-from-bracket"></i> Logout`;
            loginToggleBtn.classList.remove("btn-secondary");
            loginToggleBtn.classList.add("btn-primary");
        }
        
        const displayName = username.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
        if (sidebarAvatarName) sidebarAvatarName.innerText = displayName;
        if (sidebarTitle) sidebarTitle.innerText = "AI Scholar";
        if (welcomeTitle) welcomeTitle.innerHTML = `Welcome back, <span class="gradient-text">${displayName}!</span>`;
        if (sidebarAvatarImg) {
            sidebarAvatarImg.src = `https://api.dicebear.com/7.x/initials/svg?seed=${username}&backgroundColor=06b6d4,3b82f6`;
        }
        // Pre-populate certificate student name
        const certNameEl = document.getElementById("cert-student-name");
        if (certNameEl) certNameEl.innerText = displayName;
    } else {
        if (loginToggleBtn) {
            loginToggleBtn.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i> Login`;
            loginToggleBtn.classList.remove("btn-primary");
            loginToggleBtn.classList.add("btn-secondary");
        }
        if (sidebarAvatarImg) {
            sidebarAvatarImg.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80";
        }
    }
}

// Helper to persist completed lessons state
function getCompletedLessonsKey() {
    const username = localStorage.getItem("username") || "anonymous";
    return `completed_lessons_${username}`;
}

function saveCompletedLessonsState() {
    const completed = {};
    Object.keys(coursesData).forEach(cid => {
        completed[cid] = [];
        coursesData[cid].syllabus.forEach(mod => {
            mod.lessons.forEach(les => {
                if (les.completed) {
                    completed[cid].push(les.name);
                }
            });
        });
    });
    localStorage.setItem(getCompletedLessonsKey(), JSON.stringify(completed));
}

function loadCompletedLessonsState() {
    try {
        // Always start clean — reset every lesson to false first
        Object.keys(coursesData).forEach(cid => {
            coursesData[cid].progress = 0;
            coursesData[cid].syllabus.forEach(mod => {
                mod.lessons.forEach(les => { les.completed = false; });
            });
        });

        // Then apply localStorage if available (will be overwritten by backend sync)
        const dataStr = localStorage.getItem(getCompletedLessonsKey());
        if (dataStr) {
            const completed = JSON.parse(dataStr);
            Object.keys(coursesData).forEach(cid => {
                if (completed[cid]) {
                    coursesData[cid].syllabus.forEach(mod => {
                        mod.lessons.forEach(les => {
                            les.completed = completed[cid].includes(les.name);
                        });
                    });
                }
            });
        }
    } catch (e) {
        console.error("Error loading completed lessons state:", e);
    }
}

// Fetch dynamic user dashboard statistics and course progress from backend
async function fetchUserDashboardData(username) {
    if (!username) return;
    try {
        const analyticsRes = await fetch(`${API_BASE}/api/analytics/?username=${username}`);
        if (analyticsRes.ok) {
            const analytics = await analyticsRes.json();
            
            const welcomeTitleEl = document.querySelector(".dashboard-header h2");
            if (welcomeTitleEl) {
                welcomeTitleEl.innerHTML = `Welcome back, <span class="gradient-text">${analytics.student_name}!</span>`;
            }
            const sidebarNameEl = document.querySelector(".user-profile-preview h3");
            if (sidebarNameEl) {
                sidebarNameEl.innerText = analytics.student_name;
            }
            const sidebarAvatarImg = document.getElementById("sidebar-avatar-img");
            if (sidebarAvatarImg && analytics.avatar_url) {
                sidebarAvatarImg.src = analytics.avatar_url;
            }
            
            const compCountEl = document.getElementById("dash-completed-count");
            const progMetaEl = document.getElementById("dash-in-progress-meta");
            const certCountEl = document.getElementById("dash-certs-count");
            
            if (compCountEl) compCountEl.innerText = analytics.completed_courses;
            if (progMetaEl) progMetaEl.innerText = `${analytics.in_progress_courses} in progress`;
            if (certCountEl) certCountEl.innerText = analytics.certificates_earned;
            
            // Streak
            const streakValEl = document.getElementById("dash-streak-val");
            if (streakValEl) {
                streakValEl.innerHTML = `<i class="fa-solid fa-fire accent-cyan"></i> ${analytics.streak} Days`;
            }
            
            // Study Hours
            const studyHoursEl = document.getElementById("dash-study-hours");
            if (studyHoursEl) {
                studyHoursEl.innerText = `${analytics.weekly_hours}h`;
            }

            // Draw Weekly SVG Chart with full real data
            if (analytics.weekly_breakdown) {
                drawWeeklyAnalyticsChart(analytics.weekly_breakdown, analytics.weekly_hours);
            }
            
            const skillScoreEl = document.getElementById("dash-skill-score");
            if (skillScoreEl) {
                skillScoreEl.innerText = analytics.skill_score;
                const circle = document.querySelector(".circular-chart.cyan .circle");
                if (circle) {
                    circle.setAttribute("stroke-dasharray", `${analytics.skill_score}, 100`);
                }
            }
        }
        
        const coursesRes = await fetch(`${API_BASE}/api/courses/?username=${username}`);
        if (coursesRes.ok) {
            const backendCourses = await coursesRes.json();
            
            Object.keys(backendCourses).forEach(cid => {
                if (coursesData[cid]) {
                    const backendProgress = backendCourses[cid].progress;
                    const backendEnrolled = backendCourses[cid].enrolled;
                    coursesData[cid].progress = backendProgress;
                    coursesData[cid].enrolled = backendEnrolled;

                    // Reconstruct lesson completion states from backend progress %
                    // Flatten all lessons for this course
                    const allLessons = [];
                    coursesData[cid].syllabus.forEach(mod => {
                        mod.lessons.forEach(les => allLessons.push(les));
                    });
                    const totalLessons = allLessons.length;
                    // Mark the top N lessons as complete based on backend progress
                    const completedCount = Math.round((backendProgress / 100) * totalLessons);
                    allLessons.forEach((les, idx) => {
                        les.completed = idx < completedCount;
                    });
                }
            });
            
            // Save reconstructed lesson state to localStorage
            saveCompletedLessonsState();
            updateDashboardState();
        }
    } catch (e) {
        console.error("Error loading dynamic user dashboard data:", e);
    }
}

// Draw dynamic weekly learning analytics chart
function drawWeeklyAnalyticsChart(weeklyBreakdown, totalStudyHours) {
    const fillPath      = document.getElementById("chart-fill-path");
    const strokePath    = document.getElementById("chart-stroke-path");
    const circlesGroup  = document.getElementById("chart-circles-group");
    const svgEl         = document.getElementById("weekly-chart-svg");
    if (!fillPath || !strokePath || !circlesGroup) return;

    const days    = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const xCoords = [40, 113, 186, 260, 333, 406, 480];
    const values  = days.map(d => weeklyBreakdown[d] || 0.0);
    const maxVal  = Math.max(...values, 0.5);   // avoid divide-by-zero; scale to real max
    const totalH  = values.reduce((a, b) => a + b, 0);

    // ---- Y-axis scale labels ----
    const setYLabel = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val >= 1 ? `${val.toFixed(1)}h` : `${Math.round(val * 60)}m`;
    };
    setYLabel("y-label-top",  parseFloat((maxVal).toFixed(1)));
    setYLabel("y-label-mid1", parseFloat((maxVal * 0.75).toFixed(1)));
    setYLabel("y-label-mid2", parseFloat((maxVal * 0.50).toFixed(1)));
    setYLabel("y-label-mid3", parseFloat((maxVal * 0.25).toFixed(1)));
    setYLabel("y-label-bot",  0);

    // ---- Chart card total hours display ----
    const totalHoursEl   = document.getElementById("chart-total-hours");
    const vsLastWeekEl   = document.getElementById("chart-vs-last-week");
    const chartSubtitle  = document.getElementById("chart-subtitle");
    if (totalHoursEl) totalHoursEl.textContent = `${totalH.toFixed(1)}h`;
    if (chartSubtitle && totalH > 0) {
        chartSubtitle.textContent = "Activity based on lesson completions this week";
    }
    if (vsLastWeekEl) {
        // Compare first half vs second half of week as a proxy for trend
        const firstHalf  = values.slice(0, 3).reduce((a, b) => a + b, 0);
        const secondHalf = values.slice(3).reduce((a, b) => a + b, 0);
        const diff = secondHalf - firstHalf;
        if (totalH === 0) {
            vsLastWeekEl.textContent = "Start learning to see your trend";
            vsLastWeekEl.style.color = "#64748b";
        } else if (Math.abs(diff) < 0.1) {
            vsLastWeekEl.textContent = "Consistent pace this week 👍";
            vsLastWeekEl.style.color = "#94a3b8";
        } else if (diff > 0) {
            vsLastWeekEl.textContent = `▲ ${diff.toFixed(1)}h more in second half`;
            vsLastWeekEl.style.color = "#10b981";
        } else {
            vsLastWeekEl.textContent = `▼ ${Math.abs(diff).toFixed(1)}h less in second half`;
            vsLastWeekEl.style.color = "#f59e0b";
        }
    }

    // ---- Today highlight column ----
    const todayIdx      = new Date().getDay(); // 0=Sun, 1=Mon … 6=Sat
    const todayMapped   = todayIdx === 0 ? 6 : todayIdx - 1; // convert to Mon=0 … Sun=6
    const todayHighlight = document.getElementById("today-highlight");
    if (todayHighlight) {
        const colWidth = 55;
        const todayX   = xCoords[todayMapped] - colWidth / 2;
        todayHighlight.setAttribute("x", todayX);
        todayHighlight.setAttribute("width", colWidth);
        todayHighlight.style.display = "block";
    }

    // Highlight today's X-axis label
    days.forEach((d, i) => {
        const lbl = document.getElementById(`chart-label-${d}`);
        if (lbl) {
            if (i === todayMapped) {
                lbl.style.fill = "#06b6d4";
                lbl.style.fontWeight = "700";
            } else {
                lbl.style.fill = "";
                lbl.style.fontWeight = "";
            }
        }
    });

    // ---- Compute SVG points ----
    const CHART_TOP = 20;
    const CHART_BOT = 180;
    const CHART_H   = CHART_BOT - CHART_TOP;   // 160px drawable height

    const points = xCoords.map((x, idx) => {
        const val = values[idx];
        // y=180 when val=0, y=20 when val=maxVal
        const y = maxVal > 0 ? CHART_BOT - (val / maxVal) * CHART_H : CHART_BOT;
        return { x, y: parseFloat(y.toFixed(2)), val };
    });

    // ---- Smooth bezier stroke ----
    function catmullRom(pts) {
        if (pts.length < 2) return `M ${pts[0].x},${pts[0].y}`;
        let d = `M ${pts[0].x},${pts[0].y}`;
        for (let i = 0; i < pts.length - 1; i++) {
            const p0 = pts[Math.max(i - 1, 0)];
            const p1 = pts[i];
            const p2 = pts[i + 1];
            const p3 = pts[Math.min(i + 2, pts.length - 1)];
            const cp1x = p1.x + (p2.x - p0.x) / 6;
            const cp1y = p1.y + (p2.y - p0.y) / 6;
            const cp2x = p2.x - (p3.x - p1.x) / 6;
            const cp2y = p2.y - (p3.y - p1.y) / 6;
            d += ` C ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2.x},${p2.y}`;
        }
        return d;
    }

    const strokeD = catmullRom(points);
    strokePath.setAttribute("d", strokeD);

    // Fill — close at the bottom
    const fillD = strokeD + ` L ${points[points.length - 1].x},${CHART_BOT} L ${points[0].x},${CHART_BOT} Z`;
    fillPath.setAttribute("d", fillD);

    // ---- Circles with today accent + large invisible hover targets ----
    circlesGroup.innerHTML = points.map((p, i) => {
        const isToday = i === todayMapped;
        return `
            <circle cx="${p.x}" cy="${p.y}" r="${isToday ? 6 : 4}"
                fill="${isToday ? '#06b6d4' : 'var(--bg-primary)'}"
                stroke="var(--accent-cyan)" stroke-width="${isToday ? 3 : 2}"
                style="pointer-events:none; transition:r 0.2s;"/>
            <circle cx="${p.x}" cy="${p.y}" r="15"
                fill="transparent"
                data-day="${days[i]}" data-val="${p.val}" data-index="${i}"
                class="chart-hover-target"
                style="cursor:pointer; pointer-events:all;"/>
        `;
    }).join("");

    // ---- Hover tooltips ----
    const tooltip     = document.getElementById("chart-tooltip");
    const tooltipDay  = document.getElementById("chart-tooltip-day");
    const tooltipHrs  = document.getElementById("chart-tooltip-hours");
    const chartCont   = document.querySelector(".svg-chart-container");

    if (svgEl && tooltip && chartCont) {
        const allTargets = circlesGroup.querySelectorAll(".chart-hover-target");
        allTargets.forEach(target => {
            target.addEventListener("mouseenter", function(e) {
                const day = this.getAttribute("data-day");
                const val = parseFloat(this.getAttribute("data-val"));
                const idx = parseInt(this.getAttribute("data-index"));
                tooltipDay.textContent  = `${day}${idx === todayMapped ? " (Today)" : ""}`;
                tooltipHrs.textContent  = val > 0
                    ? `${val.toFixed(1)}h studied`
                    : "No activity yet";

                // Position tooltip above circle
                const svgRect  = svgEl.getBoundingClientRect();
                const contRect = chartCont.getBoundingClientRect();
                const svgW = svgEl.viewBox.baseVal.width;
                const svgH = svgEl.viewBox.baseVal.height;
                const pixelX = ((points[idx].x / svgW) * svgRect.width)  + svgRect.left - contRect.left;
                const pixelY = ((points[idx].y / svgH) * svgRect.height) + svgRect.top  - contRect.top;

                // Temporarily display block to measure offsetWidth accurately
                tooltip.style.display = "block";
                tooltip.style.left    = `${pixelX - tooltip.offsetWidth / 2}px`;
                tooltip.style.top     = `${pixelY - 56}px`;
            });
            target.addEventListener("mouseleave", () => {
                tooltip.style.display = "none";
            });
        });
    }
}

// String helper
String.prototype.titleCase = function() {
    return this.split(' ').map(w => w.charAt(0).toUpperCase() + w.substring(1).toLowerCase()).join(' ');
};

// ==================== TOAST NOTIFICATIONS ====================
function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const icons = { success: "fa-circle-check", error: "fa-circle-xmark", info: "fa-circle-info" };
    const colors = {
        success: "linear-gradient(135deg, #06b6d4, #3b82f6)",
        error: "linear-gradient(135deg, #ef4444, #dc2626)",
        info: "linear-gradient(135deg, #8b5cf6, #3b82f6)"
    };

    const toast = document.createElement("div");
    toast.style.cssText = `
        display: flex; align-items: center; gap: 12px;
        padding: 14px 20px; border-radius: 12px;
        background: rgba(15,23,42,0.95);
        backdrop-filter: blur(16px);
        border: 1px solid rgba(255,255,255,0.12);
        box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        color: #f1f5f9; font-size: 0.9rem; font-weight: 500;
        font-family: 'Outfit', sans-serif;
        min-width: 260px; max-width: 380px;
        pointer-events: auto;
        transform: translateX(120%);
        transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
    `;
    toast.innerHTML = `
        <span style="width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;background:${colors[type]};flex-shrink:0;">
            <i class="fa-solid ${icons[type] || icons.success}" style="color:#fff;font-size:0.85rem;"></i>
        </span>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    // Animate in
    requestAnimationFrame(() => {
        requestAnimationFrame(() => { toast.style.transform = "translateX(0)"; });
    });
    // Auto-dismiss after 3.5s
    setTimeout(() => {
        toast.style.transform = "translateX(120%)";
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

// ==================== PROFILE MANAGEMENT ====================
function initProfile() {
    const profileTabLink = document.querySelector('[data-tab="dash-profile"]');
    const saveProfileBtn = document.getElementById("save-profile-btn");
    
    if (profileTabLink) {
        profileTabLink.addEventListener("click", () => {
            loadProfileData();
        });
    }

    if (saveProfileBtn) {
        saveProfileBtn.addEventListener("click", () => {
            saveProfileData();
        });
    }
}

async function loadProfileData() {
    const username = localStorage.getItem("username");
    if (!username) return;

    try {
        const res = await fetch(`${API_BASE}/api/profile/?username=${username}`);
        if (res.ok) {
            const data = await res.json();
            
            // Populate form fields
            const firstNameInput = document.getElementById("profile-first-name");
            const lastNameInput  = document.getElementById("profile-last-name");
            const emailInput     = document.getElementById("profile-email");
            const bioInput       = document.getElementById("profile-bio");
            const avatarInput    = document.getElementById("avatar-upload-input");

            if (firstNameInput) firstNameInput.value = data.first_name || "";
            if (lastNameInput)  lastNameInput.value  = data.last_name || "";
            if (emailInput)     emailInput.value     = data.email || "";
            if (bioInput)       bioInput.value       = data.bio || "";
            if (avatarInput)    avatarInput.value    = data.avatar_url || "";

            // Populate preview and read-only text elements
            const avatarPreview = document.getElementById("profile-avatar-preview");
            const displayName   = document.getElementById("profile-display-name");
            const usernameDisplay = document.getElementById("profile-username-display");
            
            const fullName = `${data.first_name || ""} ${data.last_name || ""}`.trim() || data.username;
            if (avatarPreview) {
                avatarPreview.src = data.avatar_url || `https://api.dicebear.com/7.x/initials/svg?seed=${username}&backgroundColor=06b6d4,3b82f6`;
            }
            if (displayName) displayName.textContent = fullName;
            if (usernameDisplay) usernameDisplay.textContent = `@${data.username}`;

            const readonlyUsername = document.getElementById("prof-readonly-username");
            const readonlyJoined   = document.getElementById("prof-readonly-joined");
            if (readonlyUsername) readonlyUsername.textContent = data.username;
            if (readonlyJoined)   readonlyJoined.textContent   = data.date_joined || "—";

            // Stats summary badges
            const credCourses  = document.getElementById("prof-cred-courses");
            const credProjects = document.getElementById("prof-cred-projects");
            const credHours    = document.getElementById("prof-cred-hours");
            const credStreak   = document.getElementById("prof-cred-streak");

            if (credCourses)  credCourses.textContent  = data.course_count;
            if (credProjects) credProjects.textContent = data.project_count;
            if (credHours)    credHours.textContent    = `${data.study_hours.toFixed(1)}h`;
            if (credStreak)   credStreak.textContent   = data.streak;
        }
    } catch (e) {
        console.error("Failed to load profile data:", e);
    }
}

async function saveProfileData() {
    const username = localStorage.getItem("username");
    if (!username) return;

    const firstName  = document.getElementById("profile-first-name")?.value.trim() || "";
    const lastName   = document.getElementById("profile-last-name")?.value.trim() || "";
    const email      = document.getElementById("profile-email")?.value.trim() || "";
    const bio        = document.getElementById("profile-bio")?.value.trim() || "";
    const avatarUrl  = document.getElementById("avatar-upload-input")?.value.trim() || "";

    try {
        const res = await fetch(`${API_BASE}/api/profile/update/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken")
            },
            body: JSON.stringify({
                username,
                first_name: firstName,
                last_name: lastName,
                email,
                bio,
                avatar_url: avatarUrl
            })
        });

        if (res.ok) {
            showToast("Profile saved successfully! 💾", "success");
            // Reload user dashboard data to sync header names / avatar URL
            await fetchUserDashboardData(username);
            // Refresh local profile fields/previews
            loadProfileData();
        } else {
            const errData = await res.json();
            showToast(errData.error || "Failed to save profile changes.", "error");
        }
    } catch (e) {
        console.error("Error saving profile:", e);
        showToast("Network error. Unable to save profile.", "error");
    }
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

