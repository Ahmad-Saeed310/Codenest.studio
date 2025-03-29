const scroll = new LocomotiveScroll({
  el: document.querySelector('#main1'),
  smooth: true,
  direction: 'horizontal'
});

const scrollContainer = document.querySelector("#scrollContainer");


function scrollLeft() {
  scrollContainer.scrollBy({ left: -700, behavior: "smooth" });
  checkScroll();
}
function scrollRight() {
  scrollContainer.scrollBy({ left: 700, behavior: "smooth" });
  checkScroll();
}


// here is the cursor part of this page
let main1 = document.querySelector("#main1");

main1.addEventListener("mousemove", function (dets) {
  // Your original cursor movement
  gsap.to(cursor, {
    x: dets.x - cursor.offsetWidth / 2,
    y: dets.y - cursor.offsetHeight / 2,
    duration: 0.7,
    ease: "easeIn",
  });
});

var bovers = document.querySelectorAll(".scroll-item");

bovers.forEach((bover) => {
  bover.addEventListener("mouseenter", function () {
    cursor.innerHTML =
      '<div style="width: 100%; height: 100%; color:white; display: flex; align-items: center; justify-content: center; font-size: 0.5em;"><h1>[OPEN]</h1></div>';
    cursor.style.cursor = "pointer";
    gsap.to(cursor, {
      scale: 2,
      opacity: 0.6,
      backgroundColor: "#202020d0",
      border: "0vw solid transparent",
      duration: 0.3,
    });
  });

  bover.addEventListener("mouseleave", function () {
    cursor.innerHTML = "";
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
      backgroundColor: "transparent",
      border: ".3vw solid #a8a29e",
      duration: 0.3,
    });
  });
});


function nav(){
  var navelem = document.querySelectorAll(".navelempro");

navelem.forEach(navelem => {
  navelem.addEventListener("mouseenter", function() {
    gsap.to(cursor, {
      scale: 2.8,
      opacity: 0.4,
      backgroundColor: "#c2c2c2", 
      border: '0vw solid transparent',
      duration: 0.3
    });
  });

  navelem.addEventListener("mouseleave", function() {
    cursor.innerHTML = '';
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
      backgroundColor: "transparent",
      border: '.3vw solid #a8a29e',
      duration: 0.3
    });
  });
});

}
nav();