//Create a function called `go` that takes 2 arguments: 
//1. direction (forwards, backwards, etc.)
//1. speed (mph).

//The function, when invoked, will print out the following in your console (for example): `The car is moving forward, at 25 mph.
//Add a condition inside the function to check if the speed is greater than 75 mph. If it is, add an additional message of SLOW DOWN!

//Example:

//The car is moving forward at 82 mph
//SLOW DOWN!





//function go (direction,speed); 
//{
    //console.log (`The car is moving ${direction}, at ${speed} mph.`);
    //console.log ("The car is moving" + direction ", at" + speed " mph.");
//if (speed >75){
//    console.log(`The car is moving ${direction}, at ${speed} mph. Slow Down!! `);
    
//} else {
  //  console.log(`The car is moving ${direction}, at ${speed} mph. You're Good!`);
//}


   // if (speed > 82)
    //{ alert ("Slow down!");
    //}
//}
//go("forward","25");



//Given the following set of data about chicken birth rates, you need to filter out the objects
// where the birth rate value is greater
// than 15 per 1000 chickens for that year. Store the good years in a new array named `bestYears`.

const bestYears = [];
const birthRates = [
    { year: 1969, birthRate: 13}, 
    { year: 1970, birthRate: 16}, 
    { year: 1971, birthRate: 15}, 
    { year: 1972, birthRate: 11}, 
    { year: 1973, birthRate: 18}, 
    { year: 1974, birthRate: 17}, 
    { year: 1975, birthRate: 9}
  ];

//for (let i = 0; i < birthRates.length; i++) {
 //   const currentYear = birthRates[i];
//if (currentyear.birthrate > 15)
 //   { bestYears.push (currentyear)}
    
//}
//birthRates.forEach (function(currentyear)
//)

//for (let currentYear of birthRates){
//if (currentYear.birthRate > 15){
//   bestYears.push(currentYear)
//}


//console.log (bestYears)



const politician ={
    platform:{
        money: [ "I like it", "I have lots of it", "I do not want other people to have it"],
        health: "I'm against it"
    },
    disrict: "Michigan 13"
}
console.log(politician.platform.money[1]) 

for (const policy of politician.platform.money [2]){
    console.log(policy) I like it, I have lots of it, I do not want other people to have it
}
