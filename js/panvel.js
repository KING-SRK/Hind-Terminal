var logisticsSwiper = new Swiper(".logisticsSwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".logistics-next",
    prevEl: ".logistics-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

var equipmentSwiper = new Swiper(".equipmentMobileSwiper", {
  spaceBetween: 30,
  loop: true,
  speed: 800,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".equipmentMobileSwiper .swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1, // Mobile
    },
    768: {
      slidesPerView: 2, // Tablet+
    },
    1024: {
      slidesPerView: 2, // Desktop
    },
  },
});