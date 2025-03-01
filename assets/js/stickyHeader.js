// stickyHeader.js
export function stickyHeader() {
    const header = document.querySelector('.main-header');
    const topBar = document.querySelector('.top-bar');
    let lastScrollTop = 0;
    let headerHeight = header.offsetHeight;
    let topBarHeight = topBar ? topBar.offsetHeight : 0;
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add box shadow when scrolling down
        if (scrollTop > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll
        if (scrollTop > lastScrollTop && scrollTop > headerHeight + topBarHeight) {
            // Scrolling down - hide header
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up - show header
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
    
    // Recalculate heights on window resize
    window.addEventListener('resize', function() {
        headerHeight = header.offsetHeight;
        topBarHeight = topBar ? topBar.offsetHeight : 0;
    });
}