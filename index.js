


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


let toluBirthyear = 1992

console.log(`His age is 2033 - toluBirthYear`)

if (ageTolu < 3) {
    console.log("yes")
    }
    else if (ageTolu === 5) {
    console.log("not sure")
    }


//create a function that can calculate a users age from his/her birth year, and then the function console logs a string that that the user "name", "address" with the calculated. And the function should also log if the user is old enough to register - (if the user is older than 18)

let obj = {
name: "Tolu",
address: "Mapple",
birthYear: 2009,
}

const engine = function (obj) {console.log(`his name is ${obj.name}
and his age is ${2023 - obj.birthYear}.`)

 if (obj.birthYear > 18) {
    console.log("He is old enough to register")
    }
    else if (obj.birthYear < 18) {
    console.log("This user is not old enough to register")
    }

}

engine(obj)


"His name is Tolu and his age is 30. He is old enough to register"