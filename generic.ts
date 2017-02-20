//<T> makes it generic

function gen<T>(argument: T): T[]{
  var arrayOfT: T[] = [];
  arrayOfT.push(argument);
  return arrayOfT;
}


var arrayFromString = gen<string>("beep");
console.log(arrayFromString[0]);         // "beep"
console.log(typeof arrayFromString[0])   // String

var arrayFromNumber = gen(42);
console.log(arrayFromNumber[0]);         // 42
console.log(typeof arrayFromNumber[0])   // number