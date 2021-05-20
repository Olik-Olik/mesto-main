const container = document.querySelector('.container');
const heartButton = document.querySelector('.elements__heart');
heartButton.addEventListener( 'click', () =>
heartButton.classList.toggle('heart-active'));//переключит на черное хотелось бы
/*let popupClose = container.querySelector('.popup__close');*/
let popupSave = container.querySelector('.popup__save');
let popupName = container.querySelector('.popup__field_name');
let popupJob = container.querySelector('.popup__field_job');
let fullname = document.querySelector('.profile__full-name');
let jobs = document.querySelector('.profile__jobs');

let formSubmit = container.querySelector('.popup__form');
let addButton = container.querySelector('.profile__add-button');

/*
const editButton = container.querySelector('.profile').querySelector('.profile__info').querySelector('.profile__edit-button');
*/
let editButton = document.querySelector('.profile__edit-button');
let popup = container.querySelector('.popup');
editButton.addEventListener('click',function (){
popup.classList.add('popup_visible');})
    /*classList.add('popup_opened');*/
/*function closePopup() {
     popup.classList.remove('popup_opened');
/*function closePopup() { //закрытие popup
    popup.classList.remove ='popup_visible';
}*/
let popupClose = container.querySelector('.popup__close');
popupClose.addEventListener('click',function (){
popup.classList.remove ('popup_visible');})

/*editButton.addEventListener('click', openPopup);*/
/*popupClose.addEventListener('click', closePopup);}*/



