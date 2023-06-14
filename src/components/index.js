import "./../pages/index.css";

import {
  createCard,
  cardsContainer
}from "./card.js";

import {
  closePopup,
  openPopup,
  openPhotoPopup
} from "./modal.js";

import {enableValidation} from "./validation.js";

import {
  updateAvatar,
  getProfileInfo,
  addCard,
  changeProfileInfo,
  getCards
} from "./api.js";

import {
  changeAvatar,
  handleSubmit
} from "./utils.js";

import {
  profileName,
  profileDescription,
  profilePopup,
  formProfile,
  nameInputProfile,
  descriptionInputProfile,
  addCardPopup,
  formAddCart,
  nameInputAddCard,
  inputAddLink,
  profileEditAvatar,
  formAvatar,
  avatarPopup,
  inputAvatarLink,
  avatar,
  validationSettings,
  addBtn,
  editBtn
} from "./constants.js"



let userId;



Promise.all([getProfileInfo(), getCards()])
  .then(([profileData, cardsData]) => {
    profileName.textContent = profileData.name;
    profileDescription.textContent = profileData.about;
    avatar.src = profileData.avatar;
    userId = profileData._id

    cardsData.forEach((card) => {
      const isLiked = card.likes.some((like) => {
        return like._id === userId;
      });
      const cardElement = createCard(card, userId, isLiked);
      cardsContainer.append(cardElement);
    });
  })
  .catch((err) => {
    console.log(err);
  });









  const handleAddFormSubmit = (evt) => {

    const makeRequest = () => {
      return addCard(nameInputAddCard, inputAddLink)
      .then((card) => {
        const cardElement = createCard(card, userId);
        cardsContainer.prepend(cardElement);
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
    .then(() => {
        changeAvatar(inputAvatarLink.value);
        closePopup(avatarPopup);
      })
  }

  handleSubmit(makeRequest, evt, 'Создание...')
}; //  изменениe имени/информации о профиле

formAvatar.addEventListener("submit", handleAvatarFormSubmit);


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
  profileEditAvatar,
  avatarPopup,
  inputAvatarLink,
  avatar,
  validationSettings
};
