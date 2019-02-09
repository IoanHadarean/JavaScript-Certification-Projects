function rot13(str) { // LBH QVQ VG!
    var newArr = [];
    var result = [];
    var banana = str.split("");
    console.log(banana);
    var arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    console.log(arr);
    var reversedArr = arr.slice().reverse();
    console.log(reversedArr);

    for (var i = 0; i < arr.length; i++) {
        if (i <= (arr.length / 2) - 1) {
            var a = arr[i + 13];
            var b = newArr.push(a);
        }
    }
    console.log(arr.length);
    for (var j = 0; j < reversedArr.length; j++) {
        if (j <= (reversedArr.length / 2) - 1) {
            var c = reversedArr[j + 13];
            var d = newArr.push(c);
        }
    }
    console.log(newArr);

    for (var k = 0; k < banana.length; k++) {
        if (newArr.indexOf(banana[k]) > -1 && newArr.indexOf(banana[k]) <= 12) {
            var e = newArr.indexOf(banana[k]);
            console.log(e);
            var r = result.push(arr[e]);
        }
        else if (newArr.indexOf(banana[k]) > -1 && newArr.indexOf(banana[k]) > 12) {
            var salad = arr.indexOf(banana[k]);
            console.log(e);
            var reg = result.push(newArr[salad]);
        }
        else {
            var g = result.push(banana[k]);
        }
    }
    console.log(result);
    var result2 = result.toString();
    var result3 = result2.replace(/,/g, "");
    console.log(result3);
    return result3;
}

// Change the inputs below to test
rot13("SERR CVMMN!");
