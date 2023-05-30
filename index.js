const main = document.querySelector('.main');
const editBtn = main.querySelector('.profile__edit-button')
const profileName = main.querySelector('.profile__name');
const profileDescription = main.querySelector('.profile__description');
const addBtn = main.querySelector('.profile__add-button'); 
const cardsContainer = main.querySelector('.cards');
const cards = main.querySelectorAll('.card');

const popupContainer = document.querySelector('.popup__container');

const profilePopup  = document.querySelector('.popup_type_edit');
const formProfile = document.forms.edit;
const nameInputProfile = formProfile.elements.name;
const descriptionInputProfile = formProfile.elements.description;
const submitEditButton = profilePopup.querySelector('.form__submit-button')
const buttonCloseProfilePopup = profilePopup.querySelector('.popup__close');


const addCardPopup = document.querySelector('.popup_type_add');
const formAddCart = document.forms.add;
const nameInputAddCard = formAddCart.name;
const inputAddLink = formAddCart.link;
const submitAddButton = addCardPopup.querySelector('.form__submit-button')
const buttonCloseAddCardPopup = addCardPopup.querySelector('.popup__close');


const photoPopup = document.querySelector('.popup_type_image');
const buttonClosePhotoPopup = photoPopup.querySelector('.popup__close_type_image');
const imagePhotoPopup = photoPopup.querySelector('.popup__image');
const namePhotoPopup = photoPopup.querySelector('.popup__name');


  function createCard(card, isFromInitialCards) {
    // isFromInitialCards определяем, откуда мы берем карточки
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardName = cardElement.querySelector('.card__name');

    cardImage.src = card.link;
    cardName.textContent = card.name;

    if (!isFromInitialCards) {
      cardName.textContent = nameInputAddCard.value;
      cardImage.src = inputAddLink.value;
    }

    return cardElement;
  } //функция создания карточек
  

  initialCards.forEach((card) => {
    const cardElement = createCard(card, true);
    cardsContainer.append(cardElement);
  }); // проходимся по массиву и создаем карточки





function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
} // функция закрытия на Esc



const openPopup = (popup) => {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc)
}

const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc)
}



addBtn.addEventListener('click', () => openPopup(addCardPopup));

buttonCloseAddCardPopup.addEventListener('click', () => closePopup(addCardPopup));

editBtn.addEventListener('click', () => {
    openPopup(profilePopup)
    nameInputProfile.value = profileName.textContent;
    descriptionInputProfile.value = profileDescription.textContent; 
});

buttonCloseProfilePopup.addEventListener('click', () => closePopup(profilePopup));

buttonClosePhotoPopup.addEventListener('click', () => closePopup(photoPopup));
// Слушатели открытия/закрытия попапов

const toggleLike = (evt) => {
  if (evt.target.classList.contains('card__like-icon')) {
    evt.target.classList.toggle('card__like-icon_active')
  } 
} // лайк



const openphotoPopup = (evt) => {
  if (evt.target.classList.contains('card__image')) {
    imagePhotoPopup.src = evt.target.src;
    openPopup(photoPopup);
    namePhotoPopup.textContent = evt.target.nextElementSibling.querySelector('.card__name').textContent;
  }
}  // открытие попапа с картинкой 

const deleteCard = (evt) => {
  if (evt.target.classList.contains('card__delete-button')) {
    evt.target.closest('.card').remove();
  }
}// удаление карточки

cardsContainer.addEventListener ('click', (evt) => {
  toggleLike(evt);
  openphotoPopup(evt);
  deleteCard(evt);

}) // обработчик действий с карточками



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





  // enableValidation({
  //   formSelector: '.popup__form',
  //   inputSelector: '.popup__input',
  //   submitButtonSelector: '.popup__button',
  //   inactiveButtonClass: 'popup__button_disabled',
  //   inputErrorClass: 'popup__input_type_error',
  //   errorClass: 'popup__error_visible'
  // }); 