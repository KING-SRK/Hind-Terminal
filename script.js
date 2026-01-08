function menuToggle() {
  const menuBtn = document.querySelector(".fa-bars");
  const sideMenu = document.querySelector(".side-menu");

  menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
    menuBtn.classList.toggle("fa-xmark");
  });
}

menuToggle();

AOS.init({
  duration: 1000, // অ্যানিমেশন ১ সেকেন্ড ধরে চলবে
  offset: 120, // স্ক্রিন থেকে কতটা দূরত্বে অ্যানিমেশন শুরু হবে
  once: false, // false মানে স্ক্রল উপরে তুললে আবার অ্যানিমেশন হবে (রিভার্স)
  mirror: true, // এলিমেন্ট পার হয়ে উপরে চলে গেলে আবার নামার সময় অ্যানিমেশন হবে
  easing: "ease-in-out", // অ্যানিমেশনটি মসৃণ হবে
});

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const animateCounter = (el) => {
    const target = +el.getAttribute("data-target");
    const duration = 5000;
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // সংখ্যাটি ডাইনামিক ভাবে বাড়ছে
      el.innerText = Math.floor(progress * target);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.innerText = target; // শেষে টার্গেট নাম্বার সেট হবে
      }
    };

    window.requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // এলিমেন্ট সামনে আসলে এনিমেশন শুরু হবে
          animateCounter(entry.target);
        } else {
          // স্ক্রল করে চলে গেলে সংখ্যা আবার ০ হয়ে যাবে (রিভার্স এনিমেশন)
          entry.target.innerText = "0";
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
});
