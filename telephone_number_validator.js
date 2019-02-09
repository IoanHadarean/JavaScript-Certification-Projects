function telephoneCheck(str) {
    var replaced = str.replace(/\W\s/g, "");
    var replacedSplitAtChar = replaced.split("");
    var sum = 0;
    var strSplitAtChar = str.split("");
    var regex = /1 555|555/;
    var strSplitAtSpace = str.split(" ");
    for (var j = 0; j < strSplitAtSpace.length; j++) {
        if (strSplitAtSpace[0].length === 1 && strSplitAtSpace[1].length === 3 && strSplitAtSpace[2].length === 3 && strSplitAtSpace[3].length === 4) {
            return true;
        }
    }
    if (strSplitAtChar[0] === "2") {
        return false;
    }
    for (var i = 0; i < strSplitAtChar.length; i++) {
        if (strSplitAtChar[i] === "(") {
            sum += 1;
        }
        else if (strSplitAtChar[i] === ")") {
            sum += 1;
        }
    }
    if (sum > 2) {
        return false;
    }
    else if (sum > 0 && sum < 2) {
        return false;
    }
    else if (replacedSplitAtChar.length >= 10 && replacedSplitAtChar.length <= 11) {
        return true;
    }
    else if (replacedSplitAtChar.length < 10) {
        return false;
    }
    else if (regex.test(str) === true) {
        return true;
    }
    return false;
}

telephoneCheck("55555555");