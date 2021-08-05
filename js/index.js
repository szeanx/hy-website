// init animations
new WOW().init();

// hero title animation
var textWrapper = document.querySelector(".hero-title");
textWrapper.innerHTML = textWrapper.textContent.replace(
 /\S/g,
 "<span class='letter'>$&</span>"
);
$(document).ready(function () {
 anime.timeline({ loop: false }).add({
  targets: ".hero-title .letter",
  translateY: [120, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 1400,
  delay: (el, i) => 2000 + 40 * i,
 });
});

// animations
var t1 = new TimelineMax({ paused: true });

TweenMax.from(".hero-logo", 2, {
 y: 20,
 opacity: 0,
 ease: Expo.easeInOut,
 delay: 1,
});

TweenMax.from(".menu-toggle", 2, {
 y: 20,
 opacity: 0,
 ease: Expo.easeInOut,
 delay: 1.2,
});

t1.to(".overlay", 1, {
 opacity: 1,
 ease: Expo.easeInOut,
});

t1.staggerFrom(
 ".menu ul li",
 1,
 { y: 100, opacity: 0, ease: Expo.easeOut },
 0.1
);

// menu settings
t1.reverse();
$(document).on("click", ".menu-toggle", function () {
 // set visibility to visible so its accessible
 t1.reversed(!t1.reversed());
 $(".overlay").css("visibility", "visible");
});

$(document).on("click", ".close-btn", function () {
 // animate then set visibility back to hidden
 t1.reversed(!t1.reversed());
 setTimeout(() => {
  $(".overlay").css("visibility", "hidden");
 }, 1300);
});

t1.reverse();
$(document).on("click", "li", function () {
 t1.reversed(!t1.reversed());
});

// parallax effect
var image = document.getElementsByClassName("hero-img-parallax");
new simpleParallax(image, {
 scale: 1.8,
});
