import Component from "../base/Component";
import { store } from "../store/store";

class ImageDiv extends Component {
  html() {
    return `<div
      class="image-div"
      style="background-image: url(${store.state.imageURL});
      "
    >
      <h1
        style="color: ${store.state.color}; 
      mix-blend-mode: ${store.state.name};"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>
    </div>`;
  }
  state() {
    store.subscribe(this)
  }
}

export default ImageDiv;
