// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize loader
    setTimeout(function() {
        document.querySelector('.loader').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('.loader').style.display = 'none';
        }, 500);
    }, 1000);

    // Initialize scroll animations
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Add or remove scrolled class to navbar
        if (scrollPosition > 100) {
            document.querySelector('nav').classList.add('scrolled');
        } else {
            document.querySelector('nav').classList.remove('scrolled');
        }
        
        // Show or hide scroll-to-top button
        if (scrollPosition > 500) {
            document.querySelector('.scroll-top').classList.add('active');
        } else {
            document.querySelector('.scroll-top').classList.remove('active');
        }
        
        // Highlight active nav item
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Initialize mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            document.querySelector('.nav-links').classList.toggle('active');
        });
    }
    
    // Initialize scroll to top button
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Initialize skill progress bars
    const progressBars = document.querySelectorAll('.progress-line span');
    if (progressBars.length > 0) {
        const animateProgress = function() {
            progressBars.forEach(bar => {
                const percent = bar.getAttribute('data-percent');
                bar.style.width = percent + '%';
            });
        };
        
        // Use Intersection Observer to trigger animation when in viewport
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgress();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        const skillsSection = document.querySelector('#skills');
        if (skillsSection) {
            observer.observe(skillsSection);
        }
    }
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         // Get the form values
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const subject = document.getElementById('subject').value || 'No Subject'; // Default value if empty
//         const message = document.getElementById('message').value;

//         // Create the mailto link
//         const mailtoLink = `mailto:your-venojanshanmugarajah@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;

//         // Open the user's email client with pre-filled data
//         window.location.href = mailtoLink;

//         // Optionally, you can display a success message to the user
//         alert('Thank you for your message! I will get back to you soon.');
        
//         // Reset the form
//         contactForm.reset();
//     });
// }

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get the form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value || 'No Subject'; // Default value if empty
        const message = document.getElementById('message').value;

        // Replace with your actual email address
        const recipientEmail = "venojanshanmugarajah@gmail.com"; 

        // Create the mailto link
        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;

        // Open the user's email client with pre-filled data
        window.location.href = mailtoLink;

        // Optionally, display a success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset the form
        contactForm.reset();
    });
}

// Typing animation for header
const typingElement = document.querySelector('.subtitle');
if (typingElement) {
    const text = typingElement.textContent;
    typingElement.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Start typing animation after 1 seconds
    setTimeout(typeWriter, 1000);
}



});