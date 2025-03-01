// lazyLoading.js
export function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imgOptions = {
        threshold: 0,
        rootMargin: "0px 0px 50px 0px"
    };
    
    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
            imgObserver.unobserve(img);
        });
    }, imgOptions);
    
    images.forEach(image => {
        imgObserver.observe(image);
    });
}
