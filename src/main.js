function makeuid () { // 2019-10-26T22:20:30
  let d = new Date().toISOString().slice(0, 19), r = '', i = 0, l = d.length;
  for (; i < l; i++) {
    let e = d[i];
    r += e === '-' || e === ':' ? randStr(1) : e
  }
  return r
}

function randStr (len) {
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let r = '', charsLen = chars.length, i = 0;
  for (; i < len; i++) {
    r += chars.charAt(Math.floor(Math.random() * charsLen));
  }
  return r;
}
export { makeuid, randStr }