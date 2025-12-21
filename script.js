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

// Form handling
document.getElementById('visionForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = this;
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert("Thank you! We'll email you within 24 hours.");
      form.reset();
      window.location.href = form.elements['_next'].value;  // To thanks.html
    } else {
      alert('Something went wrong—try again or email directly.');
    }
  })
  .catch(error => {
    alert('Network issue—try again.');
    console.error('Error:', error);
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
