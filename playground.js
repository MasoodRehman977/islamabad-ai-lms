// ==================== PYTHON PLAYGROUND MODULE ====================
document.addEventListener("DOMContentLoaded", () => {
    const codeInput = document.getElementById("playground-code-input");
    const lineNumbers = document.getElementById("editor-line-numbers");
    const templateSelect = document.getElementById("playground-template-select");
    const runBtn = document.getElementById("run-playground-code-btn");
    const resetBtn = document.getElementById("reset-playground-btn");
    const clearConsoleBtn = document.getElementById("clear-playground-console-btn");
    const consoleOutput = document.getElementById("playground-console-output");
    const recProjBtn = document.getElementById("rec-proj-btn");

    // Templates dictionary
    const templates = {
        hello: `# Hello World in Python
print("Assalam-o-Alaikum, Islamabad.AI!")
print("Welcome to your interactive Python Sandbox.")
`,
        relu: `# DAILY CODING CHALLENGE: ReLU Activation Function
# Write a python function relu(x) that returns x if x > 0 else 0.

def relu(x):
    # Write your activation logic here
    if x > 0:
        return x
    return 0

# Test cases
print("relu(5.5) =", relu(5.5))
print("relu(-3.0) =", relu(-3.0))
print("relu(0) =", relu(0))
`,
        matmul: `# Matrix Multiplication from Scratch
def multiply_matrices(A, B):
    rows_A, cols_A = len(A), len(A[0])
    rows_B, cols_B = len(B), len(B[0])
    
    if cols_A != rows_B:
        raise ValueError("Incompatible dimensions for multiplication!")
        
    result = [[0 for _ in range(cols_B)] for _ in range(rows_A)]
    for i in range(rows_A):
        for j in range(cols_B):
            for k in range(cols_A):
                result[i][j] += A[i][k] * B[k][j]
    return result

# Define matrices
A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]
print("Matrix A:", A)
print("Matrix B:", B)
print("A x B =", multiply_matrices(A, B))
`,
        sigmoid: `# Sigmoid Activation Function
import math

def sigmoid(x):
    return 1.0 / (1.0 + math.exp(-x))

# Test cases
print("Testing Sigmoid Function:")
print("-" * 30)
for x in range(-5, 6, 2):
    print(f"sigmoid({x:2d}) -> {sigmoid(x):.4f}")
`,
        fibonacci: `# Fibonacci Sequence Generator
def fibonacci(n):
    sequence = [0, 1]
    while len(sequence) < n:
        sequence.append(sequence[-1] + sequence[-2])
    return sequence[:n]

print("First 10 Fibonacci Numbers:")
print(fibonacci(10))
`
    };

    // Helper: Toast alerts (reuses the window.showToast if exists, or simple fallback)
    function triggerToast(message, type = "success") {
        if (window.showToast) {
            window.showToast(message, type);
        } else {
            alert(`${type.toUpperCase()}: ${message}`);
        }
    }

    // Update Line Numbers Gutter
    function updateLineNumbers() {
        if (!codeInput || !lineNumbers) return;
        const code = codeInput.value;
        const lines = code.split("\n").length;
        let numbersHtml = "";
        for (let i = 1; i <= Math.max(lines, 1); i++) {
            numbersHtml += `${i}<br>`;
        }
        lineNumbers.innerHTML = numbersHtml;
    }

    // Set template
    function loadTemplate(key) {
        if (!codeInput) return;
        if (templates[key]) {
            codeInput.value = templates[key];
            updateLineNumbers();
        }
    }

    // Event: Sync scroll of editor and line numbers
    if (codeInput && lineNumbers) {
        codeInput.addEventListener("scroll", () => {
            lineNumbers.scrollTop = codeInput.scrollTop;
        });

        codeInput.addEventListener("input", updateLineNumbers);

        // Enable Tab key support in text area
        codeInput.addEventListener("keydown", (e) => {
            if (e.key === "Tab") {
                e.preventDefault();
                const start = codeInput.selectionStart;
                const end = codeInput.selectionEnd;
                codeInput.value = codeInput.value.substring(0, start) + "    " + codeInput.value.substring(end);
                codeInput.selectionStart = codeInput.selectionEnd = start + 4;
                updateLineNumbers();
            }
        });
    }

    // Event: Template selection changed
    if (templateSelect) {
        templateSelect.addEventListener("change", (e) => {
            loadTemplate(e.target.value);
        });
    }

    // Event: Reset editor
    if (resetBtn && templateSelect) {
        resetBtn.addEventListener("click", () => {
            loadTemplate(templateSelect.value);
            triggerToast("Editor reset to template default", "info");
        });
    }

    // Event: Clear console
    if (clearConsoleBtn && consoleOutput) {
        clearConsoleBtn.addEventListener("click", () => {
            consoleOutput.innerHTML = `<span style="color:#64748b;"># Console output cleared...</span>`;
        });
    }

    // Event: Run Code
    if (runBtn && codeInput && consoleOutput) {
        runBtn.addEventListener("click", async () => {
            const code = codeInput.value;
            if (!code.trim()) {
                triggerToast("Please write some code before executing!", "warning");
                return;
            }

            // Show running state
            runBtn.disabled = true;
            runBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Running...`;
            consoleOutput.innerHTML = `<span style="color:#38bdf8;">Running script...</span>\n`;

            try {
                const API_BASE = window.location.hostname.includes("github.io")
                    ? "https://islamabad-ai-lms.onrender.com"
                    : window.location.origin;
                const response = await fetch(`${API_BASE}/api/sandbox/run/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRFToken": getCsrfToken()
                    },
                    body: JSON.stringify({ code })
                });

                const data = await response.json();
                consoleOutput.innerHTML = "";

                if (response.ok) {
                    let logs = "";
                    if (data.stdout) {
                        logs += `<span style="color:#f8fafc;">${escapeHtml(data.stdout)}</span>`;
                    }
                    if (data.stderr) {
                        logs += `<span style="color:#ef4444;">${escapeHtml(data.stderr)}</span>`;
                    }
                    if (!data.stdout && !data.stderr) {
                        logs += `<span style="color:#64748b;">[Code executed successfully with no output]</span>`;
                    }
                    consoleOutput.innerHTML = logs;

                    // Check for Daily Challenge Completion
                    const isReluCode = code.includes("def relu");
                    const challengeCompleted = localStorage.getItem("challenge_completed") === "true";
                    
                    if (isReluCode && !challengeCompleted) {
                        // Let's run client-side test validation as well
                        const hasSuccess = data.stdout && data.stdout.includes("relu(5.5) = 5.5") && data.stdout.includes("relu(-3.0) = 0");
                        if (hasSuccess) {
                            localStorage.setItem("challenge_completed", "true");
                            
                            // Award XP (+150 XP)
                            let currentXp = parseInt(localStorage.getItem("student_xp") || "250");
                            currentXp += 150;
                            localStorage.setItem("student_xp", currentXp.toString());
                            
                            // Update XP display in UI
                            if (window.updateDashboardState) {
                                window.updateDashboardState();
                            }
                            const xpDisplay = document.getElementById("user-xp-display");
                            if (xpDisplay) {
                                xpDisplay.innerHTML = `<i class="fa-solid fa-bolt accent-cyan" style="margin-right:4px;"></i>Level 1 (${currentXp} / 500 XP)`;
                            }
                            
                            // Update challenge badge
                            const challengeStatus = document.getElementById("challenge-status");
                            if (challengeStatus) {
                                challengeStatus.innerText = "Completed";
                                challengeStatus.style.background = "rgba(16,185,129,0.15)";
                                challengeStatus.style.color = "#10b981";
                                challengeStatus.style.borderColor = "rgba(16,185,129,0.3)";
                            }
                            
                            consoleOutput.innerHTML += `\n\n<span style="color:#10b981; font-weight:700;">🏆 CHALLENGE PASSED! You successfully implemented ReLU Activation and earned +150 XP! Keep it up!</span>`;
                            triggerToast("Daily Challenge Completed! +150 XP", "success");
                        }
                    }
                } else {
                    consoleOutput.innerHTML = `<span style="color:#ef4444;">Server Error: ${escapeHtml(data.error || "Execution failed")}</span>`;
                }
            } catch (err) {
                consoleOutput.innerHTML = `<span style="color:#ef4444;">Network Error: Unable to reach sandbox server.</span>`;
            } finally {
                // Restore button state
                runBtn.disabled = false;
                runBtn.innerHTML = `<i class="fa-solid fa-play"></i> Run Code`;
                consoleOutput.scrollTop = consoleOutput.scrollHeight;
            }
        });
    }

    // Recommendation card link navigation
    if (recProjBtn) {
        recProjBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const playgroundLink = document.querySelector('[data-tab="dash-playground"]');
            if (playgroundLink) playgroundLink.click();
        });
    }

    // Helper: CSRF token resolver
    function getCsrfToken() {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith("csrftoken=")) {
                return cookie.substring("csrftoken=".length, cookie.length);
            }
        }
        return "";
    }

    // Helper: Escape HTML
    function escapeHtml(str) {
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Load initial Hello World template
    loadTemplate("hello");
});
