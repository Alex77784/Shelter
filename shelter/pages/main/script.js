let nav = document.querySelector('.nav'),
    burger = document.querySelector('.burger'),
    background = document.querySelector('.background'),
    navItemAll = document.querySelectorAll('.nav-item'),
    boxLogo = document.querySelector('.box-logo'),
    boxLogoCopy = document.querySelector('.box-logo').cloneNode(1),
    bodyLock = document.body;

// burger ---------------
burger.addEventListener('click', openBurger);
background.addEventListener('click', openBurger);
navItemAll.forEach(elem => elem.addEventListener('click', openBurger));

function openBurger() {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    background.classList.toggle('active');
    boxLogo.classList.toggle('active');
    setTimeout(() => {
        boxLogoCopy.classList.toggle('copy');
    }, 300);
    bodyLock.classList.toggle('active');

    nav.append(boxLogoCopy);
};
// carusel ---------------

let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let lenta = document.querySelector('#lenta');
let blockLeft = document.querySelector('#block-left');
let blockActive = document.querySelector('#block-active');
let blockRight = document.querySelector('#block-right');
let lastSaveArrayAnim = [0, 1, 2];
let nextCards = cleanArray(lastSaveArrayAnim);

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

function createTemplateCard({ img, name }) {
    let card = document.createElement('div');
    card.classList.add('card');

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
let array = nextCards;

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
        nextCards = cleanArray(lastSaveArrayAnim);

        arrowLeft.addEventListener('click', flipThroughLeft);
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
    }
}