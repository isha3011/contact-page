const animatedCards = document.querySelectorAll('.animate-from-left, .animate-from-right, .animate-from-top, .animate-from-bottom');

// Run animations only if screen width is more than 768px
if (window.innerWidth > 768) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.2
    });

    animatedCards.forEach(card => {
        observer.observe(card);
    });
} else {
    // For mobile, instantly show the cards without animation
    animatedCards.forEach(card => {
        card.classList.add('active');
    });
}
