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
            typingElement.textContent =
                currentRole.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1000);
                return;
            }
        } else {
            typingElement.textContent =
                currentRole.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();

    // ===== HAMBURGER =====
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {

        hamburger.addEventListener("click", function (e) {
            e.stopPropagation();
            navMenu.classList.toggle("active");
        });

        document.addEventListener("click", function (e) {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove("active");
            }
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
            });
        });
    }

    // ===== SEARCH =====
    // ===== PORTFOLIO SEARCH =====

const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");

if (searchInput && suggestions) {

    const sections = [
        { name: "Home", target: "home" },
        { name: "About", target: "about" },
        { name: "Skills", target: "skills" },
        { name: "Projects", target: "projects" },
        { name: "Experience", target: "experience" },
        { name: "Contact", target: "contact" },
        { name: "HTML", target: "skills" },
        { name: "CSS", target: "skills" },
        { name: "JavaScript", target: "skills" },
        { name: "Python", target: "skills" },
        { name: "AI ML", target: "skills" },
        { name: "Portfolio Website", target: "projects" },
        { name: "Fire Smoke AI Detection", target: "projects" }
    ];

    searchInput.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();
        suggestions.innerHTML = "";

        if (value === "") {
            suggestions.style.display = "none";
            return;
        }

        const filtered = sections.filter(item =>
            item.name.toLowerCase().includes(value)
        );

        filtered.forEach(item => {

            const li = document.createElement("li");
            li.textContent = item.name;

            li.addEventListener("click", function () {

                const section = document.getElementById(item.target);

                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth"
                    });
                }

                suggestions.style.display = "none";
                searchInput.value = "";
            });

            suggestions.appendChild(li);
        });

        suggestions.style.display = filtered.length ? "block" : "none";

    });

}
