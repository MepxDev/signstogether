// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
const featureGrid = document.querySelector('.features-grid');
const languagesGrid = document.querySelector('.languages-grid');
const jobsList = document.querySelector('.jobs-list');
const positionSelect = document.getElementById('position');
const signLanguageSelect = document.getElementById('sign-language');
const jobApplicationForm = document.getElementById('job-application-form');
const applicationModal = document.getElementById('application-modal');
const closeModalBtns = document.querySelectorAll('.close-modal, .modal-close-btn');
const statNumbers = document.querySelectorAll('.stat-number');
const gameImages = document.querySelectorAll('.game-carousel img');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

// Sign Languages Data
const signLanguages = [
    { code: "ASL", name: "American Sign Language", description: "Used in the United States and parts of Canada" },
    { code: "BSL", name: "British Sign Language", description: "Used in the United Kingdom" },
    { code: "CSL", name: "Chinese Sign Language", description: "Used in China" },
    { code: "DGS", name: "Deutsche Gebärdensprache", description: "German Sign Language, used in Germany" },
    { code: "IS", name: "International Sign", description: "A pidgin-like sign language used internationally" },
    { code: "ISL", name: "Irish Sign Language", description: "Used in the Republic of Ireland and parts of Northern Ireland" },
    { code: "JSL", name: "Japanese Sign Language", description: "Used in Japan" },
    { code: "KSL", name: "Korean Sign Language", description: "Used in South Korea" },
    { code: "LIS", name: "Lingua dei Segni Italiana", description: "Italian Sign Language" },
    { code: "LSC", name: "Llengua de Signes Catalana", description: "Catalan Sign Language, used in Catalonia (Spain)" },
    { code: "LSE", name: "Lengua de Signos Española", description: "Spanish Sign Language" },
    { code: "LSF", name: "Langue des Signes Française", description: "French Sign Language" },
    { code: "LSM", name: "Lengua de Señas Mexicana", description: "Mexican Sign Language" },
    { code: "LSQ", name: "Langue des Signes Québécoise", description: "Quebec Sign Language, used in parts of Canada" },
    { code: "NGT", name: "Nederlandse Gebarentaal", description: "Dutch Sign Language" },
    { code: "PISL", name: "Pakistani Sign Language", description: "Used in Pakistan" },
    { code: "RSL", name: "Russian Sign Language", description: "Used in Russia" },
    { code: "SSL", name: "Swedish Sign Language", description: "Used in Sweden" }
];

// Job Openings Data
const jobOpenings = [
    {
        title: "ASL Content Developer",
        type: "Full-time",
        location: "Remote",
        description: "Create and review ASL learning content for our platform"
    },
    {
        title: "Game Developer (Roblox)",
        type: "Full-time",
        location: "Remote",
        description: "Implement new features and maintain our Roblox game"
    },
    {
        title: "Sign Language Instructor",
        type: "Part-time",
        location: "Remote",
        description: "Teach sign language through our virtual events"
    },
    {
        title: "Community Manager",
        type: "Full-time",
        location: "Remote",
        description: "Engage with our player community and organize events"
    }
];

// Features Data
const features = [
    {
        icon: '<i class="fas fa-gamepad"></i>',
        title: "Game-Based Learning",
        description: "Learn through interactive games and challenges in the Roblox universe with friends."
    },
    {
        icon: '<i class="fas fa-hands"></i>',
        title: "Accurate Signs",
        description: "All signs are verified by Deaf educators and native sign language users."
    },
    {
        icon: '<i class="fas fa-globe"></i>',
        title: "19 Languages",
        description: "Learn from the world's most used sign languages in one platform."
    },
    {
        icon: '<i class="fas fa-chart-line"></i>',
        title: "Progress Tracking",
        description: "Track your learning with achievements and personalized reports."
    }
];

// Initialize Mobile Menu
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Header shadow on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.boxShadow = window.scrollY > 10 ? 
        '0 4px 15px rgba(0, 0, 0, 0.1)' : 'none';
});

// Populate Languages
signLanguages.forEach(lang => {
    const langCard = document.createElement('div');
    langCard.className = 'language-card';
    langCard.innerHTML = `
        <h4>${lang.name} <span>${lang.code}</span></h4>
        <p>${lang.description}</p>
    `;
    languagesGrid.appendChild(langCard);
});

// Populate Job Openings
jobOpenings.forEach(job => {
    const jobItem = document.createElement('li');
    jobItem.innerHTML = `
        <h5>${job.title}</h5>
        <p><strong>${job.type}</strong> • ${job.location}</p>
        <p>${job.description}</p>
    `;
    jobsList.appendChild(jobItem);
    
    // Add to select dropdown
    const option = document.createElement('option');
    option.value = job.title;
    option.textContent = `${job.title} (${job.type})`;
    positionSelect.appendChild(option);
});

// Populate Sign Language Select
signLanguages.forEach(lang => {
    const option = document.createElement('option');
    option.value = lang.code;
    option.textContent = `${lang.name} (${lang.code})`;
    signLanguageSelect.appendChild(option);
});

// Populate Features
features.forEach(feature => {
    const featureCard = document.createElement('div');
    featureCard.className = 'feature-card';
    featureCard.innerHTML = `
        <div class="feature-icon">${feature.icon}</div>
        <h4>${feature.title}</h4>
        <p>${feature.description}</p>
    `;
    featureGrid.appendChild(featureCard);
});

// Job Application Form Submission
jobApplicationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Form data collection
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        position: document.getElementById('position').value,
        signLanguages: Array.from(document.getElementById('sign-language').selectedOptions)
            .map(option => option.value),
        coverLetter: document.getElementById('cover-letter').value
    };
    
    // In a real app, you would send this to your server
    console.log('Job Application Submitted:', formData);
    
    // Show success modal
    applicationModal.classList.add('active');
    
    // Reset form
    jobApplicationForm.reset();
});

// Close Modal
closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        applicationModal.classList.remove('active');
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === applicationModal) {
        applicationModal.classList.remove('active');
    }
});

// Game Carousel
let currentImageIndex = 0;

function showImage(index) {
    gameImages.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % gameImages.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + gameImages.length) % gameImages.length;
    showImage(currentImageIndex);
}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Auto-rotate carousel
let carouselInterval = setInterval(nextImage, 5000);

// Pause on hover
document.querySelector('.game-carousel').addEventListener('mouseenter', () => {
    clearInterval(carouselInterval);
});

document.querySelector('.game-carousel').addEventListener('mouseleave', () => {
    carouselInterval = setInterval(nextImage, 5000);
});

// Animate Stats
function animateStats() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCount = () => {
            current += step;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateCount);
            } else {
                stat.textContent = target;
            }
        };
        
        updateCount();
    });
}

// Initialize stats animation when scrolled into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.classList.contains('stats')) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.stats').forEach(el => {
    observer.observe(el);
});

// Initialize first image
document.addEventListener('DOMContentLoaded', () => {
    showImage(0);
});
