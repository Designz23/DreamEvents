// Auto slideshow with manual controls
let slideIndex = 0;
let slides = document.getElementsByClassName("gallery-slide");

function showSlidesAuto() {
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlidesAuto, 5000);
}
showSlidesAuto();

function showSlide(n) {
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slideIndex = n;
  if (slideIndex > slides.length) slideIndex = 1;
  if (slideIndex < 1) slideIndex = slides.length;
  slides[slideIndex - 1].style.display = "block";
}

document.querySelector(".prev").addEventListener("click", () => {
  showSlide(slideIndex - 1);
});
document.querySelector(".next").addEventListener("click", () => {
  showSlide(slideIndex + 1);
});

// Scroll fade-in
function revealFadeIn() {
  const faders = document.querySelectorAll(".fade-in");
  const trigger = window.innerHeight * 0.85;

  faders.forEach((el) => {
    const box = el.getBoundingClientRect();
    if (box.top < trigger) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealFadeIn);
window.addEventListener("load", revealFadeIn);

// Navbar shrink
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("shrink", window.scrollY > 50);
});

// Back to Top Button
const backToTopBtn = document.createElement("button");
backToTopBtn.textContent = "↑";
backToTopBtn.setAttribute("id", "backToTop");
backToTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: none;
  font-size: 1.5rem;
  background: #D8A7B1;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 999;
`;
document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Typing animation
const heroTitle = document.querySelector(".hero-overlay h1");
const originalText = "Turning Dreams Into Reality";
let i = 0;
function typeEffect() {
  if (i < originalText.length) {
    heroTitle.textContent += originalText.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
heroTitle.textContent = "";
typeEffect();

// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery-slide img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});