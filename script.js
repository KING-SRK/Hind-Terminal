// ১. মেনু টগলের ফাংশন
function initializeMenu() {
  const menuBtn = document.querySelector(".menu-btn");
  const sideMenu = document.querySelector(".side-menu");
  const icon = document.querySelector(".bars");

  if (menuBtn && sideMenu) {
    menuBtn.onclick = () => {
      sideMenu.classList.toggle("active");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
      console.log("Menu Toggled! 🍔");
    };
  }
}

// ২. কাউন্টার অ্যানিমেশন ফাংশন
function initCounters() {
  const counters = document.querySelectorAll(".counter");
  if (counters.length === 0) return;

  const animateCounter = (el) => {
    const target = +el.getAttribute("data-target");
    const duration = 2000;
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      el.innerText = Math.floor(progress * target);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.innerText = target;
      }
    };
    window.requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
        } else {
          entry.target.innerText = "0";
        }
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((counter) => observer.observe(counter));
}

// ৩. হেডার ও ফুটার লোড করার ফাংশন
async function loadComponent(id, url) {
  const placeholder = document.getElementById(id);
  if (!placeholder) return;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to load ${url}`);
    const data = await response.text();
    placeholder.innerHTML = data;

    if (id === "header-placeholder") {
      initializeMenu();
    }

    // কন্টেন্ট আসার পর AOS কে জানানো
    if (typeof AOS !== "undefined") {
      setTimeout(() => {
        AOS.init();
        AOS.refreshHard(); // একটু কড়াভাবে রিফ্রেশ করা
      }, 200);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// ৪. MutationObserver - এটা জাদুর মতো কাজ করবে ✨
// এটা পেজে নতুন কোনো পরিবর্তন দেখলেই AOS কে রিফ্রেশ করবে
const observer = new MutationObserver(() => {
  if (typeof AOS !== "undefined") {
    AOS.refresh();
  }
});

// ৫. পেজ লোড হওয়ার পর সবকিছু রান করা
document.addEventListener("DOMContentLoaded", () => {
  // Observer চালু করা
  observer.observe(document.body, { childList: true, subtree: true });

  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }

  loadComponent("header-placeholder", "/html/header.html");
  loadComponent("footer-placeholder", "/html/footer.html");

  initializeMenu();
  initCounters();
});
