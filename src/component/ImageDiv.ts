import { store } from "../store/store";
import makeComponent from "../util/makeComponent";

const ImageDiv = (parent: string) => {
  const div = document.createElement("div");
  div.className = "image-div";
  div.style.backgroundImage = `url("${store.state.imageURL}")`;
  const text = document.createElement("h2");
  text.style.color = store.state.color;
  text.style.mixBlendMode = `${store.state.name}`;
  text.textContent = "Hello World!";
  div.appendChild(text);
  makeComponent(parent, div);
  return div;
};

export default ImageDiv;
