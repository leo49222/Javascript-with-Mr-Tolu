


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




let ageDare = null //truthy



// || logical "or"
// && logical "and"
let ageTolu = "5" //truth


// if(true or false) {
//do something }

// false or false or false = false
//false or true = true

if (ageTolu < 3) {
console.log("yes")
}
else if (ageTolu === 5) {
console.log("not sure")
}
else if (ageTolu === 5) {
console.log("not sure again")
}
else if (ageTolu == "3") {
console.log("not sure again")
}

else {
console.log("safe")
}


if (typeof "tolu" === "number") {
console.log("yes")
}
else {
console.log("no")
}





//template literals (normal string is "" while template literal ``)

//create a function that can calculate a users
// age from his/her birth year, and then the function console 
//logs a string that that the user "name", "address" with the calculated. And the function should also log if the user is old enough to register - (if the user is older than 18)

let obj = {
name: "Tolu",
address: "Mapple",
birthYear: 2008, 
dadBirthYear: 1960,
mumBirthYear: 1965,

}



 const engine = function (obj) {
    
    
    let 
      age = 2023 - obj.birthYear    
    /* decision = "if (age > 18)('he's able to register')
    else if( age < 18) ("he's unable to register") " */
     



     console.log(`${obj.name} lives in ${obj.address} with his parents, a ${2023 - obj.dadBirthYear} year old man and a ${2023 - obj.mumBirthYear} year old woman. ${obj.name} himself was born ${2023 - age} and `)
} 
  


engine(obj)


"His name is Tolu and his age is 30. He is old enough to register"





/// --------- second assesement
let
//------ marks mass and height

massMark = 78,
heightMark = 1.69,
BmiMark = massMark * 2/heightMark,


// -----Johns mass and height

massJohn = 92,
heightJohn = 1.95, 
BmiJohn = massJohn * 2/heightJohn

//BmiMark > || or < BmiJohn
    if (BmiMark > BmiJohn) {
    console.log("BMI{Body Mass Index} of Mark is greater than John's")
    }
    else if (BmiMark < BmiJohn) {
    console.log("BMI{Body Mass Index} of Johm is greater than Marks")
    }



