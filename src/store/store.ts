import Component2 from "../base/Component2";
import { StateType } from "../type/type";

let subscribers:Set<Component2> = new Set();

export const store = {
  state:{
    name: "",
    imageURL: "",
    color: "",
  },
  subscribe(component:Component2) {
    subscribers.add(component)
    console.log(subscribers)
  },
  unSubscribe(component:Component2) {
    subscribers.delete(component)
  }
  ,
  setState(newState: Partial<StateType>) {
    for (const [key, value] of Object.entries(newState)) {
      this.state[key as keyof Partial<StateType>] = value;
    }
    subscribers.forEach((component)=>{
      component.render()
    })
    console.log('rerender!')
  },
};
