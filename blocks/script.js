let container = document.querySelector('.container');

let editButton = container.querySelector('.profile__edit-button');
editButton.addEventListener('click', openPopup);//ввод текста

let popupClose = document.querySelector('.popup__close');
popupClose.addEventListener('click', closePopup);

let popupSave = container.querySelector('.popup__save');
let popupName = container.querySelector('.popup__profile__title');
let popupJob = container.querySelector('.popup__profile__subtitle');
let fullname = document.querySelector('.profile__full-name');
let jobs = document.querySelector('.profile__jobs');
let popup = document.querySelector('.popup');
let formSubmit = document.querySelector('.popup__form');
let profile__addbutton = document.querySelector('.profile__add-button');

let heart = document.querySelector('elements__heart');

heart.addEventListener( 'click', () =>
heart.classList.toggle('heart-active') )//Переключим классы

//Переключим классы
//elem.classList.toggle("you");
//elem.classList.toggle("he");
//console.log(elem.classList);

function openPopup() { //открытие popup
    popup.classList.add('popup_opened');
}

function closePopup() { //закрытие popup
    popup.classList.remove('popup_opened');
}



