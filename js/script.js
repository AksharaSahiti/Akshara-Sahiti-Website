// Dark mode toggle
const toggle = document.querySelector('#themeToggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Optional: Change button icon between moon and sun
    toggle.textContent = document.body.classList.contains('dark-mode') ? "☀️" : "🌙";
  });
}

// Smooth scroll for anchor links
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

// Helper function to check if element is in viewport
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

// Animate skill bars when they enter the viewport
function animateSkillBars() {
  const bars = document.querySelectorAll('.skill-progress');
  bars.forEach(bar => {
    if (isInViewport(bar) && !bar.classList.contains('animated')) {
      bar.classList.add('animated');
      bar.style.width = bar.style.getPropertyValue('--skill-level');
    }
  });
}

// Run animation on scroll and page load
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);
