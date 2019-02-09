function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    var output = { status: null, change: [] };
    var flatened = [].concat(...cid);
    var newArr = [];
    var keys = [];
    var changeArr = [];
    var values = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    // Here is your change, ma'am.

    for (var i = 0; i < flatened.length; i++) {
        if (i % 2 != 0) {
            newArr.push(flatened[i]);
        }
    }
    for (var k = 0; k < flatened.length; k++) {
        if (k % 2 === 0) {
            keys.push(flatened[k]);
        }
    }
    var reversedKeys = keys.reverse();
    var reversedValues = values.reverse();
    var reversedArr = newArr.reverse();
    var register = reversedArr.reduce((acc, curr) => acc + curr);
    console.log(register);

    if (register === change) {
        output.status = "CLOSED";
        output.change = cid;
        return output;
    }

    var j = 0;
    var v = 0;
    var ct = 0;
    if (change < reversedValues[j]) {
        j++;
        v = 0;
    }
    for (var j = 0; j < reversedValues.length; j++) {
        v = 0;
        while (change >= reversedValues[j] && reversedArr[j] > 0) {
            change = change - reversedValues[j];
            change = Math.round(change * 100) / 100;
            console.log(change);
            reversedArr[j] = reversedArr[j] - reversedValues[j];
            ct = 1;
            if (ct !== 0) {
                v += reversedValues[j];
                v = Math.round(v * 100) / 100;
            }
        }
        if (reversedArr[j] >= 0 && v > 0) {
            changeArr.push([reversedKeys[j], v]);
            console.log(changeArr);
        }
    }
    if (changeArr.length < 1 || change > 0) {
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }
    if (register > change) {
        output.status = "OPEN";
        output.change = changeArr;
        return output;
    }

}

checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);
