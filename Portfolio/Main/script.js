// Fade Out Top Section and Fade In Main Content
window.addEventListener("DOMContentLoaded", () => {
  const topSection = document.getElementById("top");
  const mainContent = document.querySelector(".main-container");

  setTimeout(() => {
    topSection.style.animation = "fadeOut 3s forwards";

    setTimeout(() => {
      topSection.style.display = "none";
      mainContent.style.animation = "fadeIn 4s forwards";
    }, 3000);
  }, 3500);
});

// Typing Effect for Welcome Message
window.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".text");
  const message = "Welcome to my Portfolio!";
  let index = 0;

  function type() {
    if (index < message.length) {
      textElement.textContent += message.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type();
});

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("show");
});

// Neon glow for "Front-End Developer"
const neonText = document.getElementById("neon-text");

// Your color palette
const neonColors = [
  "#c27aff",
  "#ad46ff",
  "#9810fa",
  "#8200db",
  "#6e11b0",
  "#59168b",
];

let i = 0;

function neonPulse() {
  neonText.style.textShadow = `
    0 0 10px ${neonColors[i]},
    0 0 20px ${neonColors[i]},
    0 0 40px ${neonColors[i]}
  `;
  neonText.style.color = neonColors[i];

  i = (i + 1) % neonColors.length;
}

// Run every 300ms for smooth pulse
setInterval(neonPulse, 300);

// Reveal on scroll effect for profile content
const revealElements = document.querySelectorAll(
  "#profile .content, #profile img"
);

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect().top;

    if (rect < triggerBottom) {
      el.classList.add("reveal-visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

document.querySelectorAll(".tech-item").forEach((item) => {
  const percentageText = item.querySelector(".skill-head p:last-child");
  const progressBar = item.querySelector(".progress");

  const targetPercent = parseInt(percentageText.textContent);

  let counterInterval;

  item.addEventListener("mouseenter", () => {
    progressBar.style.width = targetPercent + "%";

    let count = 0;
    clearInterval(counterInterval);

    counterInterval = setInterval(() => {
      if (count <= targetPercent) {
        percentageText.textContent = count + "%";
        count++;
      } else {
        clearInterval(counterInterval);
      }
    }, 15);
  });

  item.addEventListener("mouseleave", () => {
    progressBar.style.width = "0%";
    clearInterval(counterInterval);
    percentageText.textContent = targetPercent + "%";
  });
});

// Reveal tech items on scroll
const techItems = document.querySelectorAll(".tech-item");
const revealTechOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;
  techItems.forEach((item) => {
    const rect = item.getBoundingClientRect().top;
    if (rect < triggerBottom) {
      item.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", revealTechOnScroll);
window.addEventListener("load", revealTechOnScroll);
