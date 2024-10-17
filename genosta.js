// JavaScript code to handle header visibility on scroll
let lastScrollTop = 0; // Keep track of last scroll position
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > header.offsetHeight) {
        // Scrolling down - hide the header
        header.classList.add('hidden');
    } else {
        // Scrolling up - show the header
        header.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
