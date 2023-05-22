const main = document.querySelector('.main');
const editBtn = main.querySelector('.profile__edit-button')
const profileName = main.querySelector('.profile__name');
const profileDescription = main.querySelector('.profile__description');
const addBtn = main.querySelector('.profile__add-button');
const cardImage = main.querySelectorAll('.card__image')
const cardName = main.querySelectorAll('.card__name')
const cardsContainer = main.querySelector('.cards')
const cards = main.querySelectorAll('.card')
const cardLikeBtn = main.querySelector('.card__like-icon')
const cardLikeBtns = main.querySelectorAll('.card__like-icon')
const cartDeleteBtn = cardsContainer.querySelectorAll('.card__delete-button')

const editPopup = document.querySelector('.popup_type_edit');
const closeEditBtn = editPopup.querySelector('.popup__close');
const inputEditName = editPopup.querySelector('.form__input_value_name');
const inputEditDescription = editPopup.querySelector('.form__input_value_description');
const formEditElement = editPopup.querySelector('.form');
const submitEditBtn = editPopup.querySelector('.form__submit-button');


const addPopup = document.querySelector('.popup_type_add');
const closeAddBtn = addPopup.querySelector('.popup__close');
const inputAddNamePhoto = addPopup.querySelector('.form__input_value_name-photo');
const inputAddLink = addPopup.querySelector('.form__input_value_link');
const formAddElement = addPopup.querySelector('.form');
const submitAddBtn = addPopup.querySelector('.form__submit-button');


const imagePopup = document.querySelector('.popup_type_image');
const popupCloseBtn = imagePopup.querySelector('.popup__close_type_image')
const imagePopupPhoto = imagePopup.querySelector('.popup__image')
const imagePopupName = imagePopup.querySelector('.popup__name')



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

  
const createCards = () => {
    initialCards.forEach((item, index) => {
        cardImage[index].src = item.link;
        cardName[index].textContent = item.name;
    });
} // Созданию карточек из массива
createCards()


const changeInputValue = () => {
    inputEditName.value = profileName.textContent;
    inputEditDescription.value = profileDescription.textContent; 
}
changeInputValue() // "При открытии формы поля «Имя» и «О себе» должны быть заполнены теми значениями, которые отображаются на странице."











const togglePopup = (popup) => {
    popup.classList.toggle('popup_opened');
}// открытие/закрытие попапов

addBtn.addEventListener('click', () => togglePopup(addPopup));
closeAddBtn.addEventListener('click', () => togglePopup(addPopup));
editBtn.addEventListener('click', () => togglePopup(editPopup));
closeEditBtn.addEventListener('click', () => togglePopup(editPopup));










const handleEditFormSubmit = (evt) => {
    evt.preventDefault();
    profileName.textContent =  inputEditName.value;
    profileDescription.textContent = inputEditDescription.value;
    togglePopup(editPopup);
} // Изменение имени/информации о профиле

formEditElement.addEventListener('submit', handleEditFormSubmit);






const handleAddFormSubmit = (evt) => {
    evt.preventDefault();

    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__image').src = inputAddLink.value;
    cardElement.querySelector('.card__name').textContent = inputAddNamePhoto.value; // Добавление карточек
    // cardElement.querySelector('.card__image').alt = inputAddNamePhoto.value; // при добавлении alt, если указать неверно ссылку, карточка почему-то ломается 


    cardElement.querySelector('.card__like-icon').addEventListener('click', (evt) => {
      const eventTarget = evt.target
        if (eventTarget.classList.contains('card__like-icon_active')) {
            eventTarget.classList.remove('card__like-icon_active');
        } else {
            eventTarget.classList.add('card__like-icon_active');
        }
    }) // Лайк добавленных карточек

    cardElement.querySelector('.card__delete-button').addEventListener('click', (evt) => {
        const eventTarget = evt.target;
        // eventTarget.remove();
        eventTarget.closest('.card').remove();
    }) // Удаление добавленных карточек



    cardsContainer.prepend(cardElement);
    togglePopup(addPopup);
}; // Операции с добавленными карточками

formAddElement.addEventListener('submit', handleAddFormSubmit); 




cardLikeBtns.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('card__like-icon_active')) {
            item.classList.remove('card__like-icon_active');
        } else {
            item.classList.add('card__like-icon_active');
        }
    });
});// Лайк имеющихся карточек



cartDeleteBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
        cards[index].remove();
    });
}); // Удаление имеющихся карточек







cardImage.forEach((item, index) => {
    item.addEventListener('click', () => {
        imagePopupPhoto.src = item.src;
        imagePopup.classList.add('popup_opened');
        imagePopupName.textContent = cardName[index].textContent;
    })
    
})


popupCloseBtn.addEventListener('click', () => {
    imagePopup.classList.remove('popup_opened');
}) //открытие/закрытие попапа С картинками
