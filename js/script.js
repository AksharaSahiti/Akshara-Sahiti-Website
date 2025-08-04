
// Dark mode toggle (Optional enhancement)
const toggle = document.querySelector('#darkModeToggle');
if(toggle){
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('bg-light');
  });
}
