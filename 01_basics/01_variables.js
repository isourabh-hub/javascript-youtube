const accountId = 112244
let accountEmail = "sk@gmail.com";
var accountPassword = "12345"
accountCity = "Raipur"

// accountId = 124512 this can not be allowed

console.log(accountId);


/*
prefer not to use var 
because of issues in block scope and function scope
*/
accountEmail = "sr@gmail.com"
accountCity ="Mumbai"

console.table([accountId, accountEmail, accountPassword, accountCity])


function variableDemo() {
  var userName = "Rahul";
  var userName = "Sourabh"; //  Re-declared (allowed)
  console.log("var userName:", userName); 


  let userAge = 25;
  // let userAge = 30; // Error: Cannot re-declare 'userAge'
  userAge = 30; // ✅ Can re-assign
  console.log("let userAge:", userAge); 


  const userCity = "Mumbai";
  // userCity = "Delhi"; // Error: Cannot re-assign a const
  console.log("const userCity:", userCity); 

 
  if (true) {
    var x = 100;
    let y = 200;
    const z = 300;
  }

  console.log("var x:", x); // Output: 100 (var is function scoped)
  // console.log("let y:", y); // Error: y is not defined
  // console.log("const z:", z); // Error: z is not defined
}

variableDemo();

