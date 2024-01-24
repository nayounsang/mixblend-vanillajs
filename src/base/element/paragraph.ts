import { ConstructorType } from "./../core/type/constructor";
import Tag from "../core/Tag";

export default class ParaGraph extends Tag<
  typeof HTMLParagraphElement.prototype
> {
  el: HTMLParagraphElement;
  constructor({
    parentId,
    curId,
    props = {},
  }: ConstructorType<typeof HTMLParagraphElement.prototype>) {
    super({ parentId: parentId, curId: curId, props: props });
    this.el = document.createElement("p");
  }
}
