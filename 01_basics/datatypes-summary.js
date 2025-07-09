// datatypes
/*

#Primitive 

there are 7 types
-string
-number
-boolean
-null
-undefined
-symbol
-BigInt
*/
//examples of primitive
const score = 100
const scoreValue = 100

const isLoggedIn = true
const temp = null
let email;

const id = Symbol('123')
const AnotherId = Symbol('123')

console.log(id === AnotherId)

const bigNumber = 1234567123n

/*
#Reference (Non-Primitive)

there are 3 types
-array
-objects
-functions
*/

//examples of non-primitives
//array
const heros =[ "superman", "spiderman", "hulk"]

//objects
let mydetail ={
    name:"sourabh",
    age:21,
}
//function
const Myfunction = function(){
    console.log("Hello Sourabh"); 
    }

console.log(typeof heros)


//+++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(primitive) and Heap (non-Primitive)

let myInstagram = "isrbh"

let anotherInstagram = myInstagram

anotherInstagram = "Shourya"
console.log(anotherInstagram)
console.log(myInstagram)

let user1 = {
email: "user@gmail.com",
mobile: 1234567895,
}

let user2 = user1

user2.email ="new@gmail.com"

console.log(user1.email)
console.log(user2.email)