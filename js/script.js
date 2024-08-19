
        // Slider functionality
        let slideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        
        // Function to show a specific slide
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
        }
        
        // Function to move slides
        function moveSlide(step) {
            slideIndex = (slideIndex + step + totalSlides) % totalSlides;
            showSlide(slideIndex);
        }
        
        // Initialize slider
        showSlide(slideIndex);
        
        // Auto-slide functionality
        function autoSlide() {
            moveSlide(1); // Move to the next slide
        }
        
        // Set an interval to auto-slide every 3 seconds
        let slideInterval = setInterval(autoSlide, 3000);
        
        // Event listeners for manual slide control
        document.querySelector('.prev').addEventListener('click', () => {
            clearInterval(slideInterval); // Stop auto-slide
            moveSlide(-1); // Move to the previous slide
            slideInterval = setInterval(autoSlide, 3000); // Restart auto-slide interval
        });
        
        document.querySelector('.next').addEventListener('click', () => {
            clearInterval(slideInterval); // Stop auto-slide
            moveSlide(1); // Move to the next slide
            slideInterval = setInterval(autoSlide, 3000); // Restart auto-slide interval
        });
        
        // Chat functionality
        function startChat(option) {
            switch (option) {
                case 'Check Symptoms':
                    window.location.href = 'check-symptoms.html';
                    break;
                case 'Get Health Advice':
                    window.location.href = 'get-health-advice.html';
                    break;
                case 'Advise from Experts':
                    window.location.href = 'expert-advice.html';
                    break;
                default:
                    alert('Functionality not implemented yet.');
            }
        }
               
         