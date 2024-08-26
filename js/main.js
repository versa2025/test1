$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    dots: false,
    margin: 48,
    loop: true,
    items: 3,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2,
        margin: 32,
        dots: false,
        loop: true,
        //stagePadding: 10,
      },
      // breakpoint from 480 up
      601: {
        items: 3,
        dots: false,
        margin: 32,
        loop: true,
      },
      // breakpoint from 768 up
      1001: {
        items: 3,
        margin: 48,
        dots: false,
        loop: true,
      },
    },
  });
});

const videoBtn = document.querySelector("#video-btn");
const videoPicture = document.querySelector(".video__picture");
const videoWrapper = document.querySelector(".video");
const video = document.querySelector("#video-file");

videoBtn.addEventListener("click", function () {
  videoPicture.classList.add("hidden");
  videoWrapper.classList.remove("video-overlay");
  videoBtn.classList.add("none");

  if (video.paused) {
    video.play();
  }
});

video.addEventListener("click", function () {
  if (video.paused) {
    video.play();
  } else {
    videoWrapper.classList.add("video-overlay");
    videoBtn.classList.remove("none");
    video.pause();
  }
  video.pause();
});

// Mobile Nav
const openNavBtn = document.querySelector("#openMobileNav");
const closeNavBtn = document.querySelector("#closeMobileNav");
const mobileNav = document.querySelector("#mobileNav");

openNavBtn.onclick = function () {
  mobileNav.classList.remove("none");
  document.body.classList.add("no-scroll");
};
closeNavBtn.onclick = function () {
  mobileNav.classList.add("none");
  document.body.classList.remove("no-scroll");
};
