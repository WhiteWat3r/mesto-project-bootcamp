const main = document.querySelector('.main');
const editBtn = main.querySelector('.profile__edit-button')
const profileName = main.querySelector('.profile__name');
const profileDescription = main.querySelector('.profile__description');
const addBtn = main.querySelector('.profile__add-button'); ///
const cardImage = main.querySelectorAll('.card__image') ///
const cardName = main.querySelectorAll('.card__name') ///
const cardsContainer = main.querySelector('.cards')
const cards = main.querySelectorAll('.card')
const cardLikeBtn = main.querySelector('.card__like-icon') ///
const cardLikeBtns = main.querySelectorAll('.card__like-icon') ///
const cartDeleteBtn = cardsContainer.querySelectorAll('.card__delete-button') ///



const profilePopup  = document.querySelector('.popup_type_edit');
const buttonCloseProfilePopup = profilePopup.querySelector('.popup__close');
const nameInputProfile = profilePopup.querySelector('.form__input_value_name');
const descriptionInputProfile = profilePopup.querySelector('.form__input_value_description');
const formProfile = profilePopup.querySelector('.form');
// const buttonSubmitformProfile = profilePopup.querySelector('.form__submit-button');


const addCardPopup = document.querySelector('.popup_type_add');
const buttonCloseAddCardPopup = addCardPopup.querySelector('.popup__close');
const nameInputAddCard = addCardPopup.querySelector('.form__input_value_name-photo');
const inputAddLink = addCardPopup.querySelector('.form__input_value_link');
const formAddCart = addCardPopup.querySelector('.form');
// const buttonSubmitFormAddCart = addCardPopup.querySelector('.form__submit-button');


const photoPopup = document.querySelector('.popup_type_image');
const buttonClosePhotoPopup = photoPopup.querySelector('.popup__close_type_image')
const imagePhotoPopup = photoPopup.querySelector('.popup__image')
const namePhotoPopup = photoPopup.querySelector('.popup__name')









const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; // Массив с карточками

  





  function createCardFromArray(card) {
    
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardName = cardElement.querySelector('.card__name');
    const cardLikeBtn = cardElement.querySelector('.card__like-icon')
    const btnDeleteCard = cardElement.querySelector('.card__delete-button')



    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardName.textContent = card.name;
  
    cardLikeBtn.addEventListener ('click', () => {
        if (cardLikeBtn.classList.contains('card__like-icon_active')) {
            cardLikeBtn.classList.remove('card__like-icon_active');
        } else {
            cardLikeBtn.classList.add('card__like-icon_active');
        }
    })

    cardImage.addEventListener('click', () => {
        imagePhotoPopup.src = cardImage.src;
        photoPopup.classList.add('popup_opened');
        namePhotoPopup.textContent = cardName[cardImage].textContent;
    })

    btnDeleteCard.addEventListener('click', (evt) => {
        const eventTarget = evt.target;
        eventTarget.closest('.card').remove();
    })




    return cardElement;
  } //создание карточек из массива
  


  initialCards.forEach((card) => {
    const cardElement = createCardFromArray(card);
    cardsContainer.append(cardElement);
  });















  function createCard() {
    
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardName = cardElement.querySelector('.card__name');
    const cardLikeBtn = cardElement.querySelector('.card__like-icon')
    const btnDeleteCard = cardElement.querySelector('.card__delete-button')



    cardImage.src = nameInputAddCard.value;
    // cardImage.alt = inputAddLink.value;
    cardName.textContent = inputAddLink.value;
  
    cardLikeBtn.addEventListener ('click', () => {
        if (cardLikeBtn.classList.contains('card__like-icon_active')) {
            cardLikeBtn.classList.remove('card__like-icon_active');
        } else {
            cardLikeBtn.classList.add('card__like-icon_active');
        }
    })

    cardImage.addEventListener('click', () => {
        imagePhotoPopup.src = cardImage.src;
        photoPopup.classList.add('popup_opened');
        namePhotoPopup.textContent = cardName[cardImage].textContent;
    })

    btnDeleteCard.addEventListener('click', (evt) => {
        const eventTarget = evt.target;
        eventTarget.closest('.card').remove();
    })




    return cardElement;
  } //создание карточек пользователем
  



  const handleAddFormSubmit = (evt) => {
    evt.preventDefault();

    const cardElement = createCard();
    cardsContainer.prepend(cardElement);
    nameInputAddCard.value = ''
    inputAddLink.value= ''
    closePopup(addCardPopup);
}; 

formAddCart.addEventListener('submit', handleAddFormSubmit); 





























































const openPopup = (popup) => {
    popup.classList.add('popup_opened');
}

const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
}



addBtn.addEventListener('click', () => openPopup(addCardPopup));
buttonCloseAddCardPopup.addEventListener('click', () => closePopup(addCardPopup));
editBtn.addEventListener('click', () => {
    openPopup(profilePopup)
    nameInputProfile.value = profileName.textContent;
    descriptionInputProfile.value = profileDescription.textContent; 
});
buttonCloseProfilePopup.addEventListener('click', () => closePopup(profilePopup));










const handleEditFormSubmit = (evt) => {
    evt.preventDefault();
    profileName.textContent =  nameInputProfile.value;
    profileDescription.textContent = descriptionInputProfile.value;
    
    closePopup(profilePopup);
} // Изменение имени/информации о профиле

formProfile.addEventListener('submit', handleEditFormSubmit);





















buttonClosePhotoPopup.addEventListener('click', () => {
    photoPopup.classList.remove('popup_opened');
}) //открытие/закрытие попапа С картинками
