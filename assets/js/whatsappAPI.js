// whatsappAPI.js
export function handleWhatsAppMessage(form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let formData = new FormData(form);
        let name = formData.get('name');
        let email = formData.get('email');
        let phone = formData.get('phone');
        let date = formData.get('date');
        let time = formData.get('time');
        let service = formData.get('service');
        let message = formData.get('message');

        // Structured WhatsApp message with bold title and formatted content
        const whatsappMessage = `
        *Appointment Request*  
        Treatment: ${service}  
        Date: ${date}  
        Time: ${time}  
        Name: ${name}  
        Phone: ${phone}  
        Message: ${message}
        `;

        // Redirect to WhatsApp with the structured message
        window.location.href = `https://wa.me/+31628391881?text=${encodeURIComponent(whatsappMessage)}`;
    });
}
