// Efek fade-in saat scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        const position = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight / 1.2;

        if (position < windowHeight) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});