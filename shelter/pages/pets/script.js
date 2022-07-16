let nav = document.querySelector('.nav-header'),
    burger = document.querySelector('.burger'),
    background = document.querySelector('.background'),
    itemNav = document.querySelectorAll('.item-nav-header'),
    logo = document.querySelector('.box-logo-header'),
    logoCopy = document.querySelector('.box-logo-header').cloneNode(1),
    bodyLock = document.body;

// -------------------
burger.addEventListener('click', openBurger);
itemNav.forEach(elem => elem.addEventListener('click', openBurger));
background.addEventListener('click', openBurger);

function openBurger() {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    background.classList.toggle('active');
    logo.classList.toggle('active');
    setTimeout(() => {
        logoCopy.classList.toggle('copy');
    }, 300);
    bodyLock.classList.toggle('active');
    nav.append(logoCopy);
};

// Carusel========================================
