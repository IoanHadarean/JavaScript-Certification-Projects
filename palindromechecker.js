function palindrome(str) {
  var a = str.replace(/[\W_+]/g, "").toLowerCase();
  var e = a.split("");
  var revArr = [];
  while (e.length > 0) {
    var b = e.pop();
    revArr.push(b);
  }
  var c = revArr.toString();
  var d = c.replace(/,/g, "");
  if (d == a) {
    return true;
  }
  else {
    return false;
  }
}

palindrome("eye");