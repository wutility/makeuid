(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.mk = {}));
}(this, function (exports) { 'use strict';
  function makeuid() {
    return new Date().toISOString().slice(0, 19).replace(/[-:]/g, randStr(1));
  }
  function randStr(len) {
    var result = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charsLen = chars.length,
        i = 0;
    for (; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * charsLen));
    }
    return result;
  }
  exports.makeuid = makeuid;
  exports.randStr = randStr;
  Object.defineProperty(exports, '__esModule', { value: true })
}))