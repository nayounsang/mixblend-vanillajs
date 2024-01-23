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
const RadioGroup = document.getElementById(
  "radio-group-container"
) as HTMLElement;
RadioGroup.innerHTML = `${data
  .map((e) => {
    return new Radio({ name: e }).init();
  })
  .join("")}`;

const ImageInputContainer = document.getElementById(
  "file-input-container"
) as HTMLElement;
ImageInputContainer.innerHTML = `${new ImageInput().init()}`;

const ColorInputContainer = document.getElementById(
  "color-input-container"
) as HTMLElement;
ColorInputContainer.innerHTML = `${new ColorPicker().init()}`;

const ImageDivContainer = document.getElementById(
  "image-article"
) as HTMLElement;
ImageDivContainer.innerHTML = `${new ImageDiv().init()}`;

// HTMLDivElement 프로토타입의 키들을 불러오기
const divElementPrototypeKeys = Object.keys(
  Object.getPrototypeOf(HTMLDivElement.prototype)
);
type tmp = Partial<{ [key in (typeof divElementPrototypeKeys)[number]]: any }>;
