import {
  inputAvatarLink,
  avatarPopup,
  cardsContainer,
  formAddCart,
  addCardPopup,
  profileName,
  profileDescription,
  profilePopup,
} from "./index.js";

import { closePopup } from "./modal.js";
import { changeAvatar, saveMyId } from "./utils.js";
import { createCard, myId } from "./card.js";

const config = {
  baseUrl: "https://nomoreparties.co/v1/wbf-cohort-9",
  headers: {
    authorization: "fb3ed4f1-761c-46fd-9604-b420f9ed1295",
    "Content-Type": "application/json",
  },
};







function getCards() {
  fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((card) => {
        const likes = card.likes.length

       

        const isLiked = card.likes.some((like) => {
          return like._id === myId
        })

        const cardElement = createCard(card.name, card.name, card.link, card._id, card.owner._id, likes, isLiked)
        cardsContainer.append(cardElement);

      })
    }); 
}












const updateAvatar = (input) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: input.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      changeAvatar(input.value);
      closePopup(avatarPopup);
    })
    .catch((err) => {
      console.log(err);
    });
};



function getProfileInfo(name, description, avatar) {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  })
    .then((res) => res.json())
    .then((data) => {
      name.textContent = data.name;
      description.textContent = data.about;
      avatar.src = data.avatar;
      saveMyId(data._id);
    })
    .catch((err) => {
      console.log(err);
    });
}



const addCard = (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name.value,
      link: link.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const cardElement = createCard(
        data.name,
        data.name,
        data.link,
        data._id,
        data.owner._id,
        data.likes.length
      );
      cardsContainer.prepend(cardElement);
      formAddCart.reset();
      closePopup(addCardPopup);
    })
    .catch((err) => {
      console.log(err);
    });
};



const changeProfileInfo = (name, description) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name.value,
      about: description.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      profileName.textContent = data.name;
      profileDescription.textContent = data.about;
      closePopup(profilePopup);
    })
    .catch((err) => {
      console.log(err);
    });
};



const like = (evt, cardId, likeCount) => {
	return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
		method: 'DELETE',
		headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        console.log('Ошибка на сервере');
      }
    })
    .then(data => {
      console.log(data);
      likeCount.textContent = data.likes.length;
      evt.target.classList.toggle('card__like-icon_active');
    })
    .catch(err => {
      console.log(err);       
    });
}



const unlike = (evt, cardId, likeCount) => {
	return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
		method: 'PUT',
		headers: config.headers
	})
	.then(res => {
		if (res.ok) {
			return res.json();
		} else {
			console.log('Ошибка на сервере');
		}
	})
	.then(data => {
		console.log(data);
		likeCount.textContent = data.likes.length;
		evt.target.classList.toggle('card__like-icon_active');
	})
	.catch(err => {
		console.log(err);       
	});
}


  
const deleteCard = (evt, cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
		headers: config.headers
	})
    .then(res => {
      if (res.ok) {
        console.log('успех');
        evt.target.closest('.card').remove();
      } else {
        console.log('удалить не получилось');
      }
    })
    .catch(err => {
      console.log(err);       
    });
}// удаление карточки



export {
	updateAvatar,
	getProfileInfo,
	addCard,
	changeProfileInfo,
	like,
	unlike,
	deleteCard,
	getCards
};
