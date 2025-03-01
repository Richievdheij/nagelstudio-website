// main.js
import { toggleHamburgerMenu } from './hamburgerMenu.js';
import { stickyHeader } from './stickyHeader.js';
import { validateForms } from './formValidation.js';
import { lazyLoadImages } from './lazyLoading.js';
import { handleWhatsAppMessage } from './whatsappAPI.js';
import { initLanguageSelector } from './translation.js';

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Language Selector
    initLanguageSelector();
    
    // Initialize Hamburger menu
    toggleHamburgerMenu();

    // Initialize Sticky header
    stickyHeader();

    // Initialize form validation
    validateForms();

    // Initialize lazy loading for images
    lazyLoadImages();

    // Initialize WhatsApp message handling for appointment form
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        handleWhatsAppMessage(appointmentForm);
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length > 0 && 'IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    animationObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(element => {
            animationObserver.observe(element);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        animatedElements.forEach(element => {
            element.classList.add('animated');
        });
    }
});