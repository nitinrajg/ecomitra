// Function to add dynamic hover effect
function addHoverEffect(element, hoverStyles, defaultStyles) {
    element.addEventListener('mouseenter', function () {
        Object.assign(element.style, hoverStyles);
    });

    element.addEventListener('mouseleave', function () {
        Object.assign(element.style, defaultStyles);
    });
}

// Apply hover effects to the Collaborate button
const collaborateBtn = document.querySelector('.collaborate-btn');
if (collaborateBtn) {
    addHoverEffect(
        collaborateBtn,
        { backgroundColor: 'transparent', color: '#fff', borderColor: '#4caf50' }, // Hover style
        { backgroundColor: 'transparent', color: 'white', borderColor: 'transparent' } // Default style
    );
}

// Apply hover effects to the Contact button
const contactBtn = document.querySelector('.contact-btn');
if (contactBtn) {
    addHoverEffect(
        contactBtn,
        { backgroundColor: 'transparent', color: '#fff', borderColor: '#4caf50' }, // Hover style
        { backgroundColor: 'transparent', color: 'white', borderColor: 'transparent' } // Default style
    );
}

// Apply hover effects to navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    addHoverEffect(
        link,
        { color: '#4caf50' }, // Hover style
        { color: 'white' }    // Default style
    );
});

document.querySelectorAll('.image-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const slideshow = document.querySelector('.slideshow');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;

    function showSlide(index) {
        if (index < 0) {
            currentSlide = slides.length - 1;
        } else if (index >= slides.length) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }
        slideshow.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    const bubbles = document.querySelectorAll('.bubble');
const containerWidth = document.querySelector('.bubble-container').offsetWidth;
const containerHeight = document.querySelector('.bubble-container').offsetHeight;

bubbles.forEach(bubble => {
  const randomLeft = Math.random() * (containerWidth - bubble.offsetWidth);
  const randomTop = Math.random() * (containerHeight - bubble.offsetHeight);

  bubble.style.left = `${randomLeft}px`;
  bubble.style.top = `${randomTop}px`;
});
    

    // Optional: Auto-play functionality
    // setInterval(nextSlide, 5000);
});

document.addEventListener('DOMContentLoaded', function() {
    const positions = [
        { left: '0%', top: '0%' },
        { left: '70%', top: '0%' },
        { left: '10%', top: '70%' },
        { left: '80%', top: '70%' }
    ];

    positions.forEach((pos, index) => {
        const bubble = document.getElementById(`bubble${index + 1}`);
        if (bubble) {
            bubble.style.left = pos.left;
            bubble.style.top = pos.top;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const visionSection = document.querySelector('.vision-section');
    const missionSection = document.querySelector('.mission-section');

    function checkVisibility() {
        const visionRect = visionSection.getBoundingClientRect();
        const missionRect = missionSection.getBoundingClientRect();

        // Check if the vision section is in view
        if (visionRect.top < window.innerHeight && visionRect.bottom >= 0) {
            visionSection.querySelector('img').classList.add('animate-slide-right');
            visionSection.querySelector('.vision-text').classList.add('animate-slide-right');
        }

        // Check if the mission section is in view
        if (missionRect.top < window.innerHeight && missionRect.bottom >= 0) {
            missionSection.querySelector('img').classList.add('animate-slide-left');
            missionSection.querySelector('.mission-text').classList.add('animate-slide-left');
        }
    }

    // Check visibility on scroll
    window.addEventListener('scroll', checkVisibility);
    // Initial check in case it's already in view
    checkVisibility();
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const headerOffset = document.querySelector('.header').offsetHeight; // Get the height of the header
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // Smooth scroll effect
    });
}





