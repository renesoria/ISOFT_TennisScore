import Tennis from "./tennis.js";

const tennis = new Tennis();
const score = document.querySelector("#score");
const jugador1Button = document.querySelector("#jugador1-button");

const mostrarScore = () => {
  score.textContent = tennis.obtenerScore();
};

jugador1Button.addEventListener("click", () => {
  tennis.jugador1_anota();
  mostrarScore();
});

mostrarScore();
