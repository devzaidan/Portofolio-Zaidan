function scrollProjects(direction) {
  const container = document.getElementById('scroll-container');
  container.scrollBy({ left: direction * 320, behavior: 'smooth' });
}

function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}

//typing effect
const texts = [
  "Full Stack Developer",
  "Graphic Designer",
  "IT Support"
];
let count = 0;
let currentText = '';
let isDeleting = false;

function type() {
  const tag = document.getElementById("typingText");
  if (count === texts.length) count = 0;
  let fullText = texts[count];

  if (isDeleting) {
    currentText = fullText.substring(0, currentText.length - 1);
  } else {
    currentText = fullText.substring(0, currentText.length + 1);
  }

  tag.textContent = currentText;

  let typeSpeed = isDeleting ? 100 : 150;

  if (!isDeleting && currentText === fullText) {
    typeSpeed = 1000;
    isDeleting = true;
  } else if (isDeleting && currentText === '') {
    isDeleting = false;
    count++;
    typeSpeed = 600;
  }

  setTimeout(type, typeSpeed);
}

//clone logo track
function initLogoLoop() {
  const track = document.querySelector('.logo-track');
  if (!track) return;

//duplikat
  const items = Array.from(track.children);
  items.forEach(node => {
    const clone = node.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });

  void track.offsetWidth;
}

document.addEventListener("DOMContentLoaded", () => {
  type();
  initLogoLoop();
});