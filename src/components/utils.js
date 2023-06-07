import {avatar} from "./index.js";



const changeAvatar = (link) => {
    avatar.src = link
}
  

const saveMyId = (id) => {
    const myId = id;
    localStorage.setItem('userId', myId);
}


export {
    changeAvatar,
    saveMyId
}