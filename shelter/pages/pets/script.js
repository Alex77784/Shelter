const dataPets =
    [
        {
            "id": 1,
            "name": "Jennifer",
            "img": "../../assets/images/our-friends/jennifer.png",
            "type": "Dog",
            "breed": "Labrador",
            "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
            "age": "2 months",
            "inoculations": ["none"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "id": 2,
            "name": "Sophia",
            "img": "../../assets/images/our-friends/sophia.png",
            "type": "Dog",
            "breed": "Shih tzu",
            "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
            "age": "1 month",
            "inoculations": ["parvovirus"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "id": 3,
            "name": "Woody",
            "img": "../../assets/images/our-friends/woody.png",
            "type": "Dog",
            "breed": "Golden Retriever",
            "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
            "age": "3 years 6 months",
            "inoculations": ["adenovirus", "distemper"],
            "diseases": ["right back leg mobility reduced"],
            "parasites": ["none"]
        },
        {
            "id": 4,
            "name": "Scarlett",
            "img": "../../assets/images/our-friends/scarlet.png",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
            "age": "3 months",
            "inoculations": ["parainfluenza"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "id": 5,
            "name": "Katrine",
            "img": "../../assets/images/our-friends/katrine.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
            "age": "6 months",
            "inoculations": ["panleukopenia"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "id": 6,
            "name": "Timmy",
            "img": "../../assets/images/our-friends/timmy.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
            "age": "2 years 3 months",
            "inoculations": ["calicivirus", "viral rhinotracheitis"],
            "diseases": ["kidney stones"],
            "parasites": ["none"]
        },
        {
            "id": 7,
            "name": "Freddie",
            "img": "../../assets/images/our-friends/freddie.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
            "age": "2 months",
            "inoculations": ["rabies"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "id": 8,
            "name": "Charly",
            "img": "../../assets/images/our-friends/charly.png",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
            "age": "8 years",
            "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
            "diseases": ["deafness", "blindness"],
            "parasites": ["lice", "fleas"]
        },
    ];
// -----------------------------------------------------------------------

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
// ------------------------
parentCard.addEventListener('click', openPopup);
function openPopup(event) {
    if (event.target.closest('.card-pet')) {
        let numCard = event.target.closest('.card-pet').dataset.id;

        backgroundPopup.classList.toggle('active');
        createTemplatePopup(dataPets[numCard - 1]);
        bodyLock.classList.add('active')
    }
}

backgroundPopup.addEventListener('click', closePopup);
function closePopup() {
    backgroundPopup.innerHTML = '';
    popup.innerHTML = '';
    backgroundPopup.classList.remove('active');
    bodyLock.classList.remove('active')
}

// pagination==============================================

let parentNav = document.querySelector('.nav-our-friends');
let btnEndLeft = document.querySelector('#btn-end-left');
let btnFlipThroughLeft = document.querySelector('#btn-flip-through-left');
let btnWithNum = document.querySelector('.btn-center-nav-our-friends');
let btnFlipThroughRight = document.querySelector('#btn-flip-through-right');
let btnEndRight = document.querySelector('#btn-end-right');
let btnNum = 1;

let desableRigthButtons = () => {
    btnFlipThroughRight.classList.add('desable-right-btn');
    btnEndRight.classList.add('desable-right-btn');
    btnFlipThroughLeft.classList.add('include-left-btn');
    btnEndLeft.classList.add('include-left-btn');
    btnFlipThroughRight.removeEventListener('click', flipThroughRightNextPage);
    btnEndRight.removeEventListener('click', flipThroughRightNextPage);
    btnFlipThroughLeft.addEventListener('click', flipThroughLeftNextPage);
    btnEndLeft.addEventListener('click', flipThroughLeftNextPage);
}
let desableLeftButtons = () => {
    btnFlipThroughRight.classList.remove('desable-right-btn');
    btnEndRight.classList.remove('desable-right-btn');
    btnFlipThroughLeft.classList.remove('include-left-btn');
    btnEndLeft.classList.remove('include-left-btn');
    btnFlipThroughLeft.removeEventListener('click', flipThroughLeftNextPage);
    btnEndLeft.removeEventListener('click', flipThroughLeftNextPage);
    btnFlipThroughRight.addEventListener('click', flipThroughRightNextPage);
    btnEndRight.addEventListener('click', flipThroughRightNextPage);
}
// flipThroughNav--------------

btnFlipThroughRight.addEventListener('click', flipThroughRightNextPage);
function flipThroughRightNextPage() {
    btnNum++;
    btnWithNum.innerHTML = btnNum;
    if (btnNum >= 2 && btnNum <= 5) {
        btnFlipThroughLeft.classList.add('include-left-btn');
        btnEndLeft.classList.add('include-left-btn');
        btnFlipThroughLeft.addEventListener('click', flipThroughLeftNextPage);

        transitionAnotherCards();
        parentCard.classList.remove('opasity-on');
    } else if (btnNum === 6) {
        desableRigthButtons();

        transitionAnotherCards();
        parentCard.classList.remove('opasity-on');

    }
}
btnEndRight.addEventListener('click', function () {
    btnNum = 6;
    btnWithNum.innerHTML = btnNum;
    desableRigthButtons();

    transitionAnotherCards();
    parentCard.classList.remove('opasity-on');
});


function flipThroughLeftNextPage() {
    btnNum--;
    btnWithNum.innerHTML = btnNum;
    if (btnNum >= 2 && btnNum <= 5) {
        btnFlipThroughRight.classList.remove('desable-right-btn');
        btnEndRight.classList.remove('desable-right-btn');
        btnFlipThroughRight.addEventListener('click', flipThroughRightNextPage);

        transitionAnotherCards();
        parentCard.classList.remove('opasity-on');
    } else if (btnNum === 1) {
        btnFlipThroughLeft.removeEventListener('click', flipThroughLeftNextPage);
        desableLeftButtons();

        transitionAnotherCards();
        parentCard.classList.remove('opasity-on');
    }
}
btnEndLeft.addEventListener('click', function () {
    btnNum = 1;
    btnWithNum.innerHTML = btnNum;
    desableLeftButtons();

    transitionAnotherCards();
    parentCard.classList.remove('opasity-on');
});

// flipThroughCard-------------------------

parentNav = document.querySelector('.nav-our-friends');
btnEndLeft = document.querySelector('#btn-end-left');
btnFlipThroughLeft = document.querySelector('#btn-flip-through-left');
btnWithNum = document.querySelector('.btn-center-nav-our-friends');
btnFlipThroughRight = document.querySelector('#btn-flip-through-right');
btnEndRight = document.querySelector('#btn-end-right');

function createTemplateCard({ img, name, id }) {
    let card = document.createElement('article');
    card.classList.add('card-pet');
    card.dataset.id = id;

    card.innerHTML = `
    <div img-card>
    <img src="${img}">
    </div>
    <p class="name-pet">${name}</p>
    <a href="#" class="btn-pet">Learn more</a>
    `
    return card;
}

function transitionAnotherCards() {
    switch (Number(btnWithNum.innerHTML)) {
        case 1:
            let arrayPets1 = [5, 1, 3, 2, 6, 8, 4, 7];
            removeAndCreateCard(arrayPets1);
            parentCard.classList.add('opasity-off');
            setTimeout(() => {
                parentCard.classList.remove('opasity-off');
                parentCard.classList.add('opasity-on');
            }, 100)
            break;
        case 2:
            let arrayPets2 = [8, 7, 6, 4, 3, 2, 1, 5];
            removeAndCreateCard(arrayPets2);
            parentCard.classList.add('opasity-off');
            setTimeout(() => {
                parentCard.classList.remove('opasity-off');
                parentCard.classList.add('opasity-on');
            }, 100)
            break;
        case 3:
            let arrayPets3 = [3, 2, 5, 6, 7, 8, 4, 1];
            removeAndCreateCard(arrayPets3);
            parentCard.classList.add('opasity-off');
            setTimeout(() => {
                parentCard.classList.remove('opasity-off');
                parentCard.classList.add('opasity-on');
            }, 100)
            break;
        case 4:
            let arrayPets4 = [5, 6, 7, 8, 1, 2, 3, 4];
            removeAndCreateCard(arrayPets4);
            parentCard.classList.add('opasity-off');
            setTimeout(() => {
                parentCard.classList.remove('opasity-off');
                parentCard.classList.add('opasity-on');
            }, 100)
            break;
        case 5:
            let arrayPets5 = [7, 8, 1, 2, 3, 4, 5, 6];
            removeAndCreateCard(arrayPets5);
            parentCard.classList.add('opasity-off');
            setTimeout(() => {
                parentCard.classList.remove('opasity-off');
                parentCard.classList.add('opasity-on');
            }, 100)
            break;
        case 6:
            let arrayPets6 = [4, 5, 6, 7, 8, 1, 2, 3];
            removeAndCreateCard(arrayPets6);
            parentCard.classList.add('opasity-off');
            setTimeout(() => {
                parentCard.classList.remove('opasity-off');
                parentCard.classList.add('opasity-on');
            }, 100)
            break;
    }
    function removeAndCreateCard(arrayPets) {
        parentCard.innerHTML = '';
        for (let i = 0; i < arrayPets.length; i++) {
            const element = arrayPets[i];
            console.log(element, i)
            parentCard.appendChild(createTemplateCard(dataPets[
                element - 1]));
        }
    }
}