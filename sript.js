document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    // Open / Close menu
    hamburger.addEventListener("click", function (e) {
        e.stopPropagation();
        navMenu.classList.toggle("active");
    });

    // Close when clicking outside
    document.addEventListener("click", function (e) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove("active");
        }
    });

});
