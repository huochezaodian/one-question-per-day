// 实现symbol polyfill
//题解：如果浏览器不支持情况下 写出让代码让浏览器支持symbol

// TODO: 完善特性，参考：https://github.com/medikoo/es6-symbol/blob/master/polyfill.js
module.exports = SymbolPolyfill = function Symbol(description) {
  var symbol;
  // new 报错
  if (this instanceof Symbol) throw new TypeError("Symbol is not a constructor");
  description = description === undefined ? "" : String(description);
  return defineProperties(symbol, {
    __description__: {
      value: description,
      writable: false,
      enumerable: false,
      configurable: false
    },
  });
};

defineProperties(SymbolPolyfill.prototype, {
  toString: function () {
    return "Symbol (" + this.__description__ + ")";
  },
});