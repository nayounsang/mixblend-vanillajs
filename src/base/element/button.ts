import { ConstructorType } from "./../core/type/constructor";
import Tag from "../core/Tag";

export default class Button extends Tag<typeof HTMLButtonElement.prototype> {
  el: HTMLButtonElement
  constructor({
    parentId,
    curId,
    props = {},
  }: ConstructorType<typeof HTMLButtonElement.prototype>) {
    super({ parentId: parentId, curId: curId, props: props });
    this.el = document.createElement("button");
  }
}
