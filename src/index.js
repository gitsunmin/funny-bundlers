import "./style.css";
import miniunse from "./../assets/images/miniunse.jpeg";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = "Hello webpack";
  element.classList.add("hello");
  const img = document.createElement("img");
  img.src = miniunse;
  element.appendChild(img);

  return element;
}

document.body.appendChild(component());
