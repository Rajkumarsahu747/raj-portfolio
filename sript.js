console.log("JS FILE CONNECTED");

document.addEventListener("DOMContentLoaded", function () {

    // ===== TYPING EFFECT =====
    const roles = [
        "BCA Student",
        "Frontend Developer",
        "Java Programmer",
        "AI & ML Learner"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typingElement = document.getElementById("typing");

    function typeEffect() {
        if (!typingElement) return;

        const currentRole = roles[roleIndex];

        if (!isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1000);
                return;
            }
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();

    // ===== HAMBURGER MENU =====
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {

        // Toggle menu
        hamburger.addEventListener("click", function (e) {
            e.stopPropagation();
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Close on outside click
        document.addEventListener("click", function (e) {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            }
        });

        // Scroll + close menu
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();

                const target = document.querySelector(this.getAttribute("href"));

                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }

                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }

    // ===== SEARCH FUNCTION (FINAL FIX) =====
    const searchInput = document.getElementById("searchInput");

    if (searchInput) {
        searchInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                let value = this.value.toLowerCase().trim();

                let found = false;

                document.querySelectorAll("section").forEach(section => {

                    if (section.innerText.toLowerCase().includes(value)) {

                        section.scrollIntoView({
                            behavior: "smooth"
                        });

                        section.style.outline = "2px solid #8000ff";

                        setTimeout(() => {
                            section.style.outline = "none";
                        }, 2000);

                        found = true;
                    }
                });

                if (!found) {
                    alert("No result found!");
                }

                this.value = "";
            }
        });
    }

    // ===== CONTACT FORM =====
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("✅ Message sent successfully!");
            form.reset();
        });
    }

});
