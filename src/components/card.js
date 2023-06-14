import {
  deleteCard,
  toggleLike
} from "./api.js";

import {
  closePopup,
  openPopup,
  openPhotoPopup
} from "./modal.js";

import {handleSubmit} from "./utils.js"

import {
  validationSettings, 
  cardsContainer,
  confirmPopup,
  confirmButton,
  formConfirm
} from "./constants.js"

import {enableButton} from "./validation.js"





function createCard(card, userId, isLiked) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.cloneNode(true).querySelector('.card');
  const cardImage = cardElement.querySelector(".card__image");
  const cardName = cardElement.querySelector(".card__name");
  const likeButton = cardElement.querySelector(".card__like-icon");
  const likeCount = cardElement.querySelector(".card__like-count");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  likeCount.textContent = card.likes.length;
  cardImage.src = card.link;
  cardName.textContent = card.name;
  cardImage.alt = card.name;




  if (card.owner._id !== userId) {
    deleteButton.remove(); 
  }




  deleteButton.addEventListener("click", () => {

    const togleAllListeners = (status) => {
      if (status === "remove") {
        formConfirm.removeEventListener("submit", handleFormSubmit);
        confirmPopup.removeEventListener('click', handleRefuseDelete);
        document.removeEventListener('keydown', handleRefuseDelete);
      } else {
        formConfirm.addEventListener("submit", handleFormSubmit);
        confirmPopup.addEventListener('click', handleRefuseDelete);
        document.addEventListener('keydown', handleRefuseDelete);
      }
    }

    const handleRefuseDelete = (evt) => {
        if(!confirmPopup.classList.contains('popup_opened') || (evt.key === "Escape")) {
          togleAllListeners('remove')
        }
    };

    const handleFormSubmit = (evt) => {
      const makeRequest = () => {
        return deleteCard(card._id)
        .then(() => {
          togleAllListeners('remove')
          cardElement.remove();
          closePopup(confirmPopup);
        })
      }
      
      handleSubmit(makeRequest, evt, 'Удаление...');
    };

    openPopup(confirmPopup)
    togleAllListeners('add')
    enableButton(confirmButton, validationSettings)
});





  isLiked && likeButton.classList.add("card__like-icon_active"); 

  likeButton.addEventListener("click", (evt) => {
    const method = evt.target.classList.contains("card__like-icon_active") ? 'DELETE' : 'PUT';
    toggleLike(method, card._id)
    .then(data => {
      likeCount.textContent = data.likes.length;
      evt.target.classList.toggle('card__like-icon_active');
    })
    .catch(err => {
      console.log(err);       
    });
  });



  cardImage.addEventListener("click", () => openPhotoPopup(cardName.textContent, cardImage.src));





  return cardElement;
}




export {cardsContainer, createCard};