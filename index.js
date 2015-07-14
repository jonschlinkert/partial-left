'use strict';

/**
 * Partially apply arguments that are prepended to the arguments provided
 * to the returned function.
 *
 * @param  {Function|Object} `thisArg` Optionally pass a `this` argument to use as the invocation context.
 * @param  {Function} `fn`
 * @return {Function}
 */

module.exports = function partial(fn) {
  var leftArgs = [].slice.call(arguments, 1);
  var thisArg = null;

  if (typeof fn !== 'function') {
    thisArg = fn;
    fn = leftArgs.shift();
  }

  return function () {
    var args = leftArgs.concat([].slice.call(arguments));
    return fn.apply(thisArg, args);
  };
};
