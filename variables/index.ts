// var

var myNumber: number = 201;
myNumber = 101;

console.log(myNumber);

function displayer () {
    var msg = "TypeScript";
    return msg;
}

console.log(displayer());


//let

let a = 10;
// let a = 25; // not possible

function displayer1 () {
    let msg1 = "TypeScript1";
    return msg1;
}
console.log(displayer1());

const b = 10;
// const b = 10//not possible

function displayer2 () {
    const msg2 = "TypeScirpt2";
    return msg2;
}
console.log(displayer2());

