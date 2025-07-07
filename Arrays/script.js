const fruits = ["Banana", "Banana", "Apple", "Mango"];
const colors = ["red", "green", "blue", "orange"]; // You can add more colors
let display = document.getElementById('demo');

function show() {
  let html = "";
  for (let i = 0; i < fruits.length; i++) {
    html += `<span style="color:${colors[i % colors.length]}">${fruits[i]}</span> `;
  }
  display.innerHTML = html;
  console.log(fruits.toString());
}