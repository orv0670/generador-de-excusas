/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  var who = [
    "my perro",
    "my abuela",
    "mi gato",
    "naruto",
    "mi novia",
    "mi mama"
  ];
  var what = [
    "me obligo a ir con el doctor",
    "se comio mi tarrea",
    "me ataco",
    "me olbigo a hacer de comer",
    "se enfermo",
    "se enojo conmigo"
  ];
  var where = [
    "en mi casa",
    "en el cine",
    "en el supermecado",
    "en la playa",
    "en un restaurante",
    "en konoha"
  ];

  var sentencia =
    who[rand(who.length)] +
    " " +
    what[rand(what.length)] +
    " " +
    where[rand(where.length)];

  let excuseSpan = document.querySelector("#excuse");
  excuseSpan.innerHTML = sentencia;
};

function rand(length) {
  let number = Math.floor(Math.random() * length);
  return number;
}
