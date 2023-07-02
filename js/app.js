let wrapper = document.querySelector('.wrapper');
let color = [];
window.addEventListener('DOMContentLoaded', () => {
  for (let i=0; i<=2; i++) {
    color.push(Math.floor(Math.random() * 255));
  }
  wrapper.style.borderImage = `linear-gradient(to right, #222, #222, #222, #222, rgb(${color}))`;
  wrapper.style.borderImageSlice = `1`;
});