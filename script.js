function toggleMode() {
    document.body.classList.toggle("dark");
}

document.querySelector('.contact-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});