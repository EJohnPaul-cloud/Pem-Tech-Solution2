document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    // Toggle menu visibility and icon state on click
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dynamic year in footer
    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }
});



 // 1. Get all "Read More" links
    const readMoreLinks = document.querySelectorAll('.read-more-link');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevents the browser from navigating away

            // Get the ID of the target modal from the data attribute (e.g., 'modal-ai-future')
            const modalId = this.getAttribute('data-modal-target');
            const targetModal = document.getElementById(modalId);

            if (targetModal) {
                targetModal.style.display = 'block'; // Show the modal
            }
        });
    });

    // 2. Get all close buttons (the 'x' symbol)
    const closeButtons = document.querySelectorAll('.close-button');

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the closest parent with the class 'modal' and hide it
            this.closest('.modal').style.display = 'none';
        });
    });

    // 3. Optional: Close the modal if the user clicks anywhere outside of the modal content
    window.onclick = function(event) {
        // Check if the clicked element has the class 'modal' (i.e., the dark backdrop)
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    }

