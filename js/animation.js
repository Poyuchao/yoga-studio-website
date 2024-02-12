document.addEventListener('DOMContentLoaded', () => {
    // Setup the Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Check if the element is intersecting (in view)
            if (entry.isIntersecting) {
                // Add 'visible' class to trigger animations
                entry.target.classList.add('visible');
            } else {
                // Optional: Remove 'visible' class if you want animations to reset when the element goes out of view
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is in view

    // Observe elements that should trigger animations on scroll
    document.querySelectorAll('.follow-section-container, .yoga-animation-top, .yoga-animation-bottom, .follow-text-container').forEach(el => {
        observer.observe(el);
    });
});


