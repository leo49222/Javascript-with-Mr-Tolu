


"use strict"

//values and variables

//Number - 1, 2, 3 truthy values
//String - "Tolu" truthy values

//Boolean - true or false



//undefined - error -- falsy values 
//null - error -- falsy value
//0 -- falsy values
//NaN -- falsy values


// + - / ++ == = === || && > < >= <=





//== equal value

//if/else - when if () condition is true




let ageDare = null  //truthy



// || logical "or"
// && logical "and"
let ageTolu = "5" //truth


// if(true or false) {
//do something }

// false or false or false = false
//false or true = true

// if (ageTolu < 3) {
//   console.log("yes")
// }
// else if (ageTolu === 5) {
//   console.log("not sure")
// }
// else if (ageTolu === 5) {
//   console.log("not sure again")
// }
// else if (ageTolu == "3") {typeof
//   console.log("not sure again")
// }

// else {
//   console.log("safe")
// }


// if ( "tolu" === "number") {
//   console.log("yes")
// }
// else {
//   console.log("no")
// }





//template literals (normal string is "" while template literal ``)


let toluBirthyear = 1992





//create a function that generate ONE string from the object argument, calculating the user's birthyear, calculate if the user is old to enough to register (>18), and calculating the dad's and mom's age this time from the birthyear. If both the mom and dad are older than 70, then the child should stay with them, else the child should not stay with them.

// let obj = {
//   name: "Tolu",
//   address: "MappleWood Estate",
//   age: 30,
//   dadBirthYear: 1891,
//   mumBirthYear: 1892
// }

// const engine = function (obj) {

//   let decision = ""

//   let decisoonTwo = ""

//   const dadAge = 2023 - obj.dadBirthYear
//   const momAge = 2023 - obj.mumBirthYear

//   if (dadAge > 70 && momAge > 70) {
//     decision = "The child should stay with them."
//   }
//   else {
//     decision = "The child should not stay with them."
//   }

//   if (obj.age > 18) {
//     decisoonTwo = ""
//   }
//   else {
//     decisoonTwo = "not"
//   }

//   console.log(`${obj.name} lives in ${obj.address} with his parents, a ${2023 - obj.dadBirthYear} years old man, and a ${2023 - obj.mumBirthYear} years old woman. Tolu himself was born in ${2023 - obj.age}, and he is ${decisoonTwo} old enough to register. ${decision}.`)
// }



// engine(obj)

// "Tolu lives in lokoja with his parents, a 54 years old man, and a 80 years old woman. Tolu himself was born in 1993, and he is/not old enough to register. The child should/not stay with them."



















// const johnHeight = 1.76
// const markHeight = 1.88
// const johnMass = 85
// const markMass = 95


// const markBMI = markMass / (markHeight * markHeight)
// const johnBMI = johnMass / (johnHeight * johnHeight)


// // console.log(`Mark's BMI is ${markBMI > johnBMI ? "higher" : "less"} than John's!`)


// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
// }
// else if (johnBMI > markBMI) {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
// }








// const giveMeTheStatsOfTwoUsers = function (userOneMass, userTwoMass, userOneHeight, userTwoHeight, userOneName, userTwoName) {

//   const userOneBMI = userOneMass / (userOneHeight * userOneHeight)

//   const userTwoBMI = userTwoMass / (userTwoHeight * userTwoHeight)


//   if (userOneBMI > userTwoBMI) {
//     console.log(`${userOneName}'s BMI (${userOneBMI}) is higher than ${userTwoName}'s (${userTwoBMI})!`)
//   }

//   else {
//     console.log(`${userTwoName} BMI (${userTwoBMI}) is higher than ${userOneName}'s (${userOneBMI})!`)
//   }

// }


// giveMeTheStatsOfTwoUsers(78, 200, 1.69, 1.95, "Wale", "Tom")
























// Coding Challenge. Submission for Wednesday.

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123




















//-----ASSESSMENT THREE --------//
// let DolphinsAverage = (400 + 400 + 400) / 3
// let koalasAverage = (400 + 400 + 400) / 3

