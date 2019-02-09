function rot13(str) { // LBH QVQ VG!
    var newArr = [];
    var result = [];
    var str_split = str.split("");
    console.log(str_split);
    var arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    console.log(arr);
    var reversedArr = arr.slice().reverse();
    console.log(reversedArr);

    for (var i = 0; i < arr.length; i++) {
        if (i <= (arr.length / 2) - 1) {
            var value = arr[i + 13];
            newArr.push(value);
        }
    }
    console.log(arr.length);
    for (var j = 0; j < reversedArr.length; j++) {
        if (j <= (reversedArr.length / 2) - 1) {
            var reversedValue = reversedArr[j + 13];
            newArr.push(reversedValue);
        }
    }
    console.log(newArr);

    for (var k = 0; k < str_split.length; k++) {
        if (newArr.indexOf(str_split[k]) > -1 && newArr.indexOf(str_split[k]) <= 12) {
            var newArrIndex = newArr.indexOf(str_split[k]);
            console.log(newArrIndex);
            result.push(arr[newArrIndex]);
        }
        else if (newArr.indexOf(str_split[k]) > -1 && newArr.indexOf(str_split[k]) > 12) {
            var arrIndex = arr.indexOf(str_split[k]);
            console.log(newArrIndex);
            result.push(newArr[arrIndex]);
        }
        else {
            result.push(str_split[k]);
        }
    }
    console.log(result);
    var toString = result.toString();
    var replaced = toString.replace(/,/g, "");
    console.log(replaced);
    return replaced;
}

// Change the inputs below to test
rot13("SERR CVMMN!");
