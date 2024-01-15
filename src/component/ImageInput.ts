import { store } from "../store/store";
import makeComponent from "../util/makeComponent";

const ImageInput = (parent: string) => {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.name = "image";
  fileInput.accept = "image/*";
  fileInput.addEventListener("change", (event) => {
    const tar = event.target as HTMLInputElement;
    if (tar.files === null) {
      return;
    }
    const file = tar.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      store.setState({ imageURL: e.target?.result as string });
    };
    reader.readAsDataURL(file);
  });
  makeComponent(parent, fileInput);
  return fileInput;
};

export default ImageInput;
