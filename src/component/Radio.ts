import Component2 from "../base/Component2";
import { store } from "../store/store";

class Radio extends Component2<{ name: string }> {
  html() {
    return `
      <label>
        <input
          type="radio"
          name="name"
          value="${this.props.name}"
          autocomplete="off"
        />
        ${this.props.name}
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
      store.setState({ name: tar.value });
    });
  }
}

export default Radio;
