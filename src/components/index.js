
import './../pages/index.css';






const main = document.querySelector('.main');
const profileName = main.querySelector('.profile__name');
const profileDescription = main.querySelector('.profile__description');

const profilePopup  = document.querySelector('.popup_type_edit');
const formProfile = document.forms.edit;
const nameInputProfile = formProfile.elements.name;
const descriptionInputProfile = formProfile.elements.description;


const addCardPopup = document.querySelector('.popup_type_add');
const formAddCart = document.forms.add;
const nameInputAddCard = formAddCart.name;
const inputAddLink = formAddCart.link;


const photoPopup = document.querySelector('.popup_type_image');
const buttonClosePhotoPopup = photoPopup.querySelector('.popup__close_type_image');
const imagePhotoPopup = photoPopup.querySelector('.popup__image');
const namePhotoPopup = photoPopup.querySelector('.popup__name');


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
  namePhotoPopup
}

import {createCard, cardsContainer} from './card.js';
import {closePopup} from './modal.js'
import {enableValidation} from './validation.js'



const handleAddFormSubmit = (evt) => {
    evt.preventDefault();
  
    const card = {
      name: nameInputAddCard.value,
      link: inputAddLink.value
    };
  
    const cardElement = createCard(card, false);
    cardsContainer.prepend(cardElement);
  
    formAddCart.reset();
    
    closePopup(addCardPopup);
  }; // обработчик вставки карточек пользователем
  
  formAddCart.addEventListener('submit', handleAddFormSubmit); 
  
  
  const handleEditFormSubmit = (evt) => {
    evt.preventDefault();
    profileName.textContent =  nameInputProfile.value;
    profileDescription.textContent = descriptionInputProfile.value;
    
    closePopup(profilePopup);
  } //  изменениe имени/информации о профиле
  
  formProfile.addEventListener('submit', handleEditFormSubmit);



const validationSettings = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
    inactiveButtonClass: 'form__submit-button_disabled',
    inputErrorClass: 'form__input_invalid'
  }; 
  
enableValidation(validationSettings);
  

