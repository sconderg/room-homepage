const slides = document.querySelectorAll('.slide');
const nextBtns = document.querySelectorAll('.slide .btns .next');
const prevBtns = document.querySelectorAll('.slide .btns .prev');

nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const parent = btn.parentElement.parentElement.parentElement;
        parent.classList.remove('active');
        if(parent.nextElementSibling?.classList.contains('slide')) {
            parent.nextElementSibling.classList.add('active');
        } else {
            slides[0].classList.add('active');
        }
    });
});

prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const parent = btn.parentElement.parentElement.parentElement;
        parent.classList.remove('active');
        if(parent.previousElementSibling?.classList.contains('slide')) {
            parent.previousElementSibling.classList.add('active');
        } else {
            slides[slides.length - 1].classList.add('active');
        }
    });
});


// Navigation bar mobile

const hamb = document.querySelector('.navbar .navbar-toggler');
hamb.addEventListener('click', () => document.querySelector('.navbar .nav-collapse').classList.add('active'));

const closeNav = document.querySelector('.nav-collapse .close');
closeNav.addEventListener('click', () => document.querySelector('.navbar .nav-collapse').classList.remove('active'));