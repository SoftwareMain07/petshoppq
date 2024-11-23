function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Fecha o menu ao clicar em qualquer link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');

    // Verifica se o clique foi fora do menu e do ícone de menu
    if (
        navLinks.classList.contains('active') &&
        !navLinks.contains(event.target) &&
        !menuIcon.contains(event.target)
    ) {
        navLinks.classList.remove('active');
    }
});
