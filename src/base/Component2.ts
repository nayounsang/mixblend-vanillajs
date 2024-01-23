class Component<T = Record<string | number, any>> {
  props: T;
  #el: HTMLElement = document.createElement("div");
  constructor(props: T = {} as T) {
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
    this.event();
  }
  state() {}
  /**초기화시 실행 */
  init() {
    this.state();
    this.render();
    return this.#el.innerHTML;
  }
  /** 현재 엘리먼트를 얻어옴 */
  getEl(): HTMLElement {
    const child = this.#el.querySelector(':first-child')
    if (child === null) {
      throw new Error("빈 컴포넌트 입니다.");
    }
    if (Array.from(this.#el.children).length > 1) {
      throw new Error("하나의 엘리먼트만 등록 가능합니다.");
    }
    
    return child as HTMLElement
  }
}

export default Component;
