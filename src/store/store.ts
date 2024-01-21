import Component from "../base/Component";
import { StateType } from "../type/type";

let subscribers:Set<Component> = new Set();

export const store = {
  state:{
    name: "",
    imageURL: "",
    color: "",
  },
  subscribe(component:Component) {
    subscribers.add(component)
  }
  ,
  setState(newState: Partial<StateType>) {
    for (const [key, value] of Object.entries(newState)) {
      this.state[key as keyof Partial<StateType>] = value;
    }
    subscribers.forEach((component)=>{
      component.render()
    })
  },
};
