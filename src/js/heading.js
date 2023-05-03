import "../scss/heading.scss";
export default function heading() {
  const span = document.createElement("span");
  const body = document.querySelector("body");
  span.innerHTML = `Well video works but i used file loader in webpack5 (u can see it in config file). Used responsive-video-background and html video tag at the same time while keeping video tag display: none(look at style.scss and index.html) <br/><mark> Also checkout the responsiveness while keeping the video height cosistent.</mark>`;
  // "If you take a look at the DOM .... you can see the mp4 has been injected but video doesn't show up in UI and video goes inside that gold box updated";
  body.appendChild(span);
}
