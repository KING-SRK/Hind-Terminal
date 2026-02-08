// ১. কাউন্টার অ্যানিমেশন সেটআপ (About পেজের জন্য)
function initAboutCounters() {
  const counters = document.querySelectorAll(".counter");

  if (counters.length === 0) return; // যদি পেজে কোনো কাউন্টার না থাকে তবে ফিরে যাবে

  const animateCounter = (el) => {
    const target = +el.getAttribute("data-target");
    const duration = 2500; // ২.৫ সেকেন্ডে অ্যানিমেশন হবে
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
          // একবার এনিমেট হয়ে গেলে অবজার্ভ করা বন্ধ করতে পারো (ঐচ্ছিক)
          // observer.unobserve(entry.target);
        } else {
          entry.target.innerText = "0"; // স্ক্রল করে চলে গেলে আবার ০ হবে
        }
      });
    },
    { threshold: 0.5 }, // এলিমেন্ট ৫০% সামনে আসলে শুরু হবে
  );

  counters.forEach((counter) => observer.observe(counter));
}

// ২. সার্ভিস ট্যাব বা অন্য কোনো ইন্টারেকশন (যদি থাকে)
function initServiceTabs() {
  const tabButtons = document.querySelectorAll(".service-btn");
  if (tabButtons.length === 0) return;

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // তোমার ট্যাবের লজিক এখানে লিখবে জয়
      console.log("Tab clicked! 📂");
    });
  });
}

// ৩. পেজ লোড হওয়ার পর শুধু About পেজের ফাংশনগুলো রান করবে
document.addEventListener("DOMContentLoaded", () => {
  initAboutCounters();
  initServiceTabs();
  console.log("About page JS specific logic initialized! ✨");
});

document.addEventListener("DOMContentLoaded", () => {
  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach((card) => {
    // মাউস কার্ডের ওপর নিয়ে গেলে
    card.addEventListener("mouseenter", () => {
      // প্রথমে সব কার্ড থেকে active ক্লাস সরিয়ে দাও
      serviceCards.forEach((c) => {
        c.classList.remove("active");
        const text = c.querySelector(".service-card-text");
        if (text) text.classList.remove("active");
      });

      // বর্তমান কার্ডে active ক্লাস যোগ করো
      card.classList.add("active");
      const activeText = card.querySelector(".service-card-text");
      if (activeText) activeText.classList.add("active");
    });
  });
});
