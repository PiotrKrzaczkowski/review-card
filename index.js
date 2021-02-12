const reviews = [
  {
    id: 1,
    name: "Pjoter Krzaczkowski",
    job: "Junior Frontend Developer",
    img: "./img/pjotere.jpeg",
    text:
      "Bardzo lubię wiosnę, ciepłą i radosną, a jak śpiewa pierwszy ptak to ja z ptakiem nucę tak: '...'",
  },
  {
    id: 2,
    name: "Brajan Kowalski",
    job: "Piłkarz",
    img: "./img/Papier.jpeg",
    text:
      "Lubię czekać lata Skąpanego w kwiatach Gdy ciepły deszczyk gra A ja z deszczem nucę tak: '...'",
  },
  {
    id: 3,
    name: "Janusz Papier",
    job: "Filozof",
    img: "./img/pjotere.jpeg",
    text:
      "Lubię gdy jest jesień Żółto rudy wrzesień Wkoło wiatr ponuro łka A wesoło śpiewam ja: '...'",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
