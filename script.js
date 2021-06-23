const showPlacesEl = document.querySelectorAll(".show-places");
let removeClass = true;

for (let index = 0; index < showPlacesEl.length; index++) {
  showPlacesEl[index].addEventListener("click", function () {
    if (removeClass) {
      this.classList.toggle("toTop");
      this.classList.toggle("toBottom");

      removeClass = false;
    } else {
      this.classList.toggle("toBottom");
      this.classList.toggle("toTop");
      removeClass = true;
    }
  });
}

const imageMealsEl = document.querySelectorAll(".image-meals");
const modalContent = document.querySelector(".modal-content");
let modal = document.getElementById("myModal");
let caption = document.getElementById("caption");

for (let index = 0; index < imageMealsEl.length; index++) {
  imageMealsEl[index].addEventListener("click", function () {
    modal.style.display = "block";
    modalContent.src = this.src;
    caption.innerHTML = this.alt;
  });
}

// Get the <span> element that closes the modal
let span = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
