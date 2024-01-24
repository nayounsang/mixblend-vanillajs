import { ConstructorType } from "./../core/type/constructor";
import Tag from "../core/Tag";

export default class Anchor extends Tag<typeof HTMLAnchorElement.prototype> {
  el: HTMLAnchorElement;
  constructor({
    parentId,
    curId,
    props = {},
  }: ConstructorType<typeof HTMLAnchorElement.prototype>) {
    super({ parentId: parentId, curId: curId, props: props });
    this.el = document.createElement("a");
  }
}
