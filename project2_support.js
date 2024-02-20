//click event for destination in nav bar
let press = 0;
let choice = document.querySelector(".choices");
let dest = document.querySelector(".destination");

dest.addEventListener("click", function () {
  press++;
  console.log(press);
  if (press % 2 == 1) {
    choice.style.display = "block";
  } else {
    choice.style.display = "none";
  }
});

//click function for menu
let rec = document.querySelector(".rec");
let menu = document.querySelector(".menu");
let close = document.querySelector(".close");
rec.addEventListener("click", function () {
  //   menu.setAttribute("style", "margin-left:0px;");
  menu.style.marginLeft = "0px";
});
close.addEventListener("click", function () {
  //   menu.setAttribute("style", "margin-left:-448px;");
  menu.style.marginLeft = "-448px";
});

//scroll function for nav
let linka = document.querySelectorAll(".linka");
let nav1 = document.querySelector(".nav1");
let name1 = document.querySelector(".name");
let desta = document.querySelector(".desta");

window.addEventListener("scroll", function () {
  let scroll_value = window.scrollY;

  if (scroll_value > 200) {
    name1.style.color = "#081c3a";
    desta.style.color = "#081c3a";
    // nav1.setAttribute("style", "margin-top:0px;");
    name1.style.opacity = Math.min(1, (scroll_value - 200) / 200);
    desta.style.opacity = Math.min(1, (scroll_value - 200) / 200);
    linka[0].style.opacity = Math.min(1, (scroll_value - 200) / 200);
    linka[1].style.opacity = Math.min(1, (scroll_value - 200) / 200);
    linka[2].style.opacity = Math.min(1, (scroll_value - 200) / 200);
  } else {
    linka[0].style.opacity = 0;
    linka[1].style.opacity = 0;
    linka[2].style.opacity = 0;
    name1.style.color = "#fff";
    desta.style.color = "#fff";
    name1.style.opacity = Math.max(0, (400 - scroll_value) / 400);
    desta.style.opacity = Math.max(0, (400 - scroll_value) / 400);
  }

  nav1.style.height =
    scroll_value < 400 ? `${(scroll_value / 400) * 80}px` : "80px";

  // let scroll_value = [];
  // scroll_value.push(window.scrollY);
  // for (const y of scroll_value) {
  //   nav1.style.height  = y;
  // }
});
