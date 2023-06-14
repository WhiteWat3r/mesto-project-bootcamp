
import {checkResponse} from "./utils.js";
import {config} from "./constants.js";


function request(url, options) {
  return fetch(config.baseUrl + url, options).then(checkResponse)
}



function getCards() {
  return request(`/cards`,  {
    headers: config.headers
  })
}



function getProfileInfo() {
  return request(`/users/me`, {
    headers: config.headers
  }) 
}


function updateAvatar(input) {
  return request(`/users/me/avatar`,{
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: input.value,
    })
  })
}

 
function addCard (name, link) {
  return request(`/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name.value,
      link: link.value,
    }),
  })
};



function changeProfileInfo (name, description) {
  return request(`/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name.value,
      about: description.value,
    })
  })
};




function toggleLike (method, cardId) {
  return request(`/cards/likes/${cardId}`, {
    method,
    headers: config.headers
  })
};






  
function deleteCard(cardId) {
  return request(`/cards/${cardId}`, {
    method: 'DELETE',
		headers: config.headers
	})
}



export {
	updateAvatar,
	getProfileInfo,
	addCard,
	changeProfileInfo,
	deleteCard,
	getCards,
  toggleLike
};
