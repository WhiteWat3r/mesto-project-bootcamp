(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{Rp:()=>C,vC:()=>E,NT:()=>L});var t=function(e){e.classList.add("popup_opened"),document.addEventListener("keydown",o)},n=function(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",o)},o=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_opened");n(t)}},r=document.querySelector(".cards");function c(e,t,n){var o=document.querySelector("#card-template").content.cloneNode(!0),r=o.querySelector(".card__image"),c=o.querySelector(".card__name");return r.src=n,c.textContent=e,r.alt=t,o}fetch("https://nomoreparties.co/v1/wbf-cohort-9/cards",{headers:{authorization:"fb3ed4f1-761c-46fd-9604-b420f9ed1295"}}).then((function(e){return e.json()})).then((function(e){e.forEach((function(e){var t=c(e.name,e.name,e.link);r.append(t)}))})),r.addEventListener("click",(function(e){!function(e){e.target.classList.contains("card__like-icon")&&e.target.classList.toggle("card__like-icon_active")}(e),function(e){e.target.classList.contains("card__image")&&(C.src=e.target.src,t(L),E.textContent=e.target.nextElementSibling.querySelector(".card__name").textContent)}(e),function(e){e.target.classList.contains("card__delete-button")&&e.target.closest(".card").remove()}(e)}));var i,a=function(e,t){e.setAttribute("disabled",!0),e.classList.add(t.inactiveButtonClass)},u=function(e,t){var n=e.querySelectorAll(t.inputSelector),o=e.querySelector(t.submitButtonSelector);e.addEventListener("reset",(function(){a(o,t)})),n.forEach((function(n){n.addEventListener("input",(function(){(function(e,t){e.validity.valid?function(e,t){var n="error-".concat(e.id),o=document.getElementById(n);e.classList.remove(t.inputErrorClass),o.textContent=""}(e,t):function(e,t,n){var o="error-".concat(e.id),r=document.getElementById(o);e.classList.add(t.inputErrorClass),r.textContent=n}(e,t,e.validationMessage)})(n,t),function(e,t,n){e.checkValidity()?(function(e,t){e.removeAttribute("disabled"),e.classList.remove(t.inactiveButtonClass)}(t,n),console.log("валидно")):(a(t,n),console.log("нет"))}(e,o,t)}))}))},s=document.querySelector(".profile__add-button"),d=document.querySelector(".profile__edit-button"),l=document.querySelector(".main"),p=l.querySelector(".profile__name"),f=l.querySelector(".profile__description"),m=l.querySelector(".profile__image"),_=document.querySelector(".popup_type_edit"),v=document.forms.edit,y=v.elements.name,h=v.elements.description,b=document.querySelector(".popup_type_add"),S=document.forms.add,g=S.name,q=S.link,L=document.querySelector(".popup_type_image"),C=(L.querySelector(".popup__close_type_image"),L.querySelector(".popup__image")),E=L.querySelector(".popup__name");fetch("https://nomoreparties.co/v1/wbf-cohort-9/users/me",{headers:{authorization:"fb3ed4f1-761c-46fd-9604-b420f9ed1295"}}).then((function(e){return e.json()})).then((function(e){p.textContent=e.name,f.textContent=e.about,m.src=e.avatar})),s.addEventListener("click",(function(){return t(b)})),d.addEventListener("click",(function(){t(_),y.value=p.textContent,h.value=f.textContent})),S.addEventListener("submit",(function(e){e.preventDefault(),fetch("https://nomoreparties.co/v1/wbf-cohort-9/cards",{method:"POST",headers:{authorization:"fb3ed4f1-761c-46fd-9604-b420f9ed1295","Content-Type":"application/json"},body:JSON.stringify({name:g.value,link:q.value})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=c(e.name,e.name,e.link);r.prepend(t),S.reset(),n(b)})).catch((function(e){console.log(e)}))})),v.addEventListener("submit",(function(e){e.preventDefault(),fetch("https://nomoreparties.co/v1/wbf-cohort-9/users/me",{method:"PATCH",headers:{authorization:"fb3ed4f1-761c-46fd-9604-b420f9ed1295","Content-Type":"application/json"},body:JSON.stringify({name:y.value,about:h.value})}).then((function(e){return e.json()})).then((function(e){p.textContent=e.name,f.textContent=e.about,n(_)})).catch((function(e){console.log(e)}))})),i={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_disabled",inputErrorClass:"form__input_invalid"},document.querySelectorAll(i.formSelector).forEach((function(e){u(e,i)})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close"))&&n(e)}))}))})();