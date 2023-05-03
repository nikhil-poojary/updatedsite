import "../scss/work.scss";

function workc() {
  const p = document.createElement("p");
  p.innerHTML = "this is a paragraph for work page";
  const body = document.querySelector("body");
  body.appendChild(p);
  console.log("work");
}

export default workc;
