// Privacy Policy Page Script
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.querySelector('.copyright').innerHTML = `&copy; ${new Date().getFullYear()} SignsTogether. All rights reserved.`;

    // Set last updated date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('last-updated-date').textContent = new Date().toLocaleDateString('en-US', options);

    // Cookie Consent Functionality
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    const cookieSettingsLink = document.getElementById('cookie-settings');

    // Only show consent if not already given
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'flex';
        
        // Animate entrance
        setTimeout(() => {
            cookieConsent.style.transform = 'translateY(0)';
            cookieConsent.style.opacity = '1';
        }, 500);
    }

    // Handle cookie acceptance
    acceptCookiesBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.style.transform = 'translateY(100%)';
        cookieConsent.style.opacity = '0';
        setTimeout(() => {
            cookieConsent.style.display = 'none';
        }, 300);
    });

    // Cookie settings modal
    cookieSettingsLink.addEventListener('click', function(e) {
        e.preventDefault();
        showCookieSettings();
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
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add print button
    const printBtn = document.createElement('button');
    printBtn.className = 'btn';
    printBtn.style.margin = '30px auto';
    printBtn.style.display = 'block';
    printBtn.innerHTML = '<i class="fas fa-print"></i> Print Policy';
    printBtn.addEventListener('click', () => window.print());
    document.querySelector('.privacy-main').appendChild(printBtn);

    // Cookie settings modal function
    function showCookieSettings() {
        const modal = document.createElement('div');
        modal.className = 'cookie-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

        modal.innerHTML = `
            <div style="
                background: white;
                padding: 30px;
                border-radius: 10px;
                max-width: 500px;
                width: 90%;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                transform: translateY(20px);
                transition: transform 0.3s ease;
            ">
                <h3 style="margin-top: 0; color: var(--dark-color);">
                    <i class="fas fa-cookie-bite"></i> Cookie Preferences
                </h3>
                <div style="margin: 20px 0;">
                    <label style="display: block; margin-bottom: 15px; cursor: pointer;">
                        <input type="checkbox" checked disabled> 
                        <strong>Essential Cookies</strong>
                        <p style="margin: 5px 0 0 25px; color: var(--text-light); font-size: 14px;">
                            Required for basic site functionality
                        </p>
                    </label>
                    <label style="display: block; margin-bottom: 15px; cursor: pointer;">
                        <input type="checkbox" ${localStorage.getItem('analyticsCookies') ? 'checked' : ''}> 
                        <strong>Analytics Cookies</strong>
                        <p style="margin: 5px 0 0 25px; color: var(--text-light); font-size: 14px;">
                            Help us improve our website
                        </p>
                    </label>
                    <label style="display: block; margin-bottom: 15px; cursor: pointer;">
                        <input type="checkbox" ${localStorage.getItem('marketingCookies') ? 'checked' : ''}> 
                        <strong>Marketing Cookies</strong>
                        <p style="margin: 5px 0 0 25px; color: var(--text-light); font-size: 14px;">
                            Used for advertising purposes
                        </p>
                    </label>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button class="btn" id="save-cookie-prefs">
                        <i class="fas fa-save"></i> Save Preferences
                    </button>
                    <button class="btn" style="background: var(--text-light);" id="close-cookie-modal">
                        <i class="fas fa-times"></i> Close
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        
        // Animate in
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.querySelector('div').style.transform = 'translateY(0)';
        }, 10);

        // Close modal
        modal.querySelector('#close-cookie-modal').addEventListener('click', () => {
            modal.style.opacity = '0';
            modal.querySelector('div').style.transform = 'translateY(20px)';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        });

        // Save preferences
        modal.querySelector('#save-cookie-prefs').addEventListener('click', () => {
            const analyticsChecked = modal.querySelector('input[type="checkbox"]:nth-child(2)').checked;
            const marketingChecked = modal.querySelector('input[type="checkbox"]:nth-child(3)').checked;
            
            localStorage.setItem('analyticsCookies', analyticsChecked);
            localStorage.setItem('marketingCookies', marketingChecked);
            
            // Here you would typically enable/disable cookies based on preferences
            console.log('Cookie preferences saved:', {
                analytics: analyticsChecked,
                marketing: marketingChecked
            });
            
            modal.querySelector('#close-cookie-modal').click();
        });
    }
});
