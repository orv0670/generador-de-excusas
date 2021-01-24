/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  var quien = [
    "mi perro",
    "mi abuela",
    "mi gato",
    "naruto",
    "mi novia",
    "mi mama"
  ];
  var que = [
    "me obligo a ir con el doctor",
    "se comio mi tarrea",
    "me ataco",
    "me obligo a hacer de comer",
    "se enfermo",
    "se enojo conmigo"
  ];
  var donde = [
    "en mi casa",
    "en el cine",
    "en el supermecado",
    "en la playa",
    "en un restaurante",
    "en konoha"
  ];

  var sentencia =
    quien[aleatorio(quien.length)] +
    " " +
    que[aleatorio(que.length)] +
    " " +
    donde[aleatorio(donde.length)];

  let excusaSpan = document.querySelector("#excusa");
  excusaSpan.innerHTML = sentencia;
};

function aleatorio(length) {
  let numero = Math.floor(Math.random() * length);
  return numero;
}
