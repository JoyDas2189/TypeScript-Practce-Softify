var myTuples = ["Joy", 23, "Male"];
console.log(myTuples);
myTuples.push("TypeScript");
console.log(myTuples);
myTuples[1] = 24;
console.log(myTuples);
console.log();
function tupleDisplayer() {
    for (var i in myTuples) {
        console.log(myTuples[i]);
    }
}
tupleDisplayer();
