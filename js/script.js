// --- DARK MODE TOGGLE WITH LOCALSTORAGE PERSISTENCE ---
const toggle = document.querySelector('#themeToggle');

// On page load, apply dark mode if previously enabled
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'on') {
    document.body.classList.add('dark-mode');
    if (toggle) toggle.textContent = "☀️";
  } else if (toggle) {
    toggle.textContent = "🌙";
  }
});

// Toggle dark mode and save preference
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'on' : 'off');
    toggle.textContent = isDark ? "☀️" : "🌙";
  });
}

// --- SMOOTH SCROLL FOR ANCHOR LINKS ---
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetID);
    if (targetElement) {
      window.scrollTo({ top: targetElement.offsetTop - 70, behavior: 'smooth' });
    }
  });
}

// --- SKILL BAR ANIMATION IN VIEWPORT ---
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

function animateSkillBars() {
  const bars = document.querySelectorAll('.skill-progress');
  bars.forEach(bar => {
    if (isInViewport(bar) && !bar.classList.contains('animated')) {
      bar.classList.add('animated');
      bar.style.width = bar.style.getPropertyValue('--skill-level');
    }
  });
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);
