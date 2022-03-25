let background = document.querySelector(".hero");
let navBar = document.querySelector(".nav-bar");
let logo = document.querySelector(".nav-bar__logo");
function backgroundBlur() {
  let scrollTop = document.documentElement.scrollTop;

  background.style.filter = `brightness(${100 - scrollTop / 7}%)`;
}

window.addEventListener("scroll", backgroundBlur);

//Despues revisar esto que esta piola getBoundingClientRect(). sirve para saber las coordenadas de un elemento respecto a la ventana
// top:    distancia al borde superior del viewport
// left:   distancia al borde izquierdo del viewport
// right:  distancia al borde derecho del viewport
// bottom: distancia al borde inferior del viewport
// width:  ancho de la caja del elemento
// height: altura de la caja del elemento

function barraNavEffect() {
  let scrollTop = document.documentElement.scrollTop;

  if (scrollTop > 700) {
    navBar.style.height = `${5}rem`;
    navBar.style.transition = `1s all ease-in-out`;
    logo.style.transform = `rotate(1turn) scale(1.2)`;
    logo.style.transition = `1s all ease-in-out`;
  } else {
    navBar.style.height = `${4}rem`;
    logo.style.transform = `rotate(-1turn)`;
  }
  console.log(scrollTop);
}

window.addEventListener("scroll", barraNavEffect);
