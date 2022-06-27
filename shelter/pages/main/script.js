let nav = document.querySelector('.nav'),
    burger = document.querySelector('.burger'),
    background = document.querySelector('.background'),
    navItemAll = document.querySelectorAll('.nav-item'),
    boxLogo = document.querySelector('.box-logo'),
    boxLogoCopy = document.querySelector('.box-logo').cloneNode(1),
    bodyLock = document.querySelector('body');

// ---------------
burger.addEventListener('click', openBurger);
background.addEventListener('click', closeBurger);
navItemAll.forEach(elem => elem.addEventListener('click', closeBurger));

function openBurger() {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    background.classList.toggle('active');
    boxLogo.classList.toggle('active');
    boxLogoCopy.classList.toggle('copy');
    bodyLock.classList.toggle('active');

    nav.append(boxLogoCopy);
};
