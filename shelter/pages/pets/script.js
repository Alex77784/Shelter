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

// popup========================================

let popup = document.querySelector('.popup');
let backgroundPopup = document.querySelector('.popupBackground');
let parentCard = document.querySelector('.box-inner-our-friends');

function createTemplatePopup(dataP) {
    let popupInner = document.createElement('div');
    popupInner.classList.add('popup-inner');
    popupInner.innerHTML = `
<div class="box-img">
<img src="${dataP.img}" alt="picture">
</div>
<div class="box-description">
 <h2 class="title-description">${dataP.name}</h2>
 <h3 class="subtitle-description">${dataP.breed}</h3>
 <p class="text-description">${dataP.description}</p>
 <div class="list-description">
     <li class="item-description">
     Age: <span>${dataP.age}</span>
     </li>
     <li class="item-description">
     Inoculations: <span>${dataP.inoculations}</span>
     </li>
     <li class="item-description">
     Diseases: <span>${dataP.diseases}</span>
     </li>
     <li class="item-description">
     Parasites: <span>${dataP.parasites}</span>
     </li>
 </div>    
`;
    popup.appendChild(popupInner);

    backgroundPopup.innerHTML = `
<div class="windowCenter">
<button class="btn-close">×</button>
</div>
`
}
// -----------
parentCard.addEventListener('click', openPopup);
function openPopup(event) {
    if (event.target.closest('.card-pet')) {
        let numCard = event.target.closest('.card-pet').dataset.id;

        backgroundPopup.classList.toggle('active');
        createTemplatePopup(dataPets[numCard - 1]);
    }
}

backgroundPopup.addEventListener('click', closePopup);
function closePopup() {
    backgroundPopup.innerHTML = '';
    popup.innerHTML = '';
    backgroundPopup.classList.remove('active');
}