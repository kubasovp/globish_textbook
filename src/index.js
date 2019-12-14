import "normalize.css";
import "./styles.css";
import "./header.css";
import "./nav.css";
import "./textbook.css";
const btnShow = document.querySelector(".btn_show");
const menu = document.querySelector("nav");

btnShow.addEventListener(
  "click",
  () => {
    btnShow.classList.toggle("btn_show_active");
    menu.classList.toggle("nav_show");
    document.querySelector("body").classList.toggle("noscroll");
  },
  false
);

window.onclick = function(e) {
  if (!e.target.closest(".btn_show") && !e.target.closest("nav")) {
    if (menu.classList.contains("nav_show")) {
      btnShow.classList.remove("btn_show_active");
      menu.classList.remove("nav_show");
      document.querySelector("body").classList.remove("noscroll");
    }
  }
};

const sentences = document.querySelectorAll("[data-entxt]");
sentences.forEach(sentence => {
  sentence.addEventListener(
    "mouseover",
    () => {
      sentence.dataset.rutxt = sentence.textContent;
      sentence.textContent = sentence.dataset.entxt;
    },
    false
  );
  sentence.addEventListener(
    "mouseout",
    () => {
      sentence.dataset.entxt = sentence.textContent;
      sentence.textContent = sentence.dataset.rutxt;
    },
    false
  );
});
