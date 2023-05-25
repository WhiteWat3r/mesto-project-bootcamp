const main = document.querySelector('.main');
const editBtn = main.querySelector('.profile__edit-button')
const profileName = main.querySelector('.profile__name');
const profileDescription = main.querySelector('.profile__description');
const addBtn = main.querySelector('.profile__add-button'); 
const cardsContainer = main.querySelector('.cards')
const cards = main.querySelectorAll('.card')

const popupContainer = document.querySelector('.popup__container')



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



  const handleAddFormSubmit = (evt) => {
    evt.preventDefault();

    const card = {
      name: nameInputAddCard.value,
      link: inputAddLink.value
    };

    const cardElement = createCard(card, false);
    cardsContainer.prepend(cardElement);
    nameInputAddCard.value = '';
    inputAddLink.value= '';
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
} // функция изменение имени/информации о профиле

formProfile.addEventListener('submit', handleEditFormSubmit);














cardsContainer.addEventListener ('click', (evt) => {
  if (evt.target.classList.contains('card__like-icon')) {
    evt.target.classList.toggle('card__like-icon_active')
  }

 if (evt.target.classList.contains('card__image')) {
    imagePhotoPopup.src = evt.target.src;
    photoPopup.classList.add('popup_opened');
    namePhotoPopup.textContent = evt.target.nextElementSibling.querySelector('.card__name').textContent;
  } 

  if (evt.target.classList.contains('card__delete-button')) {
    evt.target.closest('.card').remove();
  }
}) // обработчик нажатия на лайк






photoPopup.addEventListener('click', (evt) => {
  if (!evt.target.classList.contains('popup__image')) {
    photoPopup.classList.remove('popup_opened')
  } else {
    console.log(evt.target);
  }

})  //закрытие попапа С картинками



