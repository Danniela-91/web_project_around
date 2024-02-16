const formElement = document.querySelector(".popup__form");
const popupClose = document.querySelector(".popup__btn-close");
const btnEdit = document.querySelector(".profile__btn-edit");

const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_about");

const nameText = document.querySelector(".profile__name");
const jobText = document.querySelector(".profile__about");

function togglePopup() {
  const popup = document.querySelector(".popup");
  popup.classList.toggle("popup_opened");
  nameInput.value = nameText.textContent;
  jobInput.value = jobText.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameText.textContent = nameInput.value;
  jobText.textContent = jobInput.value;
  togglePopup();
}

formElement.addEventListener("submit", handleProfileFormSubmit);
popupClose.addEventListener("click", togglePopup);
btnEdit.addEventListener("click", togglePopup);

// Add event listener to each like button
const likeButtons = document.querySelectorAll(".posts__btn-like");
likeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.classList.toggle("posts__btn-like_actived");
  });
});

const trashButtons = document.querySelectorAll(".posts__trash-btn");
trashButtons.forEach(function (trashButton) {
  trashButton.addEventListener("click", function () {
    // Encontre o elemento pai (li) do botão de lixeira
    const postElement = trashButton.closest(".posts__item");

    // Verifique se o elemento foi encontrado antes de tentar removê-lo
    if (postElement) {
      // Remova o elemento do DOM
      postElement.remove();
    }
  });
});
