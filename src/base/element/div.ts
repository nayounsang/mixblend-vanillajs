import { ConstructorType } from "./../core/type/constructor";
import Tag from "../core/Tag";

export default class Div extends Tag<typeof HTMLDivElement.prototype> {
  el: HTMLDivElement;
  constructor({
    parentId,
    curId,
    props = {},
  }: ConstructorType<typeof HTMLDivElement.prototype>) {
    super({ parentId: parentId, curId: curId, props: props });
    this.el = document.createElement("div");
  }
}
