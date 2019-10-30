(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.mk = {}));
}(this, function (exports) { 'use strict';
  function makeuid() {
    var d = new Date().toISOString().slice(0, 19),r = '',i = 0,l = d.length;
    for (; i < l; i++) {
      var e = d[i];
      r += e === '-' || e === ':' ? randStr(1) : e;
    }
    return r
  }
  function randStr(len) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var r = '',charsLen = chars.length,i = 0;
    for (; i < len; i++) {
      r += chars.charAt(Math.floor(Math.random() * charsLen));
    }
    return r
  }
  exports.makeuid = makeuid;
  exports.randStr = randStr;
  Object.defineProperty(exports, '__esModule', { value: true });
}));