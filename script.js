const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

function scrollNext(direction) {
  const card = document.querySelector(".cards-container");
  card.scrollLeft = card.scrollLeft +=
    window.innerWidth / 3 > 450
      ? window.innerWidth / 3
      : window.innerWidth - 100;
}

function scrollPrev(direction) {
  const card = document.querySelector(".cards-container");
  card.scrollLeft = card.scrollLeft -=
    window.innerWidth / 3 > 450
      ? window.innerWidth / 3
      : window.innerWidth - 100;
}

next.addEventListener("click", scrollNext);
prev.addEventListener("click", scrollPrev);
