function calculator (num1:number, num2:number):number {
    let sum = num1 + num2;
    return  sum;
}
console.log(calculator(10, 5));


//Optional and Default parameter'

const myFunc = (a: string, b: string, c?: string, d:number = 10): string => {
    return (`Hello ${a} ${b} ${c} ${d}`);
}
console.log(myFunc('joy', 'das'));


