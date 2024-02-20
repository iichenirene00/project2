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

//  swiper for covilla destination
let index = 0;
let slides = document.querySelectorAll(".slides");
let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");
c2.addEventListener("click", function () {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  console.log(index);
  if (index == 0) {
    slides[index].style.transform = "translateX(0px)";
    slides[index + 1].style.transform = "translateX(0px)";
    slides[index + 2].style.transform = "translateX(0px)";
    slides[index + 3].style.transform = "translateX(0px)";
  }
  if (index == 1) {
    slides[index - 1].style.transform = "translateX(-860px)";
    slides[index].style.transform = "translateX(-860px)";
    slides[index + 1].style.transform = "translateX(-860px)";
    slides[index + 2].style.transform = "translateX(-860px)";
  }
  if (index == 2) {
    slides[index - 2].style.transform = "translateX(-1730px)";
    slides[index - 1].style.transform = "translateX(-1730px)";
    slides[index].style.transform = "translateX(-1730px)";
    slides[index + 1].style.transform = "translateX(-1730px)";
  }
  if (index == 3) {
    slides[index - 3].style.transform = "translateX(-2580px)";
    slides[index - 2].style.transform = "translateX(-2580px)";
    slides[index - 1].style.transform = "translateX(-2580px)";
    slides[index].style.transform = "translateX(-2580px)";
  }
});

c1.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  console.log(index);

  if (index == 0) {
    slides[index].style.transform = "translateX(0px)";
    slides[index + 1].style.transform = "translateX(0px)";
    slides[index + 2].style.transform = "translateX(0px)";
    slides[index + 3].style.transform = "translateX(0px)";
  }
  if (index == 1) {
    slides[index - 1].style.transform = "translateX(-860px)";
    slides[index].style.transform = "translateX(-860px)";
    slides[index + 1].style.transform = "translateX(-860px)";
    slides[index + 2].style.transform = "translateX(-860px)";
  }
  if (index == 2) {
    slides[index - 2].style.transform = "translateX(-1730px)";
    slides[index - 1].style.transform = "translateX(-1730px)";
    slides[index].style.transform = "translateX(-1730px)";
    slides[index + 1].style.transform = "translateX(-1730px)";
  }
  if (index == 3) {
    slides[index - 3].style.transform = "translateX(-2580px)";
    slides[index - 2].style.transform = "translateX(-2580px)";
    slides[index - 1].style.transform = "translateX(-2580px)";
    slides[index].style.transform = "translateX(-2580px)";
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

//slider for cassie
let count = 0;
let tracker = document.querySelector(".tracker");
let num = document.querySelectorAll(".num");
let larr = document.querySelector(".cwordlarr");
let rarr = document.querySelector(".cwordrarr");
let cwordall = document.querySelectorAll(".cwordall");

rarr.addEventListener("click", function () {
  count++;
  if (count > cwordall.length - 1) {
    count = 0;
  }
  console.log(count);
  for (let i = 0; i < cwordall.length; i++) {
    if (i == count) {
      let y = `${66 * i}px`;
      console.log(y);
      num[count].style.fontWeight = 700;
      tracker.style.transform = `translateY(${y})`;
      cwordall[count].style.opacity = 1;
      cwordall[count].style.height = "auto";
    } else {
      num[i].style.fontWeight = 300;
      cwordall[i].style.opacity = 0;
      cwordall[i].style.height = "0px";
      cwordall[i].style.overflow = "hidden";
    }
  }
});

larr.addEventListener("click", function () {
  count--;

  if (count < 0) {
    count = cwordall.length - 1;
  }
  console.log(count);
  for (let i = 0; i < cwordall.length; i++) {
    if (count == i) {
      let y = `${66 * i}px`;
      console.log(y);
      num[count].style.fontWeight = 700;
      tracker.style.transform = `translateY(${y})`;
      cwordall[count].style.opacity = 1;
      cwordall[count].style.height = "auto";
    } else {
      num[i].style.fontWeight = 300;
      cwordall[i].style.opacity = 0;
      cwordall[i].style.height = "0px";
      cwordall[i].style.overflow = "hidden";
    }
  }
  //   if (count == 4) {
  //     // cword5.setAttribute("style", "opacity: 0;height: 0;overflow: hidden;");
  //     // cword4.setAttribute("style", "opacity: 1;height: auto;");
  //     cwordall[count + 1].style.opacity = 0;
  //     cwordall[count + 1].style.height = "0px";
  //     cwordall[count + 1].style.overflow = "hidden";
  //     cwordall[count].style.opacity = 1;
  //     cwordall[count].style.height = "auto";
  //   } else if (count == 3) {
  //     // cword4.setAttribute("style", "opacity: 0;height: 0;overflow: hidden;");
  //     // cword3.setAttribute("style", "opacity: 1;height: auto;");
  //     cwordall[count + 1].style.opacity = 0;
  //     cwordall[count + 1].style.height = "0px";
  //     cwordall[count + 1].style.overflow = "hidden";
  //     cwordall[count].style.opacity = 1;
  //     cwordall[count].style.height = "auto";
  //   } else if (count == 2) {
  //     // cword3.setAttribute("style", "opacity: 0;height: 0;overflow: hidden;");
  //     // cword2.setAttribute("style", "opacity: 1;height: auto;");
  //     cwordall[count + 1].style.opacity = 0;
  //     cwordall[count + 1].style.height = "0px";
  //     cwordall[count + 1].style.overflow = "hidden";
  //     cwordall[count].style.opacity = 1;
  //     cwordall[count].style.height = "auto";
  //   } else if ((count = 1)) {
  //     // cword2.setAttribute("style", "opacity: 0;height: 0;overflow: hidden;");
  //     // cword1.setAttribute("style", "opacity: 1;height: auto;");
  //     cwordall[count + 1].style.opacity = 0;
  //     cwordall[count + 1].style.height = "0px";
  //     cwordall[count + 1].style.overflow = "hidden";
  //     cwordall[count].style.opacity = 1;
  //     cwordall[count].style.height = "auto";
  //   }
  //   count--;
});

//slider for section photo
let slide = document.querySelectorAll(".slide");
let dot = document.querySelectorAll(".dots");
let dots = dot[0].parentNode;
dots.addEventListener("click", function (e) {
  let index = e.target.dataset.id;
  console.log(index);
  if (index == 0) {
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.transform = "translateX(0px)";
    }
  } else if (index == 1) {
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.transform = "translateX(-213.75px)";
    }
  } else if (index == 2) {
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.transform = "translateX(-427.5px)";
    }
  } else if (index == 3) {
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.transform = "translateX(-641.25px)";
    }
  } else if (index == 4) {
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.transform = "translateX(-855px)";
    }
  } else {
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.transform = "translateX(-940.75px)";
    }
  }
});

