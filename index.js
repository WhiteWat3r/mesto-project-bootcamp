const main = document.querySelector('.main');
export const profileName = main.querySelector('.profile__name');
export const profileDescription = main.querySelector('.profile__description');
export const cardsContainer = main.querySelector('.cards');

export const profilePopup  = document.querySelector('.popup_type_edit');
export const formProfile = document.forms.edit;
export const nameInputProfile = formProfile.elements.name;
export const descriptionInputProfile = formProfile.elements.description;


export const addCardPopup = document.querySelector('.popup_type_add');
export const formAddCart = document.forms.add;
export const nameInputAddCard = formAddCart.name;
export const inputAddLink = formAddCart.link;


export const photoPopup = document.querySelector('.popup_type_image');
export const buttonClosePhotoPopup = photoPopup.querySelector('.popup__close_type_image');
export const imagePhotoPopup = photoPopup.querySelector('.popup__image');
export const namePhotoPopup = photoPopup.querySelector('.popup__name');


