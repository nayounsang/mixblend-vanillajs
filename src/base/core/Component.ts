class Component<T = Record<string | number, any>> {
  parentId: string;
  curId: string;
  props: T;
  #el: HTMLElement = document.createElement("div");
  constructor(parentId: string, curId: string, props: T = {} as T) {
    this.parentId = parentId;
    this.curId = `${parentId}-${curId}`;
    this.props = props;
  }
  /**해당 컴포넌트 내부의 html템플릿 */
  html(): string {
    return ``;
  }
  /**해당 컴포넌트에서 발생하는 이벤트 */
  event() {}
  /**컴포넌트를 랜더 시키는 함수 */
  render() {
    this.#el.innerHTML = this.html();
  }
  state() {}
  /**초기화시 실행 */
  init() {
    const parent = document.getElementById(this.parentId);
    if (parent === null) {
      console.error(`${this.parentId} does not exist.`);
      return;
    }
    this.#el.id = this.curId;
    parent.appendChild(this.#el);
    this.state();
    this.render();
    this.event();
  }
  /** 아이디를 얻어올 수 있음*/
  getId(): { parentId: string; curId: string } {
    return { parentId: this.parentId, curId: this.curId };
  }
  /** 현재 엘리먼트를 얻어옴 */
  getEl(): HTMLElement {
    return this.#el;
  }
}

export default Component;
