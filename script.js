// ===== DYNAMIC FOOTER YEAR =====
const footer = document.querySelector("footer");
const year = new Date().getFullYear();
if (footer) {
  footer.innerHTML = `© ${year} Alexis Torres`;
}

// ===== SMOOTH SCROLL FOR INTERNAL LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== FADE-IN SECTIONS ON SCROLL =====
const sections = document.querySelectorAll("section");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach(section => {
  section.classList.add("pre-fade"); // initial hidden state
  sectionObserver.observe(section);
});

console.log("Portfolio loaded successfully 🚀");
