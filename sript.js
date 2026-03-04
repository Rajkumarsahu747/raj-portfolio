// ===== WAIT UNTIL PAGE LOADS =====
document.addEventListener("DOMContentLoaded", function () {

    // ===== HAMBURGER MENU =====
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

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

    // ===== SEARCH FUNCTION =====
    const searchInput = document.querySelector(".search-container input");

    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {

            let value = this.value.toLowerCase().trim();

            const sections = {
                home: "#home",
                about: "#about",
                skills: "#skills",
                experience: "#experience",
                projects: "#projects",
                contact: "#contact"
            };

            if (sections[value]) {
                document.querySelector(sections[value]).scrollIntoView({
                    behavior: "smooth"
                });
            } else {
                alert("Section not found!");
            }

            this.value = "";
        }
    });

});


// ===== TYPING ANIMATION =====
const roles = [
    "BCA Student",
    "Frontend Developer",
    "Java Programmer",
    "AI & ML Learner"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];
    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

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
