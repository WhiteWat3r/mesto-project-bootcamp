const main = document.querySelector('.main');
const editBtn = main.querySelector('.profile__edit-button')
const profileName = main.querySelector('.profile__name');
const profileDescription = main.querySelector('.profile__description');
const addBtn = main.querySelector('.profile__add-button');
const cardImage = main.querySelectorAll('.card__image')
const cardName = main.querySelectorAll('.card__name')
const cards = main.querySelector('.cards')
const card = main.querySelectorAll('.card')
const cardLikeBtn = main.querySelector('.card__like-icon')
const cardLikeBtns = main.querySelectorAll('.card__like-icon')
const cartDeleteBtn = cards.querySelectorAll('.card__delete-button')

const editPopup = document.querySelector('.popup_type_edit'); // нигде не смогу найти инфу про то, как привльно называть переменные в такой ситуации :(
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
  ]; // Массив с картчоками

  
const createCards = () => {
    initialCards.forEach((item, index) => {
        cardImage[index].src = item.link;
        cardName[index].textContent = item.name;
    });
} // Функция по созданию карточек из массива
createCards()




inputEditName.value = profileName.textContent;
inputEditDescription.value = profileDescription.textContent;










editBtn.addEventListener('click', () => {
    editPopup.classList.add('popup_opened');
})

closeEditBtn.addEventListener('click', () => {
    editPopup.classList.remove('popup_opened');
})


const handleEditFormSubmit = (evt) => {
    evt.preventDefault();
    profileName.textContent =  inputEditName.value;
    profileDescription.textContent = inputEditDescription.value;
}

formEditElement.addEventListener('submit', handleEditFormSubmit);














addBtn.addEventListener('click', () => {
    addPopup.classList.add('popup_opened');
})



const closeAddPopup = () => {
    addPopup.classList.remove('popup_opened');

}


closeAddBtn.addEventListener('click', closeAddPopup);


const handleAddFormSubmit = (evt) => {
    evt.preventDefault();
    console.log('sdasdd');
    cards.insertAdjacentHTML('afterbegin', 
    `<li class="card">
        <img class="card__image" src="${inputAddLink.value}" alt="#">
        <div class="card__info">
            <h2 class="card__name">${inputAddNamePhoto.value}</h2>
            <button class="card__like-icon" aria-label="Нравится" type="button"></button>
        </div>
    </li>`);
    closeAddPopup();
}; // Добавление карточек

formAddElement.addEventListener('submit', handleAddFormSubmit); 







cardLikeBtns.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('card__like-icon_active')) {
            item.classList.remove('card__like-icon_active');
        } else {
            item.classList.add('card__like-icon_active');
        }
    });
});// Лайк карточек путем перебора массива элементов



cartDeleteBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
        card[index].remove();
    });
}); // Удаление карточек













console.log(cardName);

cardImage.forEach((item, index) => {
    item.addEventListener('click', () => {
        imagePopupPhoto.src = item.src
        imagePopup.classList.add('popup_opened')
        imagePopupName.textContent = cardName[index].textContent
    })
    
})


popupCloseBtn.addEventListener('click', () => {
    imagePopup.classList.remove('popup_opened');
})
