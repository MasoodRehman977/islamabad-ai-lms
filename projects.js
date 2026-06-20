// ==================== AI PROJECTS MODULE ====================
(function initAIProjects() {
    const API_BASE = window.location.origin;

    let currentProjectId = null;
    let projectsCache = [];

    const difficultyColors = {
        "Beginner":     "#10b981",
        "Intermediate": "#f59e0b",
        "Advanced":     "#ef4444"
    };

    function renderProjectsToGrid(gridElement, projects, isLanding = false) {
        if (!gridElement) return;
        gridElement.innerHTML = "";
        
        projects.forEach(proj => {
            const status    = proj.user_status ? proj.user_status.status : null;
            const diffColor = difficultyColors[proj.difficulty] || "#94a3b8";

            let statusPill, footerBtn;

            if (status === "submitted") {
                statusPill = `<span style="background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.4);color:#10b981;padding:4px 12px;border-radius:20px;font-size:0.78rem;font-weight:600;">
                    <i class="fa-solid fa-circle-check" style="margin-right:5px;"></i>Completed</span>`;
                footerBtn  = `<button class="proj-action-btn" data-proj-id="${proj.id}" data-action="resubmit"
                    style="width:100%;background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.35);color:#10b981;padding:11px;border-radius:10px;cursor:pointer;font-weight:600;font-size:0.9rem;font-family:inherit;">
                    <i class="fa-solid fa-rotate-right"></i> Update Submission</button>`;
            } else if (status === "registered") {
                statusPill = `<span style="background:rgba(245,158,11,0.15);border:1px solid rgba(245,158,11,0.4);color:#f59e0b;padding:4px 12px;border-radius:20px;font-size:0.78rem;font-weight:600;">
                    <i class="fa-solid fa-clock" style="margin-right:5px;"></i>In Progress</span>`;
                footerBtn  = `<button class="proj-action-btn" data-proj-id="${proj.id}" data-action="submit"
                    style="width:100%;background:linear-gradient(135deg,#10b981,#059669);border:none;color:#fff;padding:11px;border-radius:10px;cursor:pointer;font-weight:600;font-size:0.9rem;font-family:inherit;">
                    <i class="fa-solid fa-paper-plane"></i> Submit Project</button>`;
            } else {
                statusPill = `<span style="background:rgba(100,116,139,0.15);border:1px solid rgba(100,116,139,0.3);color:#94a3b8;padding:4px 12px;border-radius:20px;font-size:0.78rem;font-weight:600;">
                    <i class="fa-solid fa-lock" style="margin-right:5px;"></i>Not Registered</span>`;
                footerBtn  = `<button class="proj-action-btn" data-proj-id="${proj.id}" data-action="register"
                    style="width:100%;background:linear-gradient(135deg,#06b6d4,#3b82f6);border:none;color:#fff;padding:11px;border-radius:10px;cursor:pointer;font-weight:600;font-size:0.9rem;font-family:inherit;">
                    <i class="fa-solid fa-plus"></i> Register for Project</button>`;
            }

            const techTags = proj.tech.map(t =>
                `<span style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:#94a3b8;padding:3px 10px;border-radius:8px;font-size:0.78rem;">${t}</span>`
            ).join("");

            const card = document.createElement("div");
            card.className   = "glass-card";
            card.style.cssText = "padding:24px;border-radius:18px;display:flex;flex-direction:column;gap:16px;transition:transform 0.2s,box-shadow 0.2s;border:1px solid rgba(255,255,255,0.07);";
            card.innerHTML = `
                <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;">
                    <div style="width:52px;height:52px;border-radius:14px;background:${proj.color}22;border:1px solid ${proj.color}44;display:flex;align-items:center;justify-content:center;font-size:1.4rem;color:${proj.color};flex-shrink:0;">
                        <i class="fa-solid ${proj.icon}"></i>
                    </div>
                    ${statusPill}
                </div>
                <div>
                    <h3 style="font-size:1.1rem;font-weight:700;color:#fff;margin:0 0 6px;">${proj.title}</h3>
                    <p style="color:#94a3b8;font-size:0.88rem;line-height:1.6;margin:0;">${proj.description}</p>
                </div>
                <div style="display:flex;flex-wrap:wrap;gap:6px;">${techTags}</div>
                <div style="display:flex;justify-content:space-between;font-size:0.82rem;color:#64748b;padding-top:8px;border-top:1px solid rgba(255,255,255,0.05);">
                    <span>
                        <i class="fa-solid fa-signal" style="margin-right:5px;color:${diffColor};"></i>
                        <span style="color:${diffColor};font-weight:600;">${proj.difficulty}</span>
                    </span>
                    <span><i class="fa-solid fa-calendar-days" style="margin-right:5px;"></i>${proj.duration}</span>
                </div>
                <div>${footerBtn}</div>
            `;
            
            card.addEventListener("mouseenter", function() {
                this.style.transform  = "translateY(-3px)";
                this.style.boxShadow  = "0 12px 40px rgba(0,0,0,0.3)";
            });
            card.addEventListener("mouseleave", function() {
                this.style.transform  = "";
                this.style.boxShadow  = "";
            });
            gridElement.appendChild(card);
        });

        // Wire action buttons
        gridElement.querySelectorAll(".proj-action-btn").forEach(btn => {
            btn.addEventListener("click", function() {
                const username = localStorage.getItem("username");
                if (!username) {
                    showToast("Please log in to register/submit projects!", "error");
                    switchView("login-page");
                    return;
                }
                
                const pid    = this.getAttribute("data-proj-id");
                const action = this.getAttribute("data-action");
                currentProjectId = pid;
                const proj = projectsCache.find(p => p.id === pid);
                if (!proj) return;
                
                if (isLanding) {
                    // Redirect landing actions to the dashboard sandbox view
                    switchView("student-dashboard");
                    const sandboxTab = document.querySelector('[data-tab="dash-sandbox"]');
                    if (sandboxTab) sandboxTab.click();
                    
                    // Show modal after tab switches and renders
                    setTimeout(() => {
                        if (action === "register") {
                            openRegisterModal(proj);
                        } else {
                            openSubmitModal(proj);
                        }
                    }, 100);
                } else {
                    if (action === "register") {
                        openRegisterModal(proj);
                    } else {
                        openSubmitModal(proj);
                    }
                }
            });
        });
    }

    // ============ Render project cards ============
    function renderProjects(projects) {
        projectsCache = projects;
        
        const dashGrid = document.getElementById("projects-grid");
        if (dashGrid) renderProjectsToGrid(dashGrid, projects, false);
        
        const landingGrid = document.getElementById("landing-projects-grid");
        if (landingGrid) renderProjectsToGrid(landingGrid, projects, true);
        
        // Update summary badge
        const badge   = document.getElementById("projects-summary-badge");
        const inProg  = projects.filter(p => p.user_status && p.user_status.status === "registered").length;
        const done    = projects.filter(p => p.user_status && p.user_status.status === "submitted").length;
        if (badge) {
            if (inProg + done > 0) {
                badge.style.display = "inline-block";
                badge.textContent   = `${done} Completed · ${inProg} In Progress`;
            } else {
                badge.style.display = "none";
            }
        }
    }

    // ============ Load projects from API ============
    async function loadProjects() {
        const dashGrid = document.getElementById("projects-grid");
        const landingGrid = document.getElementById("landing-projects-grid");
        const username = localStorage.getItem("username") || "";
        
        const loadingHtml = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#64748b;">
            <i class="fa-solid fa-spinner fa-spin" style="font-size:2rem;margin-bottom:12px;display:block;"></i>Loading projects...</div>`;
            
        if (dashGrid) dashGrid.innerHTML = loadingHtml;
        if (landingGrid) landingGrid.innerHTML = loadingHtml;
        
        try {
            const res = await fetch(`${API_BASE}/api/projects/?username=${encodeURIComponent(username)}`);
            if (res.ok) {
                const projects = await res.json();
                renderProjects(projects);
            } else {
                const errorHtml = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:#ef4444;">
                    <i class="fa-solid fa-triangle-exclamation" style="font-size:2rem;margin-bottom:12px;display:block;"></i>Could not load projects.</div>`;
                if (dashGrid) dashGrid.innerHTML = errorHtml;
                if (landingGrid) landingGrid.innerHTML = errorHtml;
            }
        } catch (e) {
            const offlineHtml = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:#64748b;">
                <i class="fa-solid fa-wifi-slash" style="font-size:2rem;margin-bottom:12px;display:block;"></i>Offline – could not fetch projects.</div>`;
            if (dashGrid) dashGrid.innerHTML = offlineHtml;
            if (landingGrid) landingGrid.innerHTML = offlineHtml;
        }
    }

    // ============ Register modal ============
    function openRegisterModal(proj) {
        const modal = document.getElementById("project-register-modal");
        if (!modal) return;
        document.getElementById("proj-modal-title").textContent = proj.title;
        document.getElementById("proj-modal-desc").textContent  = proj.description;
        const iconEl = document.getElementById("proj-modal-icon");
        iconEl.style.cssText = `width:56px;height:56px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;margin-bottom:16px;background:${proj.color}22;border:1px solid ${proj.color}44;color:${proj.color};`;
        iconEl.innerHTML = `<i class="fa-solid ${proj.icon}"></i>`;
        document.getElementById("proj-modal-tags").innerHTML = proj.tech.map(t =>
            `<span style="background:rgba(6,182,212,0.1);border:1px solid rgba(6,182,212,0.25);color:#06b6d4;padding:4px 12px;border-radius:8px;font-size:0.82rem;">${t}</span>`
        ).join("");
        modal.style.display = "flex";
    }

    function closeRegisterModal() {
        const modal = document.getElementById("project-register-modal");
        if (modal) modal.style.display = "none";
        currentProjectId = null;
    }

    // ============ Submit modal ============
    function openSubmitModal(proj) {
        const modal = document.getElementById("project-submit-modal");
        if (!modal) return;
        document.getElementById("submit-modal-title").textContent = `Submit: ${proj.title}`;
        const notesEl = document.getElementById("submit-notes-input");
        if (notesEl) notesEl.value = (proj.user_status && proj.user_status.submission_notes) ? proj.user_status.submission_notes : "";
        modal.style.display = "flex";
    }

    function closeSubmitModal() {
        const modal = document.getElementById("project-submit-modal");
        if (modal) modal.style.display = "none";
        currentProjectId = null;
    }

    // ============ Wire modal close buttons ============
    document.getElementById("close-proj-modal")?.addEventListener("click",    closeRegisterModal);
    document.getElementById("cancel-proj-modal")?.addEventListener("click",   closeRegisterModal);
    document.getElementById("close-submit-modal")?.addEventListener("click",  closeSubmitModal);
    document.getElementById("cancel-submit-modal")?.addEventListener("click", closeSubmitModal);

    document.getElementById("project-register-modal")?.addEventListener("click", e => {
        if (e.target === e.currentTarget) closeRegisterModal();
    });
    document.getElementById("project-submit-modal")?.addEventListener("click", e => {
        if (e.target === e.currentTarget) closeSubmitModal();
    });

    // ============ Confirm register ============
    document.getElementById("confirm-register-proj-btn")?.addEventListener("click", async function() {
        const username = localStorage.getItem("username");
        if (!username) { showToast("Please log in first!", "error"); return; }
        if (!currentProjectId) return;
        const btn = this;
        btn.disabled = true;
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Registering...`;
        try {
            const res  = await fetch(`${API_BASE}/api/projects/register/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, project_id: currentProjectId })
            });
            const data = await res.json();
            if (res.ok) {
                showToast("Registered! Project is now In Progress. ⚡", "success");
                closeRegisterModal();
                await loadProjects();
            } else {
                showToast(data.error || "Registration failed.", "error");
            }
        } catch (e) {
            showToast("Network error. Please try again.", "error");
        } finally {
            btn.disabled = false;
            btn.innerHTML = `<i class="fa-solid fa-plus"></i> Register for Project`;
        }
    });

    // ============ Confirm submit ============
    document.getElementById("confirm-submit-proj-btn")?.addEventListener("click", async function() {
        const username = localStorage.getItem("username");
        if (!username) { showToast("Please log in first!", "error"); return; }
        if (!currentProjectId) return;
        const notes = document.getElementById("submit-notes-input")?.value?.trim() || "";
        if (!notes) {
            showToast("Please provide your project link or description to submit!", "error");
            return;
        }
        const linkPattern = /https?:\/\/[^\s]+|github\.com\/[^\s]+/;
        if (!linkPattern.test(notes)) {
            showToast("Please provide a valid project link (GitHub or deployed URL) in your submission!", "error");
            return;
        }

        const btn   = this;
        btn.disabled = true;
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Submitting...`;
        try {
            const res  = await fetch(`${API_BASE}/api/projects/submit/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, project_id: currentProjectId, submission_notes: notes })
            });
            const data = await res.json();
            if (res.ok) {
                showToast("Project submitted! Marked as Completed. 🏆", "success");
                closeSubmitModal();
                await loadProjects();
            } else {
                showToast(data.error || "Submission failed.", "error");
            }
        } catch (e) {
            showToast("Network error. Please try again.", "error");
        } finally {
            btn.disabled = false;
            btn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Submit Project`;
        }
    });

    // ============ Hook into sidebar tab click ============
    document.querySelectorAll('[data-tab="dash-sandbox"]').forEach(link => {
        link.addEventListener("click", loadProjects);
    });

    // Expose loadProjects globally
    window.loadProjects = loadProjects;

    // Load projects initially on script execution
    loadProjects();
})();
