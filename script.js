import { initSidebar } from './sidebar.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize sidebar functionality
    initSidebar();

    // Contact Form Interaction
    const contactForm = document.querySelector('.contact-form');
    const contactInput = contactForm?.querySelector('input[type="text"]');
    const contactButton = contactForm?.querySelector('button');

    if (contactInput) {
        contactInput.addEventListener('focus', () => {
            contactInput.classList.add('pulse');
        });

        contactInput.addEventListener('blur', () => {
            contactInput.classList.remove('pulse');
        });
    }

    // Add subtle mouse-move parallax effect
    document.addEventListener('mousemove', (e) => {
        const sections = document.querySelectorAll('.section-card');
        sections.forEach(section => {
            const speed = 0.05;
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;
            
            section.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    });

    // Scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-card').forEach(card => {
        observer.observe(card);
    });
});
