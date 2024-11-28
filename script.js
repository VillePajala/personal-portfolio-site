// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to nav items on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Enhanced reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.fade-in, .slide-in-left').forEach(el => {
    observer.observe(el);
});

// Particle background effect
const createParticles = () => {
    const hero = document.querySelector('#hero');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        hero.appendChild(particle);
    }
};

createParticles();

// Smooth parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(el => {
        const speed = el.dataset.speed || 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add these classes to your HTML elements
document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations for all sections
    document.querySelectorAll('section').forEach(section => {
        if (section.id !== 'hero') {
            section.classList.add('fade-in');
            observer.observe(section);
        }
    });

    // Initialize project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });
    
    // Initialize skill categories
    document.querySelectorAll('.skill-category').forEach(skill => {
        skill.classList.add('slide-in-left');
        observer.observe(skill);
    });

    createBackgroundParticles();
    
    // Add hover effect for project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');

    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        }
    });

    // Disable hover effects on touch devices for better performance
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
});

// Add smooth scrolling offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 60;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Add this function after createParticles()
const createBackgroundParticles = () => {
    const background = document.querySelector('.background-animation');
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
        background.appendChild(particle);
    }
}; 