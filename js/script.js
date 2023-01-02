let navLinks = document.querySelectorAll('.section-header .header__nav .header__link');

for (const link of navLinks) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
    event.preventDefault();

    const href = this.getAttribute('href');

    document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
    });
    burgerBtn.classList.remove('active');
    nav.classList.remove('hide');
    body.classList.remove('overflow-hidden')
}

const changeTheme = document.querySelector('.logo');
const body = document.querySelector('body');
const overlay = document.querySelector('#overlay');

changeTheme.addEventListener('click', event => {
    event.preventDefault();

    overlay.classList.toggle('mooned');
    body.classList.toggle('dark-theme');
});

const burgerBtn = document.querySelector('.burger__btn');
const nav = document.querySelector('.header__nav');

burgerBtn.addEventListener('click', event => {
    burgerBtn.classList.toggle('active');
    nav.classList.toggle('hide');
    body.classList.toggle('overflow-hidden')
})
