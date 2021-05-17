let container = document.querySelector('.container');

let profile__editbutton = document.querySelector('.profile__edit-button');
profile__editbutton.addEventListener('click', openPopup);

let popupClose = document.querySelector('.popup__close');
popupClose.addEventListener('click', closePopup);

let popupSave = document.querySelector('.popup__input-save');
let popupName = document.querySelector('.popup__field_name');
let popupJob = document.querySelector('.popup__field_job');
let fullname = document.querySelector('.profile__full-name');
let jobs = document.querySelector('.profile__jobs');
let popup = document.querySelector('.popup');
let formSubmit = document.querySelector('.popup__form');
let profile__addbutton = document.querySelector('.profile__add-button');

let heart = document.querySelector('selector');
heart.addEventListener( 'click', () =>
heart.classList.toggle('heart-active') )


function openPopup() { //открытие popup
    popup.classList.add('popup_opened');
}

function closePopup() { //закрытие popup
    popup.classList.remove('popup_opened');
}



