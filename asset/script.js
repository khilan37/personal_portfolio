var btn = document.getElementById("wrap");
var btn1 = document.getElementById("top");
var btn2 = document.getElementById("m1");
var btn3 = document.getElementById("m2");
var btn4 = document.getElementById("m3");
var btn5 = document.getElementById("m4");
var btn6 = document.getElementById("m5");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 50) {
    // document.getElementById("n").style.backgroundColor = "#000000";
    // document.getElementById("n").style.opacity = "0.85";
    document.getElementById("n").style.padding = "5px";
    // document.getElementById("n").style.borderBottom = "1px solid red";
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "#n::before {transform: scale(1,1); background-color: rgb(253, 47, 47);}";
    btn1.style.opacity = "1";
    // btn1.body.scrollTop = "0px";
  } else {
    document.getElementById("n").style.padding = "10px";
    // document.getElementById("n").style.border = "none";
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "#n::before {transform: scale(0,1); background-color: ;}";
    btn1.style.opacity = "0";
  }
}
var _pos = document.querySelector('.navbar-body');
    var body = document.getElementById("body");

btn.addEventListener("click", () => {
    document.getElementById("span1").classList.toggle("first");
    document.getElementById("span2").classList.toggle("sec");
    document.getElementById("span3").classList.toggle("third");
    
    if(getComputedStyle(_pos).right != "0px")
    {
      _pos.style.right = "0%";
      body.style.overflowY = "hidden";
      btn1.style.opacity = "0";
    }
    else{
      _pos.style.right = "-100%";
      body.style.overflowY = "auto";
    }
    // document.getElementById("go-top").classList.toggle("go-top2");
    // document.getElementById("nav").style.right = "0%";
    // document.getElementById("nav").classList.toggle("tog");
    // document.getElementById("body").classList.toggle("body1");
    // document.querySelector(".navbar-body").classList.toggle("tog");
});
btn2.addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("tog");
  document.getElementById("span1").classList.toggle("first");
  document.getElementById("span2").classList.toggle("sec");
  document.getElementById("span3").classList.toggle("third");
  _pos.style.right = "-100%";
  body.style.overflowY = "auto";
});
btn3.addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("tog");
  document.getElementById("span1").classList.toggle("first");
  document.getElementById("span2").classList.toggle("sec");
  document.getElementById("span3").classList.toggle("third");
  _pos.style.right = "-100%";
  body.style.overflowY = "auto";
});
btn4.addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("tog");
  document.getElementById("span1").classList.toggle("first");
  document.getElementById("span2").classList.toggle("sec");
  document.getElementById("span3").classList.toggle("third");
  _pos.style.right = "-100%";
  body.style.overflowY = "auto";
});
btn5.addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("tog");
  document.getElementById("span1").classList.toggle("first");
  document.getElementById("span2").classList.toggle("sec");
  document.getElementById("span3").classList.toggle("third");
  _pos.style.right = "-100%";
  body.style.overflowY = "auto";
});
btn6.addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("tog");
  document.getElementById("span1").classList.toggle("first");
  document.getElementById("span2").classList.toggle("sec");
  document.getElementById("span3").classList.toggle("third");
  _pos.style.right = "-100%";
  body.style.overflowY = "auto";
});
function topfunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}