// scripts/main.js
function searchProperties() {
    const searchInput = document.getElementById('searchInput').value;
    // Here you would typically make an API call to the backend
    console.log(`Searching for properties in: ${searchInput}`);
    // After getting results, update the #properties section
}

// Add more functions for filtering, user authentication, etc.

// Close mega menu when clicking outside
document.addEventListener('click', function(event) {
    const megaMenu = document.querySelector('.mega-menu');
    const servicesLink = document.querySelector('.services > a');

    if (!event.target.closest('.services') && megaMenu.style.display === 'block') {
        megaMenu.style.display = 'none';
    }

    if (event.target === servicesLink) {
        event.preventDefault();
        megaMenu.style.display = megaMenu.style.display === 'block' ? 'none' : 'block';
    }
});

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

// Smooth scroll to footer when clicking Contact
document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add this to your script.js
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showNextTestimonial() {
    testimonials[currentTestimonial].style.display = 'none';
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].style.display = 'block';
}

// Hide all testimonials except the first one
testimonials.forEach((testimonial, index) => {
    if (index !== 0) testimonial.style.display = 'none';
});

// Change testimonial every 5 seconds
setInterval(showNextTestimonial, 5000);
const leftSpace = document.getElementById('leftSpace');
const listItems = document.querySelectorAll('.list-item');

// Initialize with the first item
showInLeftSpace(listItems[0]);

function showInLeftSpace(element) {
    leftSpace.innerHTML = `
        <img src="${element.querySelector('img').src}" alt="${element.querySelector('img').alt}">
        <p>${element.querySelector('span').textContent}</p>
    `;
}