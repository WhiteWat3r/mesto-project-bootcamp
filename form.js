
import {formProfile,
    formAddCart,
    nameInputAddCard,
    profileName,
    nameInputProfile,
    profileDescription,
    descriptionInputProfile,
    profilePopup,
    inputAddLink,
    cardsContainer,
    addCardPopup
} from './index.js'
import {createCard} from './card.js';
import {closePopup} from './popupActions.js'


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