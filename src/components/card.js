
import {initialCards} from "./initialCards.js";
import {nameInputAddCard, inputAddLink} from "./index.js";
import {openPhotoPopup} from "./modal.js";
import {updateAvatar, like, unlike, deleteCard, getCards} from "./api.js"

const cardsContainer = document.querySelector('.cards');

  


const myId = localStorage.getItem('userId');

function createCard(name, alt, link, cardId, ownerId, likess, isLiked) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardName = cardElement.querySelector('.card__name');
  const likeButton = cardElement.querySelector('.card__like-icon')
  const likeCount = cardElement.querySelector('.card__like-count');
  const deleteButton = cardElement.querySelector('.card__delete-button')

  likeCount.textContent = likess;
  cardImage.src = link;
  cardName.textContent = name;
  cardImage.alt = alt;

  // console.log(ownerId);
  // console.log(myId);

  // проверка на авторство
  if (ownerId === myId) { 
    deleteButton.addEventListener('click', (evt) => { // если карточка моя, то вешаю обработчик на кнопку удаления
      deleteCard(evt, cardId)
    }); 
  } else {
    deleteButton.remove() // если нет, кнопки удаления не будет
  }

  isLiked && likeButton.classList.add('card__like-icon_active'); // Если карточка мной лайкнута, то отображаю это

  likeButton.addEventListener ('click', (evt) => {
    toggleLike(evt, cardId, likeCount)
  });

  return cardElement;
} //функция создания карточек



const toggleLike = (evt, cardId, likeCount) => {
  if (evt.target.classList.contains('card__like-icon_active')) {
      like(evt, cardId, likeCount)
    } else {
      unlike(evt, cardId, likeCount)
    }

} // лайк





getCards()





cardsContainer.addEventListener ('click', (evt) => {
  openPhotoPopup(evt);
}) 




export {
  cardsContainer,
  createCard,
  myId
}









