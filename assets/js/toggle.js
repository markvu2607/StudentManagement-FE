var sideBar = document.querySelector(".sidebar");
const x = sideBar.style.width;
const menuOpenClose = function () {
  var showText = document.querySelectorAll(".ms-2");
  for (let i = 0; i < showText.length; i++) {
    if (showText[i].style.display == "none") {
      showText[i].style.display = "inline";
      sideBar.style.width = "280px";
    } else {
      showText[i].style.display = "none";
      sideBar.style.width = x;
    }
  }
};
// document.getElementById("menu").onclick = menuOpenClose;
document.getElementById("show").onclick = menuOpenClose;