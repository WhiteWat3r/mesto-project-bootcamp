
import {deleteCard, toggleLike} from "./api.js";
import {closePopup, openPopup} from "./modal.js";
import {handleSubmit} from "./utils.js"
import {validationSettings} from "./index.js"
import {enableButton} from "./validation.js"

const cardsContainer = document.querySelector(".cards");
const confirmPopup = document.querySelector('.popup_type_remove')
const confirmButton = confirmPopup.querySelector('.form__submit-button')
const formConfirm = document.forms.remove


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
          console.log('очищаю, если отменил');
        }
    };

    
    const handleFormSubmit = (evt) => {
      const makeRequest = () => {
        return deleteCard(card._id)
        .then(() => {
          cardElement.remove();
          closePopup(confirmPopup)
        })
      }
      
      handleSubmit(makeRequest, evt, 'Удаление...')
      console.log('очищаю, если удалил');
      togleAllListeners('remove')
    };


    openPopup(confirmPopup)
    togleAllListeners('add')
    enableButton(confirmButton, validationSettings)


}); ///////////////////////////////////



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




export {cardsContainer, createCard };


// const cards = document.querySelector('.cards')
// cards.addEventListener('click', (evt) => {
//   const target = evt.target
//   let item = document.querySelector(`[data-id="${target.dataset.delete}"]`)
//   // console.log(item);
//   if (target.classList.contains('card__delete-button')) {
//     openPopup(confirmPopup)







//     const handleConfirmForm = (evt) => {
//       console.log(evt.target);
//       evt.preventDefault()
//       if (!evt.target.closest('.popup').classList.contains('popup_opened')) {
//         console.log('работает');
//         item = null
//         return false
//       } else if (evt.target.classList.contains('popup__confirm-button')) {
//        closePopup(confirmPopup) 
//        if (item) {
//           deleteCard(item.dataset.id)
//           .then(() => {
//             item.remove()
//             closePopup(confirmPopup)
//             confirmPopup.removeEventListener('click', handleConfirmForm)
//           })
//        }
//       }
//     }
//     confirmPopup.addEventListener('click', handleConfirmForm)



//   }
// })