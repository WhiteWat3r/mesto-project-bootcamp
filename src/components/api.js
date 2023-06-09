import {
  avatarPopup,
	submitAvatarButton
} from "./index.js";

import { closePopup } from "./modal.js";
import { changeAvatar, renderLoading } from "./utils.js";

const config = {
  baseUrl: "https://nomoreparties.co/v1/wbf-cohort-9",
  headers: {
    authorization: "fb3ed4f1-761c-46fd-9604-b420f9ed1295",
    "Content-Type": "application/json",
  },
};







function getCards() {
	return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
}





const updateAvatar = (input) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: input.value,
    }),
})
		.then((res) => {
			if (res.ok) {
				return res.json()
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		})
    .then((data) => {
      console.log(data);
      changeAvatar(input.value);
      closePopup(avatarPopup);
    })
    .catch((err) => {
      console.log(err);
    })
		.finally(() => {
			renderLoading(false, submitAvatarButton, 'Сохранение...', 'Сохранить');
		});
}; // updateAvatar вызывается два раза, поэтмоу я решил описать всю логизу здесь, чтобы не повторяться в index js






function getProfileInfo() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  })
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
};




const toggleLike = (evt, cardId, likeCount) => {
  const method = evt.target.classList.contains("card__like-icon_active") ? 'DELETE' : 'PUT';
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method,
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
};






  
const deleteCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
		headers: config.headers
	})
}// удаление карточки



export {
	updateAvatar,
	getProfileInfo,
	addCard,
	changeProfileInfo,
	deleteCard,
	getCards,
  toggleLike
};
