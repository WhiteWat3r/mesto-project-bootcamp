(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{ri:()=>C,Rp:()=>J,vC:()=>H,NT:()=>D,E3:()=>z});var t=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранить",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Сохранение...";t.textContent=e?r:n},n=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},r=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...";n.preventDefault();var o=n.submitter,c=o.textContent;console.log("1",c),t(!0,o,c,r),console.log("2",r),e().then((function(){n.target.reset()})).catch((function(e){console.error("Ошибка: ".concat(e))})).finally((function(){console.log("3",c),t(!1,o,c)}))},o={baseUrl:"https://nomoreparties.co/v1/wbf-cohort-9",headers:{authorization:"fb3ed4f1-761c-46fd-9604-b420f9ed1295","Content-Type":"application/json"}};function c(e,t){return fetch(o.baseUrl+e,t).then(n)}function a(){return c("/users/me",{headers:o.headers})}var i=function(e){e.classList.add("popup_opened"),document.addEventListener("keydown",s)},u=function(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",s)},s=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_opened");u(t)}},l=function(e,t){e.setAttribute("disabled",!0),e.classList.add(t.inactiveButtonClass)},d=function(e,t){e.removeAttribute("disabled"),e.classList.remove(t.inactiveButtonClass)},m=function(e,t){var n=e.querySelectorAll(t.inputSelector),r=e.querySelector(t.submitButtonSelector);e.addEventListener("reset",(function(){l(r,t)})),n.forEach((function(n){n.addEventListener("input",(function(){(function(e,t){e.validity.valid?function(e,t){var n="error-".concat(e.id),r=document.getElementById(n);e.classList.remove(t.inputErrorClass),r.textContent=""}(e,t):function(e,t,n){var r="error-".concat(e.id),o=document.getElementById(r);e.classList.add(t.inputErrorClass),o.textContent=n}(e,t,e.validationMessage)})(n,t),function(e,t,n){e.checkValidity()?(d(t,n),console.log("валидно")):(l(t,n),console.log("нет"))}(e,r,t)}))}))},f=document.querySelector(".cards"),p=document.querySelector(".popup_type_remove"),v=p.querySelector(".form__submit-button"),_=document.forms.remove;function y(e,t,n){var a=document.querySelector("#card-template").content.cloneNode(!0).querySelector(".card"),s=a.querySelector(".card__image"),l=a.querySelector(".card__name"),m=a.querySelector(".card__like-icon"),f=a.querySelector(".card__like-count"),y=a.querySelector(".card__delete-button");return f.textContent=e.likes.length,s.src=e.link,l.textContent=e.name,s.alt=e.name,e.owner._id!==t&&y.remove(),y.addEventListener("click",(function(){var t=function(e){"remove"===e?(_.removeEventListener("submit",s),p.removeEventListener("click",n),document.removeEventListener("keydown",n)):(_.addEventListener("submit",s),p.addEventListener("click",n),document.addEventListener("keydown",n))},n=function(e){p.classList.contains("popup_opened")&&"Escape"!==e.key||(console.log("очищаю, если отменил"),t("remove"))},s=function(n){r((function(){return(t=e._id,c("/cards/".concat(t),{method:"DELETE",headers:o.headers})).then((function(){a.remove(),u(p)}));var t}),n,"Удаление..."),console.log("очищаю, если удалил"),t("remove")};i(p),t("add"),d(v,z)})),n&&m.classList.add("card__like-icon_active"),m.addEventListener("click",(function(t){var n,r;(n=t.target.classList.contains("card__like-icon_active")?"DELETE":"PUT",r=e._id,c("/cards/likes/".concat(r),{method:n,headers:o.headers})).then((function(e){f.textContent=e.likes.length,t.target.classList.toggle("card__like-icon_active")})).catch((function(e){console.log(e)}))})),a}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S=document.querySelector(".profile__add-button"),g=document.querySelector(".profile__edit-button"),E=document.querySelector(".main"),L=E.querySelector(".profile__name"),q=E.querySelector(".profile__description"),k=document.querySelector(".profile__avatar-edit"),C=document.querySelector(".profile__image"),x=document.querySelector(".popup_type_edit"),A=document.forms.edit,w=A.elements.name,O=A.elements.description,j=(A.submit,document.querySelector(".popup_type_add")),P=document.forms.add,T=P.name,B=P.link,I=(P.submit,document.querySelector(".popup_type_avatar")),N=document.forms.avatar,U=N.querySelector(".form__input_value_link"),D=(N.submit,document.querySelector(".popup_type_image")),J=(D.querySelector(".popup__close_type_image"),D.querySelector(".popup__image")),H=D.querySelector(".popup__name");Promise.all([a(),c("/cards",{headers:o.headers})]).then((function(e){var t=h(e,2),n=t[0],r=t[1];L.textContent=n.name,q.textContent=n.about,C.src=n.avatar;var o=n._id;r.forEach((function(e){var t=e.likes.some((function(e){return e._id===o})),n=y(e,o,t);f.append(n)}))})).catch((function(e){console.log(e)})),P.addEventListener("submit",(function(e){r((function(){return Promise.all([a(),(e=T,t=B,c("/cards",{method:"POST",headers:o.headers,body:JSON.stringify({name:e.value,link:t.value})}))]).then((function(e){var t=h(e,2),n=t[0],r=y(t[1],n._id);f.prepend(r),P.reset(),u(j)}));var e,t}),e,"Создание...")})),A.addEventListener("submit",(function(e){r((function(){return(e=w,t=O,c("/users/me",{method:"PATCH",headers:o.headers,body:JSON.stringify({name:e.value,about:t.value})})).then((function(e){L.textContent=e.name,q.textContent=e.about,u(x)}));var e,t}),e)})),S.addEventListener("click",(function(){return i(j)})),g.addEventListener("click",(function(){i(x),w.value=L.textContent,O.value=q.textContent})),N.addEventListener("submit",(function(e){r((function(){return(e=U,c("/users/me/avatar",{method:"PATCH",headers:o.headers,body:JSON.stringify({avatar:e.value})})).then((function(e){var t;console.log(e),t=U.value,C.src=t,u(I)}));var e}),e,"Создание...")}));var M,z={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_disabled",inputErrorClass:"form__input_invalid"};M=z,document.querySelectorAll(M.formSelector).forEach((function(e){m(e,M)})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close"))&&u(e)}))})),k.addEventListener("click",(function(){return i(I)})),f.addEventListener("click",(function(e){return function(e){e.target.classList.contains("card__image")&&(J.src=e.target.src,i(D),H.textContent=e.target.closest(".card").querySelector(".card__name").textContent)}(e)}))})();