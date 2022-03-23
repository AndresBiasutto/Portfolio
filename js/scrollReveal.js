ScrollReveal().reveal(".info", { duration: 5000 });

window.sr = ScrollReveal();

var slideUp = {
  distance: "150%",
  origin: "bottom",
  opacity: 0,
  duration: 1500,
};

var slideDown = {
  distance: "150%",
  origin: "top",
  opacity: 0,
  duration: 1500,
};
var slideRigth = {
  distance: "150%",
  origin: "left",
  opacity: 0,
  duration: 1500,
};

var slideLeft = {
  distance: "150%",
  origin: "rigth",
  opacity: 0,
  duration: 1500,
};

sr.reveal(".grid-template-hero__placa__h1", slideUp);
sr.reveal(".grid-template-hero__placa__botones", slideDown);
sr.reveal("h2", slideDown);
sr.reveal(".border", slideUp);
sr.reveal(".logos__icono", slideUp);
sr.reveal(".social", slideLeft);