//click event for popluar location that changes background image of header
let change = document.querySelectorAll(".change");
let bg = document.querySelectorAll(".bg");
let tlpl = document.querySelector(".tlpl");
let c = 0;
let blpl = document.querySelector(".blpl");
tlpl.addEventListener("click", function () {
  c--;
  if (c < 0) {
    c = 2;
  }
  for (let i = 0; i < bg.length; i++) {
    if (i == c) {
      bg[c].style.opacity = 1;
      change[c].style.opacity = 1;
    } else {
      bg[i].style.opacity = 0;
      change[i].style.opacity = 0;
    }
  }
});

blpl.addEventListener("click", function () {
  c++;
  if (c > 2) {
    c = 0;
  }
  for (let i = 0; i < bg.length; i++) {
    if (i == c) {
      bg[c].style.opacity = 1;
      change[c].style.opacity = 1;
    } else {
      bg[i].style.opacity = 0;
      change[i].style.opacity = 0;
    }
  }
});

//click event for popular covilla location
let countries = document.querySelectorAll(".countries");
let pdot = document.querySelectorAll(".dot");
let chosen = document.querySelectorAll(".chosen");
let number = 0;
let country = countries[0].parentNode;
let vacations = document.querySelectorAll(".vacation_location");
country.addEventListener("click", function (e) {
  let index = e.target.dataset.id;
  for (let i = 0; i < countries.length; i++) {
    if (i == index) {
      countries[i].style.borderBottom = "2px solid #000";
      pdot[i].style.backgroundColor = "#000";
      chosen[i].style.transform = "scale(3)";
      vacations[i].style.display = "flex";
    } else {
      chosen[i].style.transform = "scale(1)";
      pdot[i].style.backgroundColor = "rgba(192, 192, 211, 1)";
      countries[i].style.borderBottom = "2px solid rgba(192, 192, 211, 0.5)";
      vacations[i].style.display = "none";
    }
    if (i < index) {
      countries[i].style.borderBottom = "2px solid #000";
      pdot[i].style.backgroundColor = "#000";
    }
  }
});

//mouseover event for the video in header
let doverlay = document.querySelector(".doverlay");
let doverlay1 = document.querySelector(".doverlay1");
let doverlay2 = document.querySelector(".doverlay2");
let fcircle = document.querySelector(".first_circle");
let v = document.querySelector("video");
let scircle = document.querySelector(".second_circle");
let o1 = document.querySelector(".overlay1");
let scale = 2;
let d1, d2;

o1.addEventListener("mouseover", function (e) {
  fcircle.style.backgroundColor = "#fff";
  fcircle.style.transform = "scale(0.9)";
  scircle.style.backgroundColor = "#000";
  v.play();
  v.style.opacity = 1;
  v.style.transform = "scale(2)";
  doverlay.style.opacity = 1;
  doverlay.style.transform = "scale(2)";

  o1.addEventListener("mousemove", function (e) {
    let left = e.offsetX - fcircle.offsetWidth / 2;
    let top = e.offsetY - fcircle.offsetHeight / 2;
    if (left > o1.offsetWidth - fcircle.offsetWidth) {
      left = o1.offsetWidth - fcircle.offsetWidth;
    } else if (left < 0) {
      left = 0;
    }
    if (top > o1.offsetHeight - fcircle.offsetHeight) {
      top = o1.offsetHeight - fcircle.offsetHeight;
    } else if (top < 0) {
      top = 0;
    }
    fcircle.style.top = `${top}px`;
    fcircle.style.left = `${left}px`;
  });
  d1 = setInterval(() => {
    doverlay1.style.opacity = 1;
    doverlay1.style.transform = "scale(2.4)";
    doverlay2.style.transform = "scale(2.8)";
    doverlay2.style.zIndex = "2";
    doverlay1.style.zIndex = "3";
  }, 2000);

  d2 = setInterval(() => {
    doverlay2.style.opacity = 1;
    doverlay2.style.transform = "scale(1)";
    doverlay1.style.transform = "scale(1)";
  }, 4000);
});

o1.addEventListener("mouseout", function (e) {
  fcircle.style.backgroundColor = "transparent";
  fcircle.style.transform = "scale(1)";
  scircle.style.backgroundColor = "rgba(192, 192, 211, 0.2)";
  v.style.opacity = 0;
  v.style.transform = "scale(1)";
  doverlay.style.opacity = 0;
  doverlay.style.transform = "scale(1)";
  v.pause();
  clearInterval(d1);
  clearInterval(d2);
});
