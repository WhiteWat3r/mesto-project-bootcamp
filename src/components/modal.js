const addBtn = document.querySelector('.profile__add-button'); 
const editBtn = document.querySelector('.profile__edit-button');

import {
    addCardPopup,
    profilePopup,
    photoPopup,
    imagePhotoPopup,
    namePhotoPopup,
    nameInputProfile,
    descriptionInputProfile,
    profileName,
    profileDescription
} from "./index.js";




export const openPopup = (popup) => {
      popup.classList.add('popup_opened');
      document.addEventListener('keydown', closeByEsc)
  }
  
export const closePopup = (popup) => {
      popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', closeByEsc)
  }


export const closeByEsc = (evt) => {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
  } // функция закрытия на Esc



export const openphotoPopup = (evt) => {
    if (evt.target.classList.contains('card__image')) {
      imagePhotoPopup.src = evt.target.src;
      openPopup(photoPopup);
      namePhotoPopup.textContent = evt.target.nextElementSibling.querySelector('.card__name').textContent;
    }
  }  // открытие попапа с картинкой 
  


  addBtn.addEventListener('click', () => openPopup(addCardPopup));

  editBtn.addEventListener('click', () => {
      openPopup(profilePopup)
      nameInputProfile.value = profileName.textContent;
      descriptionInputProfile.value = profileDescription.textContent; 
  });
  
  
  
  const closeButtonList = document.querySelectorAll('.popup__close')
  closeButtonList.forEach((button) => {
    button.addEventListener('click', () => closePopup(button.parentNode.parentNode));
  })

  const closePopupOnOutsideClick = () => {
    const popupList = Array.from(document.querySelectorAll('.popup'))
    popupList.forEach((popup) => {
      popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup')) {
          popup.classList.remove('popup_opened')
        }
      })
    })
  
  } // закрытие попапов нажатием на оверлей
  closePopupOnOutsideClick()
  