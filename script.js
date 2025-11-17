// Mobile menu toggle
document.querySelector('.mobile-toggle').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active');
});

// Handwritten quotes fade – works instantly, no errors
document.addEventListener('DOMContentLoaded', () => {
    const quotes = document.querySelectorAll('.handwritten');
    let currentQuote = 0;

    function showNextQuote() {
        quotes[currentQuote].classList.remove('active');
        currentQuote = (currentQuote + 1) % quotes.length;
        quotes[currentQuote].classList.add('active');
    }

    // Start immediately
    if (quotes.length > 0) {
        quotes[0].classList.add('active');
        setInterval(showNextQuote, 3800);
    }
});

// Form success message
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! We\'ll email you within 24 hours to start your free build');
});