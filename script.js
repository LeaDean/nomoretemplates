// Mobile menu
document.querySelector('.mobile-toggle').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active');
});

// Handwritten quotes
document.addEventListener('DOMContentLoaded', () => {
    const quotes = document.querySelectorAll('.handwritten');
    let current = 0;
    if (quotes.length > 0) {
        quotes[0].classList.add('active');
        setInterval(() => {
            quotes[current].classList.remove('active');
            current = (current + 1) % quotes.length;
            quotes[current].classList.add('active');
        }, 3800);
    }
});

// Smooth scroll for ALL # links (this fixes the buttons)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form fake success (replace with FormSubmit later)
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! We\'ll be in touch within 24 hours 🎉');
});
