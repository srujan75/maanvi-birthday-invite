/* ─────────────────────────────────────────
   Maanvi's 1st Birthday — script.js
   ───────────────────────────────────────── */

// ── PAGE LOADER ──
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  setTimeout(() => loader.classList.add('hidden'), 600);
});

// ── NAVIGATION ──
const navbar   = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
const navItems  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);

  // Scroll-to-top visibility
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);

  // Active section highlight
  let current = '';
  document.querySelectorAll('section').forEach(section => {
    if (pageYOffset >= section.offsetTop - 120) current = section.id;
  });
  navItems.forEach(item => {
    item.classList.toggle('active', item.getAttribute('href') === '#' + current);
  });
});

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  navLinks.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ── SCROLL TO TOP ──
const scrollTopBtn = document.getElementById('scroll-top');
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── CONFETTI ──
const canvas = document.getElementById('confetti-canvas');
const ctx    = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const COLORS = ['#e88aab', '#d4688e', '#c3aed6', '#d4a843', '#ffffff'];
const pieces = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height - canvas.height,
  r: Math.random() * 6 + 3,
  d: Math.random() * 100 + 50,
  color: COLORS[Math.floor(Math.random() * COLORS.length)],
  tilt: Math.floor(Math.random() * 10) - 10,
  tiltAngle: 0,
  tiltAngleIncrement: Math.random() * 0.05 + 0.04
}));

let angle = 0;
function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  angle += 0.008;
  pieces.forEach(p => {
    p.tiltAngle += p.tiltAngleIncrement;
    p.y += (Math.cos(angle + p.d) + 1 + p.r / 2) / 2;
    p.x += Math.sin(angle);
    p.tilt = Math.sin(p.tiltAngle) * 12;
    if (p.y > canvas.height) { p.x = Math.random() * canvas.width; p.y = -20; }
    ctx.beginPath();
    ctx.lineWidth  = p.r;
    ctx.strokeStyle = p.color;
    ctx.moveTo(p.x + p.tilt + p.r, p.y);
    ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
    ctx.stroke();
  });
  requestAnimationFrame(drawConfetti);
}
drawConfetti();

// ── COUNTDOWN ──
function updateCountdown() {
  const target = new Date('2026-06-02T12:00:00+05:30').getTime();
  const diff   = Math.max(target - Date.now(), 0);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('cd-days').textContent  = String(d).padStart(2, '0');
  document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
  document.getElementById('cd-mins').textContent  = String(m).padStart(2, '0');
  document.getElementById('cd-secs').textContent  = String(s).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ── LIGHTBOX ──
const images = [
  'Images/0.jpeg','Images/1.jpeg','Images/2.jpeg','Images/3.jpeg',
  'Images/4.jpeg','Images/5.jpg','Images/6.jpeg','Images/7.jpeg',
  'Images/8.jpeg','Images/9.jpeg','Images/10.jpeg'
];
let currentIdx = 0;

function openLightbox(idx) {
  currentIdx = idx;
  document.getElementById('lb-img').src = images[idx];
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function shiftLightbox(dir) {
  currentIdx = (currentIdx + dir + images.length) % images.length;
  document.getElementById('lb-img').src = images[currentIdx];
}

document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target.id === 'lightbox') closeLightbox();
});
document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowRight') shiftLightbox(1);
  if (e.key === 'ArrowLeft')  shiftLightbox(-1);
});

// Expose globally for inline onclick
window.openLightbox  = openLightbox;
window.closeLightbox = closeLightbox;
window.shiftLightbox = shiftLightbox;



// ── SCROLL REVEAL ──
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
