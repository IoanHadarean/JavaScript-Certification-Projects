function palindrome(str) {
  var str_replace = str.replace(/[\W_+]/g, "").toLowerCase();
  var str_split = str_replace.split("");
  var revArr = [];
  while (str_split.length > 0) {
    var str_pop = str_split.pop();
    revArr.push(str_pop);
  }
  var revArrToString = revArr.toString();
  var replaced = revArrToString.replace(/,/g, "");
  if (replaced == str_replace) {
    return true;
  }
  else {
    return false;
  }
}

palindrome("eye");
