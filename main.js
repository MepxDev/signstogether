// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
const featureGrid = document.querySelector('.features-grid');
const testimonialGrid = document.querySelector('.testimonial-grid');
const gameImages = document.querySelectorAll('.game-carousel img');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const newsletterForm = document.getElementById('newsletter-form');
const statNumbers = document.querySelectorAll('.stat-number');

// Mobile Menu Toggle
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

// Features Data
const features = [
    {
        icon: '<i class="fas fa-gamepad"></i>',
        title: 'Game-Based Learning',
        description: 'Learn through interactive games and challenges in the Roblox universe with friends.'
    },
    {
        icon: '<i class="fas fa-hands"></i>',
        title: 'Accurate ASL Signs',
        description: 'All signs are verified by Deaf educators and native ASL users.'
    },
    {
        icon: '<i class="fas fa-users"></i>',
        title: 'Inclusive Community',
        description: 'Join a welcoming space with learners, Deaf players, and ASL mentors.'
    },
    {
        icon: '<i class="fas fa-chart-line"></i>',
        title: 'Progress Tracking',
        description: 'Track your learning with achievements and personalized reports.'
    }
];

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

// Testimonials Data
const testimonials = [
    {
        content: "I've learned more ASL in two weeks with SignsTogether than I did in months with apps. The games make it so fun!",
        author: "Sarah M.",
        role: "Player, Age 14",
        img: "assets/user.jpg"
    },
    {
        content: "As a Deaf educator, I'm impressed by how accurately this game teaches ASL. The community events are wonderful.",
        author: "James T.",
        role: "ASL Teacher",
        img: "assets/user.jpg"
    },
    {
        content: "My students love using SignsTogether in class. It's the perfect way to make ASL learning engaging for kids.",
        author: "Ms. Rodriguez",
        role: "Elementary Teacher",
        img: "assets/user.jpg"
    }
];

// Populate Testimonials
testimonials.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card';
    testimonialCard.innerHTML = `
        <div class="testimonial-content">
            <p>${testimonial.content}</p>
        </div>
        <div class="testimonial-author">
            <img src="${testimonial.img}" alt="${testimonial.author}">
            <div class="author-info">
                <h5>${testimonial.author}</h5>
                <p>${testimonial.role}</p>
            </div>
        </div>
    `;
    testimonialGrid.appendChild(testimonialCard);
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

// Newsletter Form
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input').value;
    
    // Here you would typically send the email to your server
    console.log('Subscribed email:', email);
    
    // Show success message
    alert('Thanks for subscribing! We\'ll keep you updated on new features and events.');
    newsletterForm.reset();
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stats')) {
                animateStats();
            }
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe elements that should animate
document.querySelectorAll('.feature-card, .testimonial-card, .stats').forEach(el => {
    observer.observe(el);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showImage(0);
});
