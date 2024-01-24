import { ConstructorType } from "./type/constructor";

// default: typeof HTMLElement.prototype
class Tag<T> {
  parentId: string;
  curId: string;
  props: Partial<T>;
  el: HTMLElement;
  constructor({ parentId, curId, props = {} }: ConstructorType<T>) {
    this.parentId = parentId;
    this.curId = `${parentId}-${curId}`;
    this.props = props;
    this.el = document.createElement("div");
  }
  /**초기화시 실행 */
  init() {
    const parent = document.getElementById(this.parentId);
    if (parent === null) {
      console.error(`${this.parentId} does not exist.`);
      return;
    }
    this.el.id = this.curId;
    for (const [k, v] of Object.entries(this.props as object)) {
      const attr = k as keyof typeof HTMLElement.prototype;
      (this.el as any)[attr] = v;
    }
    parent.appendChild(this.el);
  }
  /** 아이디를 얻어올 수 있음*/
  getId(): { parentId: string; curId: string } {
    return { parentId: this.parentId, curId: this.curId };
  }
  /** 현재 엘리먼트를 얻어옴 */
  getEl(): HTMLElement {
    return this.el;
  }
}

export default Tag;
