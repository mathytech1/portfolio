document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact__form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        console.log('Form submitted');
        
        // Get form data
        const formData = new FormData(this);
        
        console.log('Form data:', Object.fromEntries(formData));
        
        // Send data to server
        fetch('https://formspree.io/f/mbljkgwl', {
          method: 'POST',
          body: formData,
        })
        .then(response => response.text())
        .then(data => {
          console.log('Response text:', data);
          alert('Thank you! Your message has been sent.');
          this.reset();
        })
        .catch(error => {
          console.error('Error:', error);
          alert('An error occurred while sending your message.');
        });
      });
    } else {
      console.error('Contact form not found');
    }
  });
