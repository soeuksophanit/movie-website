const navbar = document.querySelector(".my-navbar");
const btnScroll = document.querySelector(".scroll-to-top");

let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
    btnScroll.classList.remove("active");
  } else {
    navbar.style.top = `-${navbar.offsetHeight}px`;
    if (currentScrollPos > 200) btnScroll.classList.add("active");
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

// navbar click active
const links = document.querySelectorAll(".link-item a");

console.log(links);

for (let eachLink of links) {
  eachLink.addEventListener("click", () => {
    for (let anotherLink of links) {
      if (anotherLink !== eachLink) {
        anotherLink.classList.remove("active");
      }
    }
    eachLink.classList.toggle("active");
  });
}
