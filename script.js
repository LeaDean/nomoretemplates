// Mobile menu toggle
document.querySelector('.mobile-toggle').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active');
});

// Handwritten quotes animation
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

// NO FORM LISTENER ANYMORE – FormSubmit handles everything perfectly now
