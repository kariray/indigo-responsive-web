const menuBtn = document.querySelector(".menu-toggle-btn");
const menuList = document.querySelector(".gnb");

function onClick(event) {
  menuList.classList.toggle("show");
}

menuBtn.addEventListener("click", onClick);
