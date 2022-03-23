let background = document.querySelector(".hero");

function backgroundBlur() {
  let scrollTop = document.documentElement.scrollTop;

  background.style.filter = `brightness(${100 - scrollTop / 5}%)`;
  console.log(scrollTop);
  background.style.transform = `translateY${scrollTop / 3}px`;
}

window.addEventListener("scroll", backgroundBlur);
