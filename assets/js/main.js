/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navMenu) {
    navToggle.addEventListener('click', () => { navMenu.classList.add('show-menu') })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

navLink.forEach(n =>
    n.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu')
    })
)


/*=============== CHANGE BACKGROUND HEADER ===============*/
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header')
    }
    else
        header.classList.remove('scroll-header')
})
/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".product-swiper", {
    spaceBetween: 24,
    loop: 'true',
    slidesPerView: "auto",
    centeredSlides: true,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        992: {
            spaceBetween: 80,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
window.addEventListener('scroll', () => {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
})

/*=============== DARK LIGHT THEME ===============*/
const darkbot = document.getElementById('theme-button');
const body = document.getElementsByTagName('body');
darkbot.addEventListener('click', () => {
    // body[0].classList.add('dark-theme')
    if (body[0].classList.contains('dark-theme')) {
        body[0].classList.remove('dark-theme')
        darkbot.classList.remove('bx-sun')
        darkbot.classList.add('bx-moon')
    }
    else {
        body[0].classList.add('dark-theme')
        darkbot.classList.remove('bx-moon')
        darkbot.classList.add('bx-sun')
    }
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__img, .prodect__container, .footer__container`)
sr.reveal(`.home__data`, { delay: 500 })
sr.reveal(`.giving__content, .product__card`, { interval: 100 })
sr.reveal(`.reserve__data, .reserving__form`, { origin: 'left' })
sr.reveal(`.resever__img, .reserving__img`, { origin: 'right' })