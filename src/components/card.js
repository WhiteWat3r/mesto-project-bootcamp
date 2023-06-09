
import {deleteCard, getCards, toggleLike, getProfileInfo} from "./api.js";
import {closePopup, openPopup} from "./modal.js";
import {renderLoading} from "./utils.js"

const cardsContainer = document.querySelector(".cards");
const myId = localStorage.getItem("userId");

const confirmPopup = document.querySelector('.popup_type_remove')
const confirmButton = confirmPopup.querySelector('.form__submit-button')



getCards()
.then((res) => {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка: ${res.status}`);
})
.then((data) => {
  console.log(data);
  data.forEach((card) => {
    const likes = card.likes.length

    const isLiked = card.likes.some((like) => {
      return like._id === myId
    }) // проход по массиву с лайками для получения инфомрации о том, есть там мой лайк

    const cardElement = createCard(card.name, card.name, card.link, card._id, card.owner._id, likes, isLiked)
    cardsContainer.append(cardElement);
  })
})
.catch((err) => {
  console.log(err); 
}); 



function createCard(name, alt, link, cardId, ownerId, likess, isLiked) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardName = cardElement.querySelector(".card__name");
  const likeButton = cardElement.querySelector(".card__like-icon");
  const likeCount = cardElement.querySelector(".card__like-count");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  likeCount.textContent = likess;
  cardImage.src = link;
  cardName.textContent = name;
  cardImage.alt = alt;

  // проверка на авторство
  if (ownerId === myId) {
    deleteButton.addEventListener("click", (oldEvt) => {
      openPopup(confirmPopup)
      confirmButton.addEventListener('click', (evt) => {
        renderLoading(true, confirmButton, 'Удаление...', 'Да')
        deleteCard(cardId)
        .then(res => {
          if (res.ok) {
            console.log('успех');
            oldEvt.target.closest('.card').remove();
          } else {
            return Promise.reject(`Ошибка: ${res.status}`);
          }
        })
        .catch(err => {
          console.log(err);       
        })
        .finally(() => {
          closePopup(confirmPopup)
          renderLoading(false, confirmButton, 'Удаление...', 'Да')
        });
      })
    });
  } else {
    deleteButton.remove(); // если нет, кнопки удаления не будет
  }

  isLiked && likeButton.classList.add("card__like-icon_active"); // Если карточка мной лайкнута, то отображаю 

  likeButton.addEventListener("click", (evt) => {
    toggleLike(evt, cardId, likeCount);
  });

  return cardElement;
} //функция создания карточек


export {cardsContainer, createCard, myId };


