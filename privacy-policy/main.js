document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.querySelector('.privacy-footer p').innerHTML = 
        `&copy; ${new Date().getFullYear()} SignsTogether. All rights reserved.`;

    // Cookie Consent Logic
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    const cookieSettingsLink = document.getElementById('cookie-settings');

    // Check if user has already consented
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'flex';
    }

    // Handle cookie acceptance
    acceptCookiesBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.style.display = 'none';
        
        // In a real implementation, you would load tracking scripts here
        console.log('Cookies accepted');
    });

    // Cookie settings modal would go here
    cookieSettingsLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Cookie settings would appear here in a full implementation.');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Last updated date
    const lastUpdated = document.getElementById('last-updated-date');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    lastUpdated.textContent = new Date().toLocaleDateString('en-US', options);
});
