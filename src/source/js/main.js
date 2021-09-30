const burger = document.querySelector(".burger");
const container = document.querySelector(".container");
const screens = document.querySelectorAll(".screen");
const links = document.querySelectorAll(".links a");

screens.forEach(screen => {
  screen.style.display = "none";
  screens[0].style.display = "block";
});

burger.addEventListener("click", () => {
  container.classList.toggle("active");
});

function replaceScreen(id) {
  const screenId = document.getElementById(id);
  screens.forEach(screen => {
    screen.style.display = "none";
  });
  screenId.style.display = "block";
}

function chsngrBacground() {
  links.forEach(link => {
    link.addEventListener("mouseenter", evt => {
      evt.preventDefault();
      replaceScreen(evt.target.dataset.link);
    });
    link.addEventListener("click", evt => {
      evt.preventDefault()
      container.classList.toggle("active");
    });
  });
}
chsngrBacground();