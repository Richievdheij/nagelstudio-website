// whatsappAPI.js
export function handleWhatsAppMessage(form) {
    if (!form) return;
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate form before proceeding
        if (!validateForm(form)) {
            return;
        }
        
        let formData = new FormData(form);
        let name = formData.get('name') || '';
        let email = formData.get('email') || '';
        let phone = formData.get('phone') || '';
        let date = formData.get('date') || '';
        let time = formData.get('time') || '';
        let service = formData.get('service') || '';
        let message = formData.get('message') || '';

        // Structured WhatsApp message with bold title and formatted content
        const whatsappMessage = `
*Afspraak Aanvraag*  
Behandeling: ${service}  
Datum: ${date}  
Tijd: ${time}  
Naam: ${name}  
Telefoon: ${phone}  
E-mail: ${email}  
Bericht: ${message}
        `;

        // Redirect to WhatsApp with the structured message
        window.location.href = `https://wa.me/+31628391881?text=${encodeURIComponent(whatsappMessage)}`;
    });
    
    // Basic form validation
    function validateForm(form) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
                
                // Create error message if it doesn't exist
                let errorMsg = field.parentElement.querySelector('.error-message');
                if (!errorMsg) {
                    errorMsg = document.createElement('div');
                    errorMsg.className = 'error-message';
                    errorMsg.textContent = 'Dit veld is verplicht';
                    field.parentElement.appendChild(errorMsg);
                }
            } else {
                field.classList.remove('error');
                const errorMsg = field.parentElement.querySelector('.error-message');
                if (errorMsg) {
                    errorMsg.remove();
                }
            }
        });
        
        return isValid;
    }
}