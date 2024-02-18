const listEl = document.querySelector(".js-tags");

const fn = (event) => {
    if (event.target.nodeName !== "BUTTON") {
        return
    }
    event.target.classList.toggle("tags__btn--active");
}

listEl.addEventListener("click", fn)