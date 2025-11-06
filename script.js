const hamburger = document.querySelector(".hamburger");
const mobilemenu = document.querySelector(".mobile-menu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobilemenu.classList.toggle('active');

    const spans = hamburger.querySelectorAll('span');
    if (hamburger.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px,-6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('light-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        document.body.style.background = 'linear-gradient(135deg, #e2e8f0, #f1f5f9)';
        document.body.style.color = '#1e293b';
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        document.body.style.background = 'linear-gradient(135deg, #0f172a, #1e293b)';
        document.body.style.color = '#f8fafc';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobilemenu.classList.remove('active');
        hamburger.classList.remove('active');

        // Reset hamburger animation
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});