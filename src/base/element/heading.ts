import { ConstructorType } from "./../core/type/constructor";
import Tag from "../core/Tag";

export class H1 extends Tag<typeof HTMLHeadingElement.prototype> {
  el: HTMLHeadingElement;
  constructor({
    parentId,
    curId,
    props = {},
  }: ConstructorType<typeof HTMLHeadingElement.prototype>) {
    super({ parentId: parentId, curId: curId, props: props });
    this.el = document.createElement("h1");
  }
}

export class H2 extends Tag<typeof HTMLHeadingElement.prototype> {
  el: HTMLHeadingElement;
  constructor({
    parentId,
    curId,
    props = {},
  }: ConstructorType<typeof HTMLHeadingElement.prototype>) {
    super({ parentId: parentId, curId: curId, props: props });
    this.el = document.createElement("h2");
  }
}

export class H3 extends Tag<typeof HTMLHeadingElement.prototype> {
  el: HTMLHeadingElement;
  constructor({
    parentId,
    curId,
    props = {},
  }: ConstructorType<typeof HTMLHeadingElement.prototype>) {
    super({ parentId: parentId, curId: curId, props: props });
    this.el = document.createElement("h3");
  }
}

export class H4 extends Tag<typeof HTMLHeadingElement.prototype> {
  el: HTMLHeadingElement;
  constructor({
    parentId,
    curId,
    props = {},
  }: ConstructorType<typeof HTMLHeadingElement.prototype>) {
    super({ parentId: parentId, curId: curId, props: props });
    this.el = document.createElement("h4");
  }
}
