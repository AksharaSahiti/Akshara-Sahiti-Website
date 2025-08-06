
// Dark mode toggle (Optional enhancement)
const toggle = document.querySelector('#darkModeToggle');
if(toggle){
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('bg-light');
  });
}
// Smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetID);
    if (targetElement) {
      window.scrollTo({ top: targetElement.offsetTop - 70, behavior: 'smooth' });
    }
  });
}
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
document.getElementById('themeToggle').onclick = function() {
  document.body.classList.toggle('dark-mode');
}


window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);
