import Input from "./base/element/input";
import ColorPicker from "./component/ColorPicker";
import ImageDiv from "./component/ImageDiv";
import ImageInput from "./component/ImageInput";
import Radio from "./component/Radio";

const data = [
  "normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
  "plus-darker",
  "plus-lighter",
];
data.forEach((e) => {
  new Radio("radio-group-container", e, { name: e }).init();
});
new ImageInput("file-input-container", "image").init();
new ColorPicker("color-input-container", "input").init();
new ImageDiv("image-article","image").init()