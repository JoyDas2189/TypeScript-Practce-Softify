function calculator(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
console.log(calculator(10, 5));
//Optional and Default parameter'
var myFunc = function (a, b, c, d) {
    if (d === void 0) { d = 10; }
    return ("Hello ".concat(a, " ").concat(b, " ").concat(c, " ").concat(d));
};
console.log(myFunc('joy', 'das'));
