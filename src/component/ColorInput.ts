import { store } from "../store/store";
import makeComponent from "../util/makeComponent";


const ColorPicker = (parent: string) => {
  const color = document.createElement("label");
  color.innerHTML = `글자색을 선택해주세요.
    <input type="color">`;
  const input = color.querySelector("input");
  input?.addEventListener("change", (event: Event) => {
    const tar = event.target as HTMLInputElement;
    store.setState({color:tar.value})
  });

  makeComponent(parent, color);
  return color
};

export default ColorPicker;
