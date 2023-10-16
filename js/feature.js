const navbar = document.querySelector(".my-navbar");
let prevScrollPos = window.pageXOffset;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = `-${navbar.offsetHeight}px`;
  }
  prevScrollPos = currentScrollPos;
};

const questions = document.querySelectorAll(".question");

for (let question of questions) {
  question.addEventListener("click", () => {
    for (let otherQuestion of questions) {
      if (otherQuestion !== question) {
        otherQuestion.parentElement.classList.remove("active");
      }
    }
    question.parentElement.classList.toggle("active");
  });
}
