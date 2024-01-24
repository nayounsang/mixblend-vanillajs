import Component from "../base/core/Component";
import { store } from "../store/store";

class ColorPicker extends Component {
  html() {
    return `
    <label>
      <input type="color">
      글자 색을 선택해주세요.
    </label>
    `;
  }
  event() {
    const el = this.getEl();
    const input = el.querySelector(`input`);
    if (input === null) {
      console.error(`${this.curId}내부 엘리먼트를 찾을 수 없습니다.`);
      return;
    }
    input.addEventListener("change", (event: Event) => {
      const tar = event.target as HTMLInputElement;
      store.setState({ color: tar.value });
    });
  }
}

export default ColorPicker;
