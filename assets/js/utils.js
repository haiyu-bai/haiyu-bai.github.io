// Utilities Module
const Utils = {
    // Print functionality
    printPage() {
        window.print();
    },

    // Back to top functionality
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    },

    // Email link tracking
    setupEmailTracking() {
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        
        emailLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                console.log('Email link clicked:', this.href);
                // Add analytics tracking here if needed
            });
        });
    },

    // Add back-to-top button for long pages
    addBackToTopButton() {
        const sections = document.querySelectorAll('.section');
        
        if (sections.length > 3) {
            const footer = document.querySelector('.footer .container');
            if (footer) {
                const backToTop = document.createElement('div');
                backToTop.innerHTML = '<a href="#" onclick="Utils.scrollToTop(); return false;" style="color: #6c757d; font-size: 0.9rem;">↑ Back to top</a>';
                backToTop.style.marginTop = '1rem';
                backToTop.style.paddingTop = '1rem';
                backToTop.style.borderTop = '1px solid #dee2e6';
                backToTop.style.textAlign = 'center';
                
                footer.appendChild(backToTop);
            }
        }
    }
};

export default Utils;