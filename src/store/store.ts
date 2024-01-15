import ImageDiv from "../component/ImageDiv";
import { observable } from "../observer/observer";
import { StateType } from "../type/type";
import reRender from "../util/render";

export const store = {
  state: observable({
    name: "",
    imageURL: "",
    color: "",
  }),

  setState(newState: Partial<StateType>) {
    for (const [key, value] of Object.entries(newState)) {
      this.state[key as keyof Partial<StateType>] = value;
    }
    reRender('image-article',ImageDiv('image-article'))
  },
};
