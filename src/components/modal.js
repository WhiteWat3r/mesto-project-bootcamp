import {
    photoPopup,
    imagePhotoPopup,
    namePhotoPopup
} from "./constants.js";




const openPopup = (popup) => {
      popup.classList.add('popup_opened');
      document.addEventListener('keydown', closeByEsc)
  }
  
const closePopup = (popup) => {
      popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', closeByEsc)
}


const closeByEsc = (evt) => {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
  } // функция закрытия на Esc



const openPhotoPopup = (cardName, src) => {
      imagePhotoPopup.src = src;
      imagePhotoPopup.alt = cardName;
      namePhotoPopup.textContent = cardName;
      openPopup(photoPopup);
  }  // открытие попапа с картинкой 
  


  



  


export {
  openPopup,
  closePopup,
  openPhotoPopup
}