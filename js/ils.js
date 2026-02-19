document.querySelectorAll(".service-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    // আগের অ্যাক্টিভ ক্লাস সরিয়ে ফেলো
    document.querySelector(".service-item.active").classList.remove("active");
    // নতুনটাতে অ্যাড করো
    item.classList.add("active");
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 3 },
  },
});
