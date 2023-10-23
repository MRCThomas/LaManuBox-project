const menu = document.getElementById("menu");
const burger = document.getElementById("burger");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menu.classList.remove("active");
  }
});
