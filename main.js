const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = '<img src="https://andreyanuaar.github.io/portfolio/portfolio-img/portfolio-1.jpg" alt="" />';
  title.innerHTML = "Advanced Encryption Standard method (AES)";
  excerpt.innerHTML = "Encryption and decryption applications for data communication using the Advanced Encryption Standard method (AES) with the C programming language, which aircraft use to communicate with the transmitting tower.";
  profile_img.innerHTML = '<img src="https://avatars.githubusercontent.com/u/83018818?v=4" alt="" />';
  name.innerHTML = "Andre Yanuar";
  date.innerHTML = "02-08-2022";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
