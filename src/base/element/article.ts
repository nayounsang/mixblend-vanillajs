import { ConstructorType } from "./../core/type/constructor";
import Tag from "../core/Tag";

export default class Article extends Tag<typeof HTMLElement.prototype> {
  constructor({
    parentId,
    curId,
    props = {},
  }: ConstructorType<typeof HTMLElement.prototype>) {
    super({ parentId: parentId, curId: curId, props: props });
    this.el = document.createElement("article");
  }
}
