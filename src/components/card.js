
import {deleteCard, toggleLike} from "./api.js";
import {closePopup, openPopup} from "./modal.js";
import {handleSubmit} from "./utils.js"
import {myId, validationSettings} from "./index.js"
import {enableButton} from "./validation.js"

const cardsContainer = document.querySelector(".cards");
const confirmPopup = document.querySelector('.popup_type_remove')
const confirmButton = confirmPopup.querySelector('.form__submit-button')
const formConfirm = document.forms.remove


function createCard(card, userId, isLiked) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.cloneNode(true);
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



  deleteButton.addEventListener("click", (evt) => {
    const deleteButtonTarget = evt.target
    const handleConfirmDelete = (evt) => {
        if(!confirmPopup.classList.contains('popup_opened') || (evt.key === "Escape")) {
          confirmPopup.removeEventListener('click', handleConfirmDelete);
          document.removeEventListener('keydown', handleConfirmDelete);
          formConfirm.removeEventListener("submit", handleFormSubmit);
        }
    };

    
    const handleFormSubmit = (evt) => {
      const makeRequest = () => {
        return deleteCard(card._id)
        .then(() => {
          deleteButtonTarget.closest('.card').remove();
          closePopup(confirmPopup)
        })
      }
      handleSubmit(makeRequest, evt, 'Удаление...')
    };


    openPopup(confirmPopup)
    confirmPopup.addEventListener('click', handleConfirmDelete);
    document.addEventListener('keydown', handleConfirmDelete);
    formConfirm.addEventListener("submit", handleFormSubmit);
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

  return cardElement;
} //функция создания карточек




export {cardsContainer, createCard};


