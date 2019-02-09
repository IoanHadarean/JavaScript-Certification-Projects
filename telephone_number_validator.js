function telephoneCheck(str) {
    var newStr = str.replace(/\W\s/g, "");
    var arr = newStr.split("");
    var sum = 0;
    var arr2 = str.split("");
    var regex1 = /1 555|555/;
    var arr3 = str.split(" ");
    for (var j = 0; j < arr3.length; j++) {
        if (arr3[0].length === 1 && arr3[1].length === 3 && arr3[2].length === 3 && arr3[3].length === 4) {
            return true;
        }
    }
    if (arr2[0] === "2") {
        return false;
    }
    for (var i = 0; i < arr2.length; i++) {
        if (arr2[i] === "(") {
            sum += 1;
        }
        else if (arr2[i] === ")") {
            sum += 1;
        }
    }
    if (sum > 2) {
        return false;
    }
    else if (sum > 0 && sum < 2) {
        return false;
    }
    else if (arr.length >= 10 && arr.length <= 11) {
        return true;
    }
    else if (arr.length < 10) {
        return false;
    }
    else if (regex1.test(str) === true) {
        return true;
    }
    return false;
}

telephoneCheck("55555555");