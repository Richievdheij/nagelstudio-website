// formValidation.js
export function validateForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        // Add validation on form submission
        form.addEventListener('submit', function(event) {
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!validateField(field)) {
                    isValid = false;
                }
            });
            
            if (!isValid) {
                event.preventDefault();
            }
        });
        
        // Add validation on field blur
        const formFields = form.querySelectorAll('input, textarea, select');
        formFields.forEach(field => {
            field.addEventListener('blur', function() {
                if (field.hasAttribute('required')) {
                    validateField(field);
                }
            });
            
            // Remove error styling when user starts typing
            field.addEventListener('input', function() {
                field.classList.remove('error');
                const errorMsg = field.parentElement.querySelector('.error-message');
                if (errorMsg) {
                    errorMsg.remove();
                }
            });
        });
    });
    
    // Validate a single field
    function validateField(field) {
        let isValid = true;
        let errorMessage = '';
        
        // Check if empty
        if (!field.value.trim()) {
            isValid = false;
            errorMessage = 'Dit veld is verplicht';
        } 
        // Email validation
        else if (field.type === 'email' && !isValidEmail(field.value)) {
            isValid = false;
            errorMessage = 'Voer een geldig e-mailadres in';
        }
        // Phone validation
        else if (field.type === 'tel' && !isValidPhone(field.value)) {
            isValid = false;
            errorMessage = 'Voer een geldig telefoonnummer in';
        }
        
        // Update UI based on validation
        if (!isValid) {
            field.classList.add('error');
            
            // Create error message if it doesn't exist
            let errorMsg = field.parentElement.querySelector('.error-message');
            if (!errorMsg) {
                errorMsg = document.createElement('div');
                errorMsg.className = 'error-message';
                errorMsg.textContent = errorMessage;
                field.parentElement.appendChild(errorMsg);
            } else {
                errorMsg.textContent = errorMessage;
            }
        } else {
            field.classList.remove('error');
            const errorMsg = field.parentElement.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.remove();
            }
        }
        
        return isValid;
    }
    
    // Email validation helper
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Phone validation helper
    function isValidPhone(phone) {
        // Basic phone validation - can be customized for specific formats
        const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        return re.test(String(phone));
    }
}