let container = document.querySelector('.container');

let heartButton = document.querySelector('.elements__heart');
heartButton.addEventListener( 'click', () =>
heartButton.classList.toggle('elements__heart-active'));//переключит на черное хотелось бы

/*let popupClose = container.querySelector('.popup__close');*/
let popupSave = container.querySelector('.popup__save');
let popupName = container.querySelector('.popup__field_name');
let popupJob = container.querySelector('.popup__field_job');
let fullname = container.querySelector('.profile__full-name');
let jobs = container.querySelector('.profile__jobs');
let formSubmit = container.querySelector('.popup__form');
let addButton = container.querySelector('.profile__add-button');
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

/*

let popupSave = container.querySelector('.profile__save');
popupSave.insertAdjacentHTML('beforeend',
    `<div class="popup__page">
    <h2 class="popup__field_name">Жак-Ив Кусто</h2>
    <p class="popup__field_job">Исследователь океана</p>
     </div>`);
  renderAdded();

popupSave.addEventListener('click',popup__page);
}
*/

/*

let songsContainer = container.querySelector('.songs-container');

let addButton = container.querySelector('.form__submit-btn_action_add');
let resetButton = container.querySelector('.form__submit-btn_action_reset');

function renderAdded() { //есть ли треки в плейлисте,
   // и меняем внешний вид страницы. Там и будем писать логику,
   // когда нужно показывать надпись «Нет добавленных песен».
  let songs = songsContainer.querySelectorAll('.song');
  let noSongsElement = container.querySelector('.no-songs');/!*
  определите переменную noSongsElement.В неё должен попадать элемент с класс-songs *!/

  if (songs.length === 0) {
resetButton.setAttribute('disabled', true);
resetButton.classList.add('form__submit-btn_disabled');
noSongsElement.classList.remove('no-songs_hidden');// необходимо убрать скрытие, если песен нет

  }
else{
resetButton.removeAttribute('disabled', true);
resetButton.classList.remove('form__submit-btn_disabled');
noSongsElement.classList.add('no-songs_hidden');
}
}
*/
