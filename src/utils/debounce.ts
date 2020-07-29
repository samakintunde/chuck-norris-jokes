export function debounce(func: Function, wait: number, immediate?: boolean) {
  let timeout: number;

  return function() {
    // @ts-ignore
    let context = this,
      args = arguments;
    let later = function() {
      // @ts-ignore
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    // @ts-ignore
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
