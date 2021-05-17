let container = document.querySelector('.container')

let edit-button = document.querySelector('.profile__edit-button')
let popupClose = document.querySelector('.popup__close')
let popupSave = document.querySelector('.popup__input-save')
let popupName = document.querySelector('.popup__field_name')
let popupJob = document.querySelector('.popup__field_job')
let fullname = document.querySelector('.profile__full-name')
let jobs = document.querySelector('.profile__jobs')
let popup = document.querySelector('.popup')
let formSubmit = document.querySelector('.popup__form')
let add-button = document.querySelector('.profile__add-button')

function openPopup() { //открытие popup
    popup.classList.add('popup_opened');
}

function closePopup() { //закрытие popup
    popup.classList.remove('popup_opened');
}

edit-button.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
