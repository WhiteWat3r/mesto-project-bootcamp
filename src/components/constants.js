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


const cardsContainer = document.querySelector(".cards");
const confirmPopup = document.querySelector('.popup_type_remove');
const confirmButton = confirmPopup.querySelector('.form__submit-button');
const formConfirm = document.forms.remove;



const validationSettings = {
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__submit-button",
    inactiveButtonClass: "form__submit-button_disabled",
    inputErrorClass: "form__input_invalid",
  };


  const config = {
    baseUrl: "https://nomoreparties.co/v1/wbf-cohort-9",
    headers: {
      authorization: "fb3ed4f1-761c-46fd-9604-b420f9ed1295",
      "Content-Type": "application/json",
    },
  };
  
















export {
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
    photoPopup,
    buttonClosePhotoPopup,
    imagePhotoPopup,
    namePhotoPopup,
    profileEditAvatar,
    avatarPopup,
    formAvatar,
    inputAvatarLink,
    avatar,
    submitAvatarButton,
    submitAddCardButton,
    submitProfileButton,
    validationSettings,
    addBtn,
    editBtn,
    config,
    cardsContainer,
    confirmPopup,
    confirmButton,
    formConfirm
  };
  