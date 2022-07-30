let nav = document.querySelector('.nav'),
    burger = document.querySelector('.burger'),
    background = document.querySelector('.background'),
    navItemAll = document.querySelectorAll('.nav-item'),
    boxLogo = document.querySelector('.box-logo'),
    boxLogoCopy = document.querySelector('.box-logo').cloneNode(1),
    bodyLock = document.body;

// burger ---------------
burger.addEventListener('click', openBurger);
background.addEventListener('click', closeBurger);
navItemAll.forEach(elem => elem.addEventListener('click', closeBurger));

function openBurger() {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    background.classList.toggle('active');
    boxLogo.classList.toggle('active');
    setTimeout(() => {
        boxLogoCopy.classList.add('copy');
    }, 300);
    bodyLock.classList.toggle('active');

    nav.append(boxLogoCopy);
};
function closeBurger() {
    burger.classList.remove('active');
    nav.classList.remove('active');
    background.classList.remove('active');
    boxLogo.classList.remove('active');
    boxLogoCopy.classList.remove('copy');
    bodyLock.classList.remove('active');
}

// carusel ---------------

let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let lenta = document.querySelector('#lenta');
let blockLeft = document.querySelector('#block-left');
let blockActive = document.querySelector('#block-active');
let blockRight = document.querySelector('#block-right');
let lastSaveArrayAnim = [0, 1, 2];
let nextCards = cleanArray(lastSaveArrayAnim);
let newBlockCardForPopup = document.querySelectorAll('.card');

function cleanArray(lastSaveArrayAnim) {
    let a = generatorArray();
    let flag = false;
    b(lastSaveArrayAnim);

    while (flag) {
        a = generatorArray();
        b(lastSaveArrayAnim);
    }

    function b(srcArr) {
        for (let i of srcArr) {
            for (let j of a) {
                if (i === j) {
                    return flag = true;
                }
            }
        }
        return flag = false;
    }

    return a;
}

function generatorArray() {
    let generatorNum = () => { return Math.floor(Math.random() * 8) };
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr.push(generatorNum());
    }
    while (
        arr[0] === arr[1] ||
        arr[1] === arr[2] ||
        arr[0] === arr[2]
    ) {
        for (let i = 0; i < 3; i++) {
            arr.pop(arr[i]);
        }
        for (let i = 0; i < 3; i++) {
            arr.push(generatorNum());
        }
    }
    return arr;
};

function createTemplateCard({ img, name, id }) {
    let card = document.createElement('article');
    card.classList.add('card');
    card.dataset.id = id;

    card.innerHTML = `
    <div class="img-card">
        <img src="${img}" alt="picture">
    </div>
    <p class="name">${name}</p>
    <a href="#" class="link-our-pets">
    Learn more
    </a>
    `
    return card;
}

// -----------------

arrowLeft.addEventListener('click', flipThroughLeft);
function flipThroughLeft() {
    lenta.classList.add('flip-through-left');
    arrowLeft.removeEventListener('click', flipThroughLeft);
}
arrowRight.addEventListener('click', flipThroughRight);
function flipThroughRight() {
    lenta.classList.add('flip-through-right');
    arrowRight.removeEventListener('click', flipThroughRight);
}


lenta.addEventListener('animationend', animationendLenta);
function animationendLenta(animEvent) {
    let array = nextCards;

    if (animEvent.animationName === 'move-left') {
        lenta.classList.remove('flip-through-left');
        blockActive.innerHTML = blockLeft.innerHTML;
        blockLeft.innerHTML = '';
        blockLeft.appendChild(createTemplateCard(dataPets[array[0]]));
        blockLeft.appendChild(createTemplateCard(dataPets[array[1]]));
        blockLeft.appendChild(createTemplateCard(dataPets[array[2]]));
        lastSaveArrayAnim.splice(0, 3, nextCards[0], nextCards[1], nextCards[2]);
        nextCards = cleanArray(lastSaveArrayAnim)
        arrowLeft.addEventListener('click', flipThroughLeft);

        newBlockCardForPopup = document.querySelectorAll('.card');
        newBlockCardForPopup.forEach(elem => elem.
            addEventListener('click', openPopup));
    } else {
        lenta.classList.remove('flip-through-right');
        blockActive.innerHTML = blockRight.innerHTML;
        blockRight.innerHTML = '';
        blockRight.appendChild(createTemplateCard(dataPets[array[0]]));
        blockRight.appendChild(createTemplateCard(dataPets[array[1]]));
        blockRight.appendChild(createTemplateCard(dataPets[array[2]]));
        lastSaveArrayAnim.splice(0, 3, nextCards[0], nextCards[1], nextCards[2]);
        nextCards = cleanArray(lastSaveArrayAnim);
        arrowRight.addEventListener('click', flipThroughRight);

        newBlockCardForPopup = document.querySelectorAll('.card');
        newBlockCardForPopup.forEach(elem => elem.
            addEventListener('click', openPopup));
    }
}

// popup
let popupBackground = document.querySelector('.popup-background');
let popup = document.querySelector('.popup');
bodyLock = document.body;

function templatePopup(dataCard) {
    let popupInner = document.createElement('div');
    popupInner.classList.add('popup-inner')
    popupInner.innerHTML = `
    <div class="box-img">
    <img src="${dataCard.img}" alt="picture">
</div>
<div class="box-description">
    <h1 class="title-description">${dataCard.name}</h1>
    <h3 class="subtitle-description">${dataCard.breed}</h3>
    <p class="text-description">${dataCard.description}</p>
    <ul class="list-description">
        <li class="item-description">
            Age: <span>${dataCard.age}</span>
        </li>
        <li class="item-description">
            Inoculations: <span>${dataCard.inoculations}</span>
        </li>
        <li class="item-description">
            Diseases: <span>${dataCard.diseases}</span>
        </li>
        <li class="item-description">
            Parasites: <span>${dataCard.parasites}</span>
        </li>
    </ul>
</div>
    `
    let centerWindowClose = document.createElement('div');
    centerWindowClose.classList.add("center-window-close");
    centerWindowClose.innerHTML = `
    <button class="btn-close" >×</button>
    `
    popup.appendChild(popupInner);
    popupBackground.appendChild(centerWindowClose)
}

// ------------

newBlockCardForPopup.forEach(elem => elem.addEventListener('click', openPopup));
function openPopup(event) {
    let numberCard = event.currentTarget.dataset.id - 1;
    templatePopup(dataPets[numberCard]);
    popupBackground.classList.add('active');
    bodyLock.classList.add('active');
}
popupBackground.addEventListener('click', closePopup);
function closePopup() {
    popup.innerHTML = '';
    popupBackground.innerHTML = '';
    popupBackground.classList.remove('active');
    bodyLock.classList.remove('active');
}