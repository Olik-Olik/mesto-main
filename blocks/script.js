let container = document.querySelector('.container');

let heartButton = document.querySelector('.elements__heart');
heartButton.addEventListener( 'click', () =>
heartButton.classList.toggle('elements__heart-active'));//переключит на черное хотелось бы

/*let popupClose = container.querySelector('.popup__close');*/
/*let popupSave = container.querySelector('.popup__save');
let popupName = container.querySelector('.popup__field_name');
let popupJob = container.querySelector('.popup__field_job');
let fullname = container.querySelector('.profile__full-name');
let jobs = container.querySelector('.profile__jobs');
let formSubmit = container.querySelector('.popup__form');
let addButton = container.querySelector('.profile__add-button');*/

/*
let editButton = document.querySelector('.profile__edit-button');
let popup = container.querySelector('.popup');
editButton.addEventListener('click',function (){
popup.classList.add('popup_visible');})

let popupClose = container.querySelector('.popup__close');
popupClose.addEventListener('click',function (){
popup.classList.remove ('popup_visible');})
*/
let editButton = document.querySelector('.profile__edit-button');
let popupClose = container.querySelector('.popup__close');
let popup = container.querySelector('.popup');
editButton.addEventListener('click',toggleClass);
popupClose.addEventListener('click',toggleClass);
function toggleClass(){
   popup.classList.toggle('popup_visible'); }//переключаем класс

// Находим форму в DOM
let formElement = container.querySelector('.popup__container')
// Находим поля формы в DOM
let nameInput = container.querySelector('.popup__field_name');
let jobInput = container.querySelector('.popup__field_job');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Получите значение полей jobInput и nameInput из свойства value
jobInput.getAttribute('value:');
nameInput.getAttribute('value');

    // Выберите элементы, куда должны быть вставлены значения полей
let ProfileTitle = container.querySelector('.profile__title');
let ProfileSubtitle = container.querySelector('.profile__subtitle');
    // Вставьте новые значения с помощью textContent
 ProfileTitle.textContent = nameInput.value;
  ProfileSubtitle.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
