const animatedCards = document.querySelectorAll('.animate-from-left, .animate-from-right, .animate-from-top, .animate-from-bottom');

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
