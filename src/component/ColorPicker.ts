import Component2 from "../base/Component2";
import { store } from "../store/store";

class ColorPicker extends Component2 {
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
      console.error(`엘리먼트를 찾을 수 없습니다.`);
      return;
    }
    input.addEventListener("change", (event: Event) => {
      const tar = event.target as HTMLInputElement;
      store.setState({ color: tar.value });
    });
  }
}

export default ColorPicker;
