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
    img: "./img/men.jpg",
    text:
      "Lubię czekać lata Skąpanego w kwiatach Gdy ciepły deszczyk gra A ja z deszczem nucę tak: '...'",
  },
  {
    id: 3,
    name: "Janusz Papier",
    job: "Filozof",
    img: "./img/Papier.jpg",
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

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

const showPerson = (person) => {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);

  showPerson(currentItem);
});
