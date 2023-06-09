import "./../pages/index.css";

import { createCard, cardsContainer } from "./card.js";
import { closePopup, openPopup, openPhotoPopup } from "./modal.js";
import { enableValidation } from "./validation.js";
import {
  updateAvatar,
  getProfileInfo,
  addCard,
  changeProfileInfo
} from "./api.js";
import { renderLoading, saveMyId} from "./utils.js";



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






getProfileInfo()
.then((res) => {
  if (res.ok) {
    return res.json()
  } 
  return Promise.reject(`Ошибка: ${res.status}`);
})
.then((data) => {
  profileName.textContent = data.name;
  profileDescription.textContent = data.about;
  avatar.src = data.avatar;
  saveMyId(data._id);
})
.catch((err) => {
  console.log(err);
});







addBtn.addEventListener("click", () => openPopup(addCardPopup));

editBtn.addEventListener("click", () => {
  openPopup(profilePopup);
  nameInputProfile.value = profileName.textContent;
  descriptionInputProfile.value = profileDescription.textContent;
});





const handleAddFormSubmit = (evt) => {
  evt.preventDefault();
  renderLoading(true, submitAddCardButton, "Создание...", "Создать");

  addCard(nameInputAddCard, inputAddLink)
  .then((res) => {
		if (res.ok) {
			return res.json()
		} 
		return Promise.reject(`Ошибка: ${res.status}`);
	})
    .then((data) => {
      const cardElement = createCard(
        data.name,
        data.name,
        data.link,
        data._id,
        data.owner._id,
        data.likes.length
      );
      cardsContainer.prepend(cardElement);
      formAddCart.reset();
      closePopup(addCardPopup);
    })
    .catch((err) => {
      console.log(err);
    })
		.finally(() => {
			renderLoading(false, submitAddCardButton, 'Создание...', 'Создать')
		})
}; // обработчик вставки карточек пользователем

formAddCart.addEventListener("submit", handleAddFormSubmit);




const handleEditFormSubmit = (evt) => {
  evt.preventDefault();
  renderLoading(true, submitProfileButton, "Сохранение...", "Сохранить");

  changeProfileInfo(nameInputProfile, descriptionInputProfile)
  .then((res) => {
    if (res.ok) {
      return res.json()
    } else 
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then((data) => {
    profileName.textContent = data.name;
    profileDescription.textContent = data.about;
    closePopup(profilePopup);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false, submitProfileButton, 'Сохранение...', 'Сохранить')
  })
}; //  изменениe имени/информации о профиле

formProfile.addEventListener("submit", handleEditFormSubmit);





const handleAvatarFormSubmit = (evt) => {
  evt.preventDefault();
  renderLoading(true, submitAvatarButton, "Сохранение...", "Сохранить");
  updateAvatar(inputAvatarLink);
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
  submitProfileButton
};
