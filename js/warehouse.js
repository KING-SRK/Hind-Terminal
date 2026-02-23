const gtSwiper = new Swiper(".gt-swiper-instance", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  // Navigation arrows connect
  navigation: {
    nextEl: ".gt-next",
    prevEl: ".gt-prev",
  },
  pagination: {
    el: ".gt-pagination",
    clickable: true,
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
