import { avatar } from "./index.js";

const changeAvatar = (link) => {
  avatar.src = link;
};


const renderLoading = (isLoading, button, buttonText='Сохранить', loadingText='Сохранение...') => {
  if (isLoading) {
    button.textContent = loadingText;
  } else {
    button.textContent = buttonText;
  }
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}


const handleSubmit = (request, evt, loadingText = "Сохранение...") => {
  evt.preventDefault();
  const submitButton = evt.submitter;
  const initialText = submitButton.textContent;
  console.log('1', initialText);
  renderLoading(true, submitButton, initialText, loadingText);
  console.log('2', loadingText);
  request()
  .then(() => {
    evt.target.reset()
  })
  .catch((err) => {
    console.error(`Ошибка: ${err}`);
  })
  .finally(() => {
    console.log('3', initialText);
    renderLoading(false, submitButton, initialText);
  });
}


export { changeAvatar, renderLoading, checkResponse, handleSubmit};
