// Privacy Policy Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYear = new Date().getFullYear();
    document.querySelector('.privacy-footer p').innerHTML = 
        `&copy; ${currentYear} SignsTogether. All rights reserved.`;

    // Set last updated date
    const lastUpdatedDate = document.getElementById('last-updated-date');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    lastUpdatedDate.textContent = new Date().toLocaleDateString('en-US', options);

    // Cookie Consent Functionality
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
        
        // Here you would typically load tracking scripts
        console.log('Cookies accepted - loading tracking scripts');
    });

    // Cookie settings handler
    cookieSettingsLink.addEventListener('click', function(e) {
        e.preventDefault();
        showCookieSettingsModal();
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

    // Cookie Settings Modal (simplified)
    function showCookieSettingsModal() {
        const modalHtml = `
            <div class="cookie-modal" style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
            ">
                <div style="
                    background: white;
                    padding: 30px;
                    border-radius: 8px;
                    max-width: 500px;
                    width: 90%;
                ">
                    <h3 style="margin-top: 0;">Cookie Preferences</h3>
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 10px;">
                            <input type="checkbox" checked> Essential Cookies
                        </label>
                        <label style="display: block; margin-bottom: 10px;">
                            <input type="checkbox"> Analytics Cookies
                        </label>
                        <label style="display: block; margin-bottom: 10px;">
                            <input type="checkbox"> Marketing Cookies
                        </label>
                    </div>
                    <button class="btn" style="margin-right: 10px;">Save Preferences</button>
                    <button class="btn" style="background: #777;">Close</button>
                </div>
            </div>
        `;
        
        const modal = document.createElement('div');
        modal.innerHTML = modalHtml;
        document.body.appendChild(modal);
        
        // Close modal when clicking close button
        modal.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
        });
    }

    // Print button functionality (optional)
    const printButton = document.createElement('button');
    printButton.className = 'btn';
    printButton.textContent = 'Print Policy';
    printButton.style.margin = '20px auto';
    printButton.style.display = 'block';
    printButton.addEventListener('click', function() {
        window.print();
    });
    document.querySelector('.privacy-main').appendChild(printButton);
});
