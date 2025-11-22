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

// Form handling - Updated for better mobile UX (prevent default redirect, show message)
document.getElementById('visionForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop redirect for instant feedback
    const form = this;
    const formData = new FormData(form);
    
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you! We\'ll email you within 24 hours to start your free build.');
            form.reset(); // Clear form
        } else {
            alert('Something went wrong—try again or email us directly.');
        }
    })
    .catch(error => {
        alert('Network issue—please resubmit or email leadeanguitar@gmail.com');
        console.error('Form error:', error);
    });
});

// Smooth scroll for all # links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
