// var isBool:boolean = true;
// console.log(isBool);

// var cat: string = 'Russell pie',
//     cuteness: number = 5000,
//     cute: boolean = true;


// function speak(pet: string, cuteness: number){
//   console.log("Our " + pet + " has " + cuteness + " cute!");
// }

// speak(cat, cuteness);

// interfaces allow us to define whether an obj has expected props
interface Pet {
  name: string,
  cuteness: number
}

function speak(pet: Pet): void{
  console.log("Our cat " + pet.name + " is " + pet.cuteness + " cute!");
}

var Florable = {
  name: "Flora",
  cuteness: 5000
}

speak(Florable);