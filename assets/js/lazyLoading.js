// lazyLoading.js
export function lazyLoadImages() {
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        
        const imgOptions = {
            threshold: 0,
            rootMargin: "0px 0px 50px 0px"
        };
        
        const imgObserver = new IntersectionObserver((entries, imgObserver) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                
                const img = entry.target;
                const src = img.getAttribute('data-src');
                
                if (!src) return;
                
                // Create a new image to preload
                const newImg = new Image();
                newImg.src = src;
                
                // When the image is loaded, update the visible image
                newImg.onload = () => {
                    img.src = src;
                    img.classList.add('loaded');
                    img.removeAttribute('data-src');
                };
                
                imgObserver.unobserve(img);
            });
        }, imgOptions);
        
        images.forEach(image => {
            imgObserver.observe(image);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        const images = document.querySelectorAll('img[data-src]');
        
        images.forEach(img => {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        });
    }
}