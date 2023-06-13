import "./../pages/index.css";

import { createCard, cardsContainer } from "./card.js";
import { closePopup, openPopup, openPhotoPopup } from "./modal.js";
import { enableValidation } from "./validation.js";
import {
  updateAvatar,
  getProfileInfo,
  addCard,
  changeProfileInfo,
  getCards
} from "./api.js";
import {changeAvatar, handleSubmit} from "./utils.js";


const addBtn = document.querySelector(".profile__add-button");
const editBtn = document.querySelector(".profile__edit-button");

const main = document.querySelector(".main");
const profileName = main.querySelector(".profile__name");
const profileDescription = main.querySelector(".profile__description");
const profileEditAvatar = document.querySelector(".profile__avatar-edit");

const avatar = document.querySelector(".profile__image");

const profilePopup = document.querySelector(".popup_type_edit");
const formProfile = document.forms.edit;
const nameInputProfile = formProfile.elements.name;
const descriptionInputProfile = formProfile.elements.description;
const submitProfileButton = formProfile.submit;

const addCardPopup = document.querySelector(".popup_type_add");
const formAddCart = document.forms.add;
const nameInputAddCard = formAddCart.name;
const inputAddLink = formAddCart.link;
const submitAddCardButton = formAddCart.submit;

const avatarPopup = document.querySelector(".popup_type_avatar");
const formAvatar = document.forms.avatar;
const inputAvatarLink = formAvatar.querySelector(".form__input_value_link");
const submitAvatarButton = formAvatar.submit;

const photoPopup = document.querySelector(".popup_type_image");
const buttonClosePhotoPopup = photoPopup.querySelector(".popup__close_type_image");
const imagePhotoPopup = photoPopup.querySelector(".popup__image");
const namePhotoPopup = photoPopup.querySelector(".popup__name");



Promise.all([getProfileInfo(), getCards()])
  .then(([profileData, cardsData]) => {
    profileName.textContent = profileData.name;
    profileDescription.textContent = profileData.about;
    avatar.src = profileData.avatar;
    const myId = profileData._id

    cardsData.forEach((card) => {
      const isLiked = card.likes.some((like) => {
        return like._id === myId;
      });
      const cardElement = createCard(card, myId, isLiked);
      cardsContainer.append(cardElement);
    });
  })
  .catch((err) => {
    console.log(err);
  });









  const handleAddFormSubmit = (evt) => {

    const makeRequest = () => {
      return Promise.all([getProfileInfo(), addCard(nameInputAddCard, inputAddLink)])
      .then(([profileData, card]) => {
        const myId = profileData._id

        const cardElement = createCard(card, myId);
        cardsContainer.prepend(cardElement);
        formAddCart.reset();
        closePopup(addCardPopup);
      })
    }
  
    handleSubmit(makeRequest, evt, 'Создание...')
  };
  formAddCart.addEventListener("submit", handleAddFormSubmit);






  const handleEditFormSubmit = (evt) => {

    const makeRequest = () => {
      return changeProfileInfo(nameInputProfile, descriptionInputProfile)
      .then((data) => {
        profileName.textContent = data.name;
        profileDescription.textContent = data.about;
        closePopup(profilePopup);
      })
    }
    handleSubmit(makeRequest, evt)
  }; //  изменениe имени/информации о профиле
  
  formProfile.addEventListener("submit", handleEditFormSubmit);
  






addBtn.addEventListener("click", () => openPopup(addCardPopup));

editBtn.addEventListener("click", () => {
  openPopup(profilePopup);
  nameInputProfile.value = profileName.textContent;
  descriptionInputProfile.value = profileDescription.textContent;
});





const handleAvatarFormSubmit = (evt) => {

  const makeRequest = () => {
  return updateAvatar(inputAvatarLink)
    .then((data) => {
        console.log(data);
        changeAvatar(inputAvatarLink.value);
        closePopup(avatarPopup);
      })
  }

  handleSubmit(makeRequest, evt, 'Создание...')
}; //  изменениe имени/информации о профиле

formAvatar.addEventListener("submit", handleAvatarFormSubmit);



const validationSettings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_disabled",
  inputErrorClass: "form__input_invalid",
};

enableValidation(validationSettings);




const setEventListenersOnPopups = () => {
  const popups = document.querySelectorAll(".popup");
  popups.forEach((popup) => {
    popup.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("popup_opened") ||
        evt.target.classList.contains("popup__close")
      ) {
        closePopup(popup);
      }
    });
  });
};

setEventListenersOnPopups();

profileEditAvatar.addEventListener("click", () => openPopup(avatarPopup));

cardsContainer.addEventListener("click", (evt) => openPhotoPopup(evt));












export {
  profileName,
  profileDescription,
  cardsContainer,
  profilePopup,
  formProfile,
  nameInputProfile,
  descriptionInputProfile,
  addCardPopup,
  formAddCart,
  nameInputAddCard,
  inputAddLink,
  photoPopup,
  buttonClosePhotoPopup,
  imagePhotoPopup,
  namePhotoPopup,
  profileEditAvatar,
  avatarPopup,
  inputAvatarLink,
  avatar,
  submitAvatarButton,
  submitAddCardButton,
  submitProfileButton,
  validationSettings
};
