const nav = document.querySelector(".nav-items");
const navItem = document.querySelector(".nav-menu");

const sectionHero = document.querySelector(".section-hero");
nav.addEventListener("mouseover", function (e) {
  nav.querySelectorAll(".nav-link").forEach((item) => {
    item.style.color = "white";
  });
  if (e.target.classList.contains("nav-link")) {
    e.target.style.color = "yellow";
    navItem.classList.remove("hidden");
  }
});

sectionHero.addEventListener("mouseover", function () {
  navItem.classList.add("hidden");
  nav.querySelectorAll(".nav-link").forEach((item) => {
    item.style.color = "white";
  });
});

window.addEventListener("click", function (e) {
  if (e.target.closest(".navigation")) return;
  else {
    nav.querySelectorAll(".nav-link").forEach((item) => {
      item.style.color = "white";
    });
    navItem.classList.add("hidden");
  }
});
