document.addEventListener("DOMContentLoaded", function() {
    const toggleIcon = document.querySelector('.toggle-icon');
    const navbar = document.querySelector('.navbar');

    toggleIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});
