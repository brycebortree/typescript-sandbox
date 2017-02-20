// var isBool:boolean = true;
// console.log(isBool);

var cat: string = 'Russell pie',
    cuteness: number = 5000,
    cute: boolean = true;


function speak(pet: string, cuteness: number){
  console.log("Our " + pet + " has " + cuteness + " cute!");
}

speak(cat, cuteness);