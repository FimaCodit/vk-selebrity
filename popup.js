const config = {};

const name = document.getElementById('name');
const color = document.getElementById('color');
const button = document.getElementById('button');

button.addEventListener('click', () => {
  if (!name.value && !name.color) {
    config.name = name.value;
    config.color = color.value;
  }
});
export default config;
