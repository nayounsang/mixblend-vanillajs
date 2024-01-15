import { store } from "../store/store";
import makeComponent from "../util/makeComponent";

const Radio = (value: string, parent: string) => {
  const radio = document.createElement("label");
  radio.innerHTML = `
    <input type="radio" name="name" value="${value}">
    ${value}`;
  const radioInput = radio.querySelector("input");
  radioInput?.addEventListener("change", (event: Event) => {
    const tar = event.target as HTMLInputElement;
    store.setState({name:tar.value})
  });
  makeComponent(parent, radio);
  return radio
};

export default Radio;
