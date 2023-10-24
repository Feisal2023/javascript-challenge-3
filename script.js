// let color = Math.random();
// color = Math.random().toString(16);
// color = Math.random().toString(16).substring(2, 8);
// console.log(color);

const hexColor = document.querySelector(".hexColor");
const generate = document.querySelector(".generate");

const generateColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  hexColor.innerHTML = "#" + randomColor;
  document.body.style.backgroundColor = "#" + randomColor;
};

generate.addEventListener("click", generateColor);

generateColor();
