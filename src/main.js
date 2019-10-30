function makeuid () {
  return new Date().toISOString().slice(0, 19).replace(/[-:]/g, randStr(1))
}

function randStr (len) {
  var result = '';
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var charsLen = chars.length;
  for (var i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * charsLen));
  }
  return result;
}

exports = { makeuid, randStr }