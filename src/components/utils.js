import { avatar } from "./index.js";

const changeAvatar = (link) => {
  avatar.src = link;
};

const saveMyId = (id) => {
  const myId = id;
  localStorage.setItem("userId", myId);
};

const renderLoading = (isLoading, button, renderText, postRenderText) => {
  if (isLoading) {
    button.textContent = renderText;
  } else {
    button.textContent = postRenderText;
  }
};

export { changeAvatar, saveMyId, renderLoading };
