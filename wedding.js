// Wedding Website JavaScript

// DOM Elements
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');
const menuLinks = document.querySelectorAll('.menu-link');
const sections = document.querySelectorAll('section');

// Sticky Header Effect
function handleStickyHeader() {
    if (window.scrollY > 60) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : 'auto';
}

// Close Mobile Menu
function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = 'auto';
}

// Scroll Reveal Animation
function handleScrollReveal() {
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = 150;
        
        if (sectionTop < windowHeight - sectionVisible) {
            section.classList.add('visible');
        }
    });
}

// Smooth Scrolling for Anchor Links
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        closeMobileMenu();
    }
}

// Event Listeners
window.addEventListener('scroll', handleStickyHeader);
window.addEventListener('scroll', handleScrollReveal);
window.addEventListener('load', handleScrollReveal);
hamburger.addEventListener('click', toggleMobileMenu);
closeBtn.addEventListener('click', closeMobileMenu);
menuLinks.forEach(link => link.addEventListener('click', smoothScroll));

// Initialize
function init() {
    handleStickyHeader();
    handleScrollReveal();
}

// DOM Content Loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}