import {
    photoPopup,
    imagePhotoPopup,
    namePhotoPopup
} from "./index.js";




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



const openPhotoPopup = (evt) => {
    if (evt.target.classList.contains('card__image')) {
      imagePhotoPopup.src = evt.target.src;
      openPopup(photoPopup);
      namePhotoPopup.textContent = evt.target.closest('.card').querySelector('.card__name').textContent;
    }
  }  // открытие попапа с картинкой 
  


  



  


export {
  openPopup,
  closePopup,
  openPhotoPopup
}