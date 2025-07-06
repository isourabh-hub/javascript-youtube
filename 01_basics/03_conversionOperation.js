let score = null

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber )
// console.log(valueInNumber);

let undefinedEx = undefined

// console.log(typeof(undefinedEx))

let undefinedNumber = Number(undefinedEx)
// console.log(typeof undefinedNumber )
// console.log(undefinedNumber);

//"33" => 33
//"33abc" => NaN
//true => 1 , false => 0

let isLoggedIn = 1

let booleanData = Boolean(isLoggedIn)

// console.log( booleanData)
//"sourabh" => true
//1 => true, 0 => false
//"" => false

let someNumber = 1245

let intoString = String(someNumber)

// console.log(intoString);
// console.log(typeof intoString);


//********************************   Operation   ****************************

let value = 4
let negValue = -value
// console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**3)
// console.log(2%2)

let str1 = "Hello"
let str2 = " Sourabh"

let str3 = str1 + str2
// console.log(str3);

// console.log(3 + "3");
// console.log(3 + Number("3"));

// console.log(+true);
// console.log(+"");

let gameCounter = 100
gameCounter++;

// console.log(gameCounter)

//Postfix example
let x = 4
const y = x++

console.log(`x: ${x}, y:${y}`)

//prefix example
let a = 4
const b = ++a

console.log(`a: ${a}, b:${b}`)