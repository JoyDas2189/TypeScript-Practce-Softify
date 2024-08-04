// Single Dimantional Array.

let userName: string[] = ["Joy", "Luffy", "Zoro"];
// let userName:Array<string> = ['Joy', 'Luffy', 'Zoro'];
let userAge: number[] = [23, 17, 36];

console.log(userName[0]);

// Multiple Type Array..
let multiTypeArray: (string | number)[] = ["Joy", 23];
console.log(multiTypeArray);


//Multi Dimentional Array..

let myArr: number[][] = [[1,2,3], [4,5,6]];

console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[0][1]);
console.log(myArr[1][1]);


// Array Object

let arr1:string[] = new Array("Joy", "23", "Male");

for(let i = 0; i <= arr1.length-1; i++) {
    console.log(arr1[i]);
    
}

console.log();

for(let i in arr1) {
    console.log(arr1[i]);
    
}
console.log();


//Using Function..
function displayer () {
    for (let i in arr1) {
        console.log(arr1[i]);
    }
}
displayer();

