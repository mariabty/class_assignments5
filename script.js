// === Responsive Navbar ===
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// === Image Gallery ===
const thumbnails = document.querySelectorAll('.thumbnails img');
const displayedImg = document.getElementById('displayed-img');

thumbnails.forEach(img => {
  img.addEventListener('click', () => {
    displayedImg.src = img.src;
  });
});

// === Form Validation ===
const form = document.getElementById('contactForm');
const errorMsg = document.getElementById('error-msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirm = document.getElementById('confirm').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !password || !confirm || !message) {
    errorMsg.textContent = "Please fill in all fields.";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    errorMsg.textContent = "Enter a valid email address.";
    return;
  }

  if (password !== confirm) {
    errorMsg.textContent = "Passwords do not match.";
    return;
  }

  errorMsg.style.color = "green";
  errorMsg.textContent = "Form submitted successfully!";
  form.reset();
});

// === Smooth Scroll Animation (fade-in) ===
const fadeElems = document.querySelectorAll('.fade-in');

function checkFadeIn() {
  fadeElems.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', checkFadeIn);
