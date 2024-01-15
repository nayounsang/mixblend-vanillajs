import ColorPicker from "./component/ColorInput";
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
  Radio(e, "radio-group");
});
ImageInput("file-input-container");
ColorPicker("color-input-container");
ImageDiv("image-article");
