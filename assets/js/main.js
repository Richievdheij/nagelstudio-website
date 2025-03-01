// main.js
import { toggleHamburgerMenu } from './hamburgerMenu.js';
import { stickyHeader } from './stickyHeader.js';
import { validateForms } from './formValidation.js';
import { lazyLoadImages } from './lazyLoading.js';
import { handleWhatsAppMessage } from './whatsappAPI.js';

document.addEventListener('DOMContentLoaded', function() {
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
});
