// Single Dimantional Array.
var userName = ["Joy", "Luffy", "Zoro"];
// let userName:Array<string> = ['Joy', 'Luffy', 'Zoro'];
var userAge = [23, 17, 36];
console.log(userName[0]);
// Multiple Type Array..
var multiTypeArray = ["Joy", 23];
console.log(multiTypeArray);
//Multi Dimentional Array..
var myArr = [[1, 2, 3], [4, 5, 6]];
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[0][1]);
console.log(myArr[1][1]);
// Array Object
var arr1 = new Array("Joy", "23", "Male");
for (var i = 0; i <= arr1.length - 1; i++) {
    console.log(arr1[i]);
}
console.log();
for (var i in arr1) {
    console.log(arr1[i]);
}
console.log();
//Using Function..
function displayer() {
    for (var i in arr1) {
        console.log(arr1[i]);
    }
}
displayer();
