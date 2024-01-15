import { StateType } from "../type/type";

let currentObserver: null | (() => void) = null;

export const observe = (fn: () => void) => {
  currentObserver = fn;
  fn();
  currentObserver = null;
};

export const observable = (states: StateType) => {
  Object.keys(states).forEach((key) => {
    let _value = states[key as keyof StateType];
    const observers = new Set<() => void>();
    Object.defineProperty(states, key, {
      get() {
        if (currentObserver !== null) observers.add(currentObserver);
        return _value;
      },

      set(value) {
        _value = value;
        observers.forEach((fn: () => void) => fn());
      },
    });
  });
  return states;
};
