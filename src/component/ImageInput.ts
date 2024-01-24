import Component from "../base/core/Component";
import { store } from "../store/store";

class ImageInput extends Component {
  html() {
    return `<input type="file" name="image" accept="image/*" />
    `;
  }
  event() {
    const input = this.getEl();
    if (input === null) {
      console.error(`${this.curId}내부 엘리먼트를 찾을 수 없습니다.`);
      return;
    }
    input.addEventListener("change", (event) => {
      const tar = event.target as HTMLInputElement;
      if (tar.files === null) {
        return;
      }
      const file = tar.files[0];
      store.setState({ imageURL: URL.createObjectURL(file) });
    });
  }
}

export default ImageInput;
