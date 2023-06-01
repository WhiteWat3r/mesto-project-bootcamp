
const showError = (input, settings, errorNotification) => {
    const spanId = `error-${input.id}`;
    const errorMessage = document.getElementById(spanId)
    input.classList.add(settings.inputErrorClass)
    errorMessage.textContent = errorNotification;
  }
  
  const hideError = (input, settings) => {
    const spanId = `error-${input.id}`
    const errorMessage = document.getElementById(spanId);
    input.classList.remove(settings.inputErrorClass)
    errorMessage.textContent = '';
  }
  
  
  
  
  const chekValid = (input, settings) => {
    if (input.validity.valid) {
      hideError(input, settings);
    } else {
      showError(input, settings, input.validationMessage);
    }
  }
  
  
  
  
  
  
  
  
  const disableButton = (submitButton, settings) => {
    submitButton.setAttribute('disabled', true);
    submitButton.classList.add(settings.inactiveButtonClass); 
  }
  
  const enableButton = (submitButton, settings) => {
    submitButton.removeAttribute('disabled');
    submitButton.classList.remove(settings.inactiveButtonClass);
  }
  
  
  
  const checkFormValidity = (form, submitButton, settings) => {
    if (form.checkValidity()) {
      enableButton(submitButton, settings);
      console.log('валидно');
    } else {
      disableButton(submitButton, settings);
      console.log('нет');
    }
  }
  
  
  
  
  const setEventListeners = (form, settings) => {
    const inputList = form.querySelectorAll(settings.inputSelector);
    const submitButton = form.querySelector(settings.submitButtonSelector)
    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        chekValid(input, settings)
        checkFormValidity(form, submitButton, settings)
      })
    })
  }
  
  
  
  
export const enableValidation = (settings) => {
    const formList = document.querySelectorAll(settings.formSelector)
    formList.forEach((form) => {
      setEventListeners(form, settings);
    })
  }
  
  
  
  
  

