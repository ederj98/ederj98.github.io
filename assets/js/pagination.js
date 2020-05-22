var btns = document.querySelectorAll(".btn");
var paginationWrapper = document.querySelector(".pagination-wrapper");
var bigDotContainer = document.querySelector(".big-dot-container");
var littleDot = document.querySelector(".little-dot");
$("#second").hide();

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", btnClick);
}

function btnClick() {
  if (this.classList.contains("btn--prev")) {
    paginationWrapper.classList.add("transition-prev");
    $("#first").fadeIn(2000);
    $("#second").hide();
  } else {
    paginationWrapper.classList.add("transition-next");
    $("#first").hide();
    $("#second").fadeIn(2000);
  }

  var timeout = setTimeout(cleanClasses, 500);
}

function cleanClasses() {
  if (paginationWrapper.classList.contains("transition-next")) {
    paginationWrapper.classList.remove("transition-next");
  } else if (paginationWrapper.classList.contains("transition-prev")) {
    paginationWrapper.classList.remove("transition-prev");
  }
}
