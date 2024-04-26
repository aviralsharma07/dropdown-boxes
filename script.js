const dropDown = document.getElementById("dropdown-box");
const container = document.querySelector(".container");

document.addEventListener("DOMContentLoaded", () => {
  for (var i = 1; i <= 250; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    dropDown.appendChild(option);
  }
});

dropDown.addEventListener("change", () => {
  container.innerHTML = "";

  let number = parseInt(dropDown.value);
  console.log(typeof number);

  if (number > 0) {
    for (var i = 0; i < number; i++) {
      const box = document.createElement("div");
      box.innerHTML = "Box " + (i + 1);
      box.className = "box";
      container.appendChild(box);
    }
  }
});
