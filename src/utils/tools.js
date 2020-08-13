/**
 * Function Throttle
 *
 * @export
 * @param {*} fn
 * @param {number} [wait=250]
 * @returns
 */
export function throttle (fn, wait = 250) {
  let inThrottle, lastFn, lastTime
  return function () {
    const context = this

    const args = arguments
    if (!inThrottle) {
      fn.apply(context, args)
      lastTime = Date.now()
      inThrottle = true
    } else {
      clearTimeout(lastFn)
      lastFn = setTimeout(function () {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args)
          lastTime = Date.now()
        }
      }, Math.max(wait - (Date.now() - lastTime), 0))
    }
  }
}

/**
 * Function Debounce
 *
 * @param {*} fn
 * @param {number} [ms=300]
 * @returns
 */
export function debounce (fn, ms = 300) {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}
