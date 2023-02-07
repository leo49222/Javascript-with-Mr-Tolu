


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

let obj = {
  name: "Tolu",
  address: "MappleWood Estate",
  age: 30,
  dadBirthYear: 1891,
  mumBirthYear: 1892
}

const engine = function (obj) {

  let decision = ""

  let decisoonTwo = ""

  const dadAge = 2023 - obj.dadBirthYear
  const momAge = 2023 - obj.mumBirthYear

  if (dadAge > 70 && momAge > 70) {
    decision = "The child should stay with them."
  }
  else {
    decision = "The child should not stay with them."
  }

  if (obj.age > 18) {
    decisoonTwo = ""
  }
  else {
    decisoonTwo = "not"
  }

  console.log(`${obj.name} lives in ${obj.address} with his parents, a ${2023 - obj.dadBirthYear} years old man, and a ${2023 - obj.mumBirthYear} years old woman. Tolu himself was born in ${2023 - obj.age}, and he is ${decisoonTwo} old enough to register. ${decision}.`)
}



engine(obj)

"Tolu lives in lokoja with his parents, a 54 years old man, and a 80 years old woman. Tolu himself was born in 1993, and he is/not old enough to register. The child should/not stay with them."



















 const johnHeight = 1.76
 const markHeight = 1.88
 const johnMass = 85
const markMass = 95


 const markBMI = markMass / (markHeight * markHeight)
 const johnBMI = johnMass / (johnHeight * johnHeight)


 console.log(`Mark's BMI is ${markBMI > johnBMI ? "higher" : "less"} than John's!`)


 if (markBMI > johnBMI) {
   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
 }
 else if (johnBMI > markBMI) {
   console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
 }






  //------------ Using functions to solve assessment two ---------
  

   /*const giveMeTheStatsOfTwoUsers = function (userOneMass, userTwoMass, userOneHeight, userTwoHeight, userOneName, userTwoName) {

   const userOneBMI = userOneMass / (userOneHeight * userOneHeight)

   const userTwoBMI = userTwoMass / (userTwoHeight * userTwoHeight)


  if (userOneBMI > userTwoBMI) {
     console.log(`${userOneName}'s BMI (${userOneBMI}) is higher than ${userTwoName}'s (${userTwoBMI})!`)
   }

   else {
    console.log(`${userTwoName} BMI (${userTwoBMI}) is higher than ${userOneName}'s (${userOneBMI})!`)
   }

 }


 giveMeTheStatsOfTwoUsers(78, 200, 1.69, 1.95, "Wale", "To */







                //-----ASSESSMENT THREE --------//
               let DolphinsAverage = (96+108+89)/3
               let koalasAverage = (196+108+89)/3

               if(DolphinsAverage > koalasAverage){
                console.log(`dolphins team are the winner of this challenge with an average of ${DolphinsAverage}`)
               }
               else if (koalasAverage > DolphinsAverage){
                console.log(` kola's team are the winners of this challenge with an average of ${koalasAverage}`)
               }
               else if(koalasAverage = DolphinsAverage){
                console.log(`the results of the two events ended in a draw`)
               }
              
               
              let winner = "" 

               if(koalasAverage > 100 && DolphinsAverage > 100){
                winner = `${koalasAverage > DolphinsAverage ? "The winnner of these competition is koala" : "The winner of these competition is Dolphins"}`

               }

               else if(koalasAverage > 100 && DolphinsAverage > 100 ){
                winner =`${koalasAverage = DolphinsAverage ? "draw" : "no winner"}`
               }

               console.log(winner)




               
             

