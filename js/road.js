document.addEventListener("DOMContentLoaded", function () {
  // RDM Slider
  const slider = document.querySelector(".rdm-slider");
  if (slider) {
    slider.classList.add("swiper");

    slider.innerHTML =
      '<div class="swiper-wrapper">' +
      slider.innerHTML.replace(
        /class="rdm-slide"/g,
        'class="rdm-slide swiper-slide"',
      ) +
      "</div>";

    new Swiper(".rdm-slider", {
      loop: true,
      spaceBetween: 20,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
      },
    });
  }

  // Salient Mobile
  new Swiper(".salientSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".salient-features-section-mobile .swiper-pagination",
      clickable: true,
    },
  });

  // Gallery
  var swiper = new Swiper(".gallerySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".gallery-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});
