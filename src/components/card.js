
import {initialCards} from "./initialCards.js";
import {nameInputAddCard, inputAddLink} from "./index.js";
import {openphotoPopup} from "./modal.js";

export const cardsContainer = document.querySelector('.cards');

export function createCard(card, isFromInitialCards) {
    // isFromInitialCards определяем, откуда мы берем карточки
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardName = cardElement.querySelector('.card__name');

    cardImage.src = card.link;
    cardName.textContent = card.name;

    if (!isFromInitialCards) {
      cardName.textContent = nameInputAddCard.value;
      cardImage.src = inputAddLink.value;
    }

    return cardElement;
  } //функция создания карточек




initialCards.forEach((card) => {
    const cardElement = createCard(card, true);
    cardsContainer.append(cardElement);
  }); // проходимся по массиву и добавляем карточки


  const toggleLike = (evt) => {
    if (evt.target.classList.contains('card__like-icon')) {
      evt.target.classList.toggle('card__like-icon_active')
    } 
  } // лайк
  
  
  
  
  const deleteCard = (evt) => {
    if (evt.target.classList.contains('card__delete-button')) {
      evt.target.closest('.card').remove();
    }
  }// удаление карточки
  
  cardsContainer.addEventListener ('click', (evt) => {
    toggleLike(evt);
    openphotoPopup(evt);
    deleteCard(evt);

  }) // обработчик действий с карточками
  