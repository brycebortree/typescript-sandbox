//<T> makes it generic
function gen(argument) {
    var arrayOfT = [];
    arrayOfT.push(argument);
    return arrayOfT;
}
var arrayFromString = gen("beep");
console.log(arrayFromString[0]); // "beep"
console.log(typeof arrayFromString[0]); // String
var arrayFromNumber = gen(42);
console.log(arrayFromNumber[0]); // 42
console.log(typeof arrayFromNumber[0]); // number
