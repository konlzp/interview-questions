/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var result = "0";
    for (var i = num1.length - 1; i >= 0; --i) {
        result = addTwoNum(result, multiplySingleDigit(num2, num1[i], num1.length - 1 - i));
    }
    for (var i = 0; i < result.length - 1; ++i) {
        if (result[i] !== '0') {
            break;
        }
    }
    return result.slice(i);
};

function multiplySingleDigit(multiDigit, singleDigit, trailingZeros) {
    var carry = 0;
    var singleInt = parseInt(singleDigit);
    var product = 0;
    for (var i = multiDigit.length - 1; i >= 0; --i) {
        var result = parseInt(multiDigit[i]) * singleInt + carry;
        product += (result % 10) * Math.floor(Math.pow(10, multiDigit.length - 1 - i));
        carry = Math.floor(result / 10);
    }
    product += carry * Math.floor(Math.pow(10, multiDigit.length));
    return "" + product + Array(trailingZeros).fill(0).join("");
}

function addTwoNum(num1, num2) {
    var i = num1.length - 1, j = num2.length - 1;
    var carry = 0;
    var result = "";
    while (i >= 0 || j >= 0) {
        var d1 = typeof num1[i] === "undefined" ? 0 : parseInt(num1[i]);
        var d2 = typeof num2[j] === "undefined" ? 0 : parseInt(num2[j]);
        var temp = d1 + d2 + carry;
        result = "" + (temp % 10) + result;
        carry = Math.floor(temp / 10);

        i--;
        j--;
    }
    if (carry) {
        result = "" + carry + result;
    }
    return result;
}

console.log(addTwoNum("123", "7899"));

console.log(multiply("123456789", "987654321"));