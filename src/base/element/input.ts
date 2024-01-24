import { ConstructorType } from "./../core/type/constructor";
import Tag from "../core/Tag";

export default class Input extends Tag<typeof HTMLInputElement.prototype> {
  el: HTMLInputElement;
  constructor({
    parentId,
    curId,
    props = {},
  }: ConstructorType<typeof HTMLInputElement.prototype>) {
    super({ parentId: parentId, curId: curId, props: props });
    this.el = document.createElement("input");
  }
}
