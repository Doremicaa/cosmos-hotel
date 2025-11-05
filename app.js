// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            // Close mobile menu
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Contact Form
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = this.querySelector('input[placeholder="Nume"]').value.trim();
            if (name) {
                alert(`Mulțumim, ${name}! Mesajul tău a fost trimis.`);
                form.reset();
            }
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        }
    });
});