function convertToRoman(num) {
 var newArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 var newArr2 = ["M", "CM" ,"D", "CD","C", "XC","L", "XL", "X", "IX", "V", "IV","I"];
 var str = "";
for ( var i = 0; i < newArr.length; i++) {
    while (newArr[i] <= num) {
      str += newArr2[i];
      num = num - newArr[i];
    }
}
return str;
}

convertToRoman(3999);