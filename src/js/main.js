// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Show the "Back to Top" button when user scrolls down
window.onscroll = function () {
  let backToTopBtn = document.getElementById("backToTop");
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Scroll smoothly to the top when the button is clicked
document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Detect when elements scroll into view and add the "visible" class
const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver(
  function (entries, appearOnScroll) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      appearOnScroll.unobserve(entry.target);
    });
  },
  { threshold: 0.3 }
);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