// if (DolphinsAverage > koalasAverage) {
//   console.log(`dolphins team are the winner of this challenge with an average of ${DolphinsAverage}`)
// }
// else if (koalasAverage > DolphinsAverage) {
//   console.log(` kola's team are the winners of this challenge with an average of ${koalasAverage}`)
// }
// else if (koalasAverage === DolphinsAverage) {
//   console.log(`the results of the two events ended in a draw`)
// }


// const minimum = 100

// // a team only wins if it scores higher than the other and has a score higher than 100

// if (DolphinsAverage > koalasAverage && DolphinsAverage > 100) {
//   console.log(`dolphins team are the winner of this challenge with an average of ${DolphinsAverage}`)
// }

// else if (koalasAverage > DolphinsAverage && koalasAverage > 100) {
//   console.log(`koalas team are the winner of this challenge with an average of ${koalasAverage}`)
// }

// else if (koalasAverage === DolphinsAverage && DolphinsAverage > 100 && koalasAverage > 100) {
//   console.log("A draw")
// }

// else {
//   console.log("No one wins")
// }










//FUNCTIONS LESSONS


//engine => carsToyota carsBenz carsBMW



// 2 ways to declare a function

//1.
//function expression

//2.
//function declaration


//function expression


 const myEngine = function (engineFilter, nameOfCar) {

   console.log("before")


   console.log("engine filter", engineFilter, "name of car", nameOfCar)

 }



// //benz //toyota //bmw



// //benz
 myEngine("2.c", "benz")


// // /toyota
myEngine(2, "toyota")




//return keyword
//A return keyword in a function kills the function

//A  return keyword also helps the function return a specific value

// const calculator = function (firstNumber, secondNumber, command) {

//   if (firstNumber === 2 || firstNumber === 6 || secondNumber === 4) return

//   if (command === "+") {
//     return firstNumber + secondNumber
//   }

//   else if (command === "-") {
//     return firstNumber - secondNumber
//   }
// }










// const myEngine = function (type, edition) {

//   console.log(`This engine is of type ${type} and editing ${edition}`)

// }



// myEngine("toyota", 2)


// const myFunctionTypeZero = function () {
//   console.log("yes")
//   console.log("yes")
//   console.log("yes")
//   console.log("yes")
//   console.log("yes")
//   console.log("yes")
// }


/*const maxPemperature = {
  tolu: {
    name: "Tolulope",
    username: "totxprex",
    age: 20
  },
  kunle: {
    name: "Kunle",
    username: "kxprex",
    age: 18
  }
}  


function engine(jagoon) {

  return `The first user is ${jagoon.tolu.name} and second user is ${jagoon.kunle.name}. Their combined age is ${jagoon.tolu.age + jagoon.kunle.age}`

}


console.log(engine(maxPemperature)) */






 // first way of solvong assessment//
const givenTemperature = {
  firstTemp : 17,
  secondTemp : 21,
  thirdTemp: 23,
  fourthTemp: 0,
  fifthTemp:  5,

}


function printForecas(read){
  return ` ${read.firstTemp}°C in day 1, ${read.secondTemp}°C in day 2, ${read.thirdTemp}°C in day 3, ${read.fourthTemp}°C in day 4, ${read.fifthTemp}°C in day 5` 
}

console.log(printForecas(givenTemperature))


//finishing of assessment









/*function (engineFilter, nameOfCar) {

  console.log("before")


  console.log("engine filter", engineFilter, "name of car", nameOfCar)

}*/







// const newObj = {
//   tolu: {
//     name: "nobody",
//     username: "totxprex",
//     age: 20
//   },
//   kunle: {
//     name: "nobody",
//     username: "kxprex",
//     age: 18
//   }
// }

// console.log(engine(newObj))



const printForecast = function (Tempdegree, days) {

  console.log(Tempdegree, days)
}


printForecast("17°C","in day one")
printForecast("20°C","in day two")





               




               
             

