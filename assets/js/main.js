// Academic Website - Minimal JavaScript

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation clicks
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Simple mobile navigation (if needed in future)
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
});

// Print functionality
function printPage() {
    window.print();
}

// Simple email obfuscation (optional)
document.addEventListener('DOMContentLoaded', function() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Simple click tracking or analytics could go here
            console.log('Email link clicked');
        });
    });
});

// Back to top functionality (minimal)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add back-to-top button if page is long
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    
    if (sections.length > 3) {
        // Add a simple back-to-top link at the bottom
        const footer = document.querySelector('.footer .container');
        if (footer) {
            const backToTop = document.createElement('div');
            backToTop.innerHTML = '<a href="#" onclick="scrollToTop(); return false;" style="color: #6c757d; font-size: 0.9rem;">↑ Back to top</a>';
            backToTop.style.marginTop = '1rem';
            backToTop.style.paddingTop = '1rem';
            backToTop.style.borderTop = '1px solid #dee2e6';
            backToTop.style.textAlign = 'center';
            
            footer.appendChild(backToTop);
        }
    }
});