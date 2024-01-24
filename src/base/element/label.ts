import { ConstructorType } from "./../core/type/constructor";
import Tag from "../core/Tag";

export default class Label extends Tag<typeof HTMLLabelElement.prototype> {
  el: HTMLLabelElement;
  constructor({
    parentId,
    curId,
    props = {},
  }: ConstructorType<typeof HTMLLabelElement.prototype>) {
    super({ parentId: parentId, curId: curId, props: props });
    this.el = document.createElement("label");
  }
}
