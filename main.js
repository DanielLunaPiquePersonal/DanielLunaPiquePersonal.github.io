document.addEventListener("DOMContentLoaded", () => {
    
    // 1. DYNAMIC PROJECT INJECTION & MODAL LOGIC
    const projectsContainer = document.getElementById("projects-grid");
    const modal = document.getElementById("project-modal");
    const closeBtn = document.querySelector(".close-btn");

    myProjects.forEach((project, index) => {
        const cardHTML = `
            <div class="card">
                <div class="card-media">
                    <video src="${project.video_hover}" loop muted playsinline></video>
                </div>
                <div class="card-content">
                    <h3>${project.title}</h3>
                    <span class="card-role">${project.role} | ${project.year}</span>
                    <p class="tech-stack">${project.technologies.join(" • ")}</p>
                    <p>${project.short_description}</p>
                    <button class="btn btn-small view-details-btn" data-index="${index}" style="margin-top: 15px; padding: 8px 15px; font-size: 0.8rem;">View Details</button>
                </div>
            </div>
        `;
        projectsContainer.innerHTML += cardHTML;
    });

    // Abrir Modal
    document.querySelectorAll(".view-details-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const projectIndex = e.target.getAttribute("data-index");
            const project = myProjects[projectIndex];
            
            document.getElementById("modal-title").innerText = project.title;
            document.getElementById("modal-role").innerText = project.role;
            document.getElementById("modal-body").innerHTML = project.detailed_description;
            
            modal.style.display = "block";
        });
    });

    // Cerrar Modal con la X
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar Modal haciendo clic fuera de la caja
    window.addEventListener("click", (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });

    // 2. VIDEO HOVER LOGIC
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        const video = card.querySelector("video");
        
        card.addEventListener("mouseenter", () => {
            if(video.src && video.readyState >= 3) { // Se asegura de que puede reproducirse
                video.play().catch(e => console.log("Autoplay prevented:", e));
            }
        });
        
        card.addEventListener("mouseleave", () => {
            if(video.src) {
                video.pause();
                video.currentTime = 0;
            }
        });
    });

    // 3. TYPEWRITER EFFECT
    const textElement = document.getElementById("typewriter");
    const phrases = ["Gameplay Programmer.", "Multiplayer Netcode.", "Unity Developer.", "AI Specialist."];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }

        setTimeout(typeWriter, typingSpeed);
    }
    typeWriter();

    // 4. SCROLL REVEAL
    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = reveals[i].getBoundingClientRect().top;
            let elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // 5. EMAIL COPY TO CLIPBOARD WITH TOAST NOTIFICATION
    const emailBtn = document.getElementById("email-btn");
    
    // Create the toast element dynamically
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerText = "Copied to clipboard!";
    document.body.appendChild(toast);

    emailBtn.addEventListener("click", () => {
        // Copies the email text to the clipboard
        navigator.clipboard.writeText("danilunapique02@gmail.com")
            .then(() => {
                // Show the toast notification
                toast.classList.add("show");
                
                // Hide it automatically after 2 seconds
                setTimeout(() => {
                    toast.classList.remove("show");
                }, 2000);
            })
            .catch(err => {
                console.error("Could not copy text: ", err);
            });
    });
});
