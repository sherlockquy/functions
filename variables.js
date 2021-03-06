// Temporal Deadzone: Using "let" variable before declaration will throw exception:
// For "var" it will simply return undefined and not throw exception.
console.log(aVar); // undefined
console.log(aLet); // causes ReferenceError: aLet is not defined
let aLet = 2;
var aVar = 1;

// Scope Blocked: A "let" variable does not exist outside the scope it was declared.
// Example: the someLet will not live outside the scope of the if statement, the log will throw exception.
// For "var" the value will be moved outside of the scope and will exist outside of it.
if (true) {
  let someLet = 'hello'
  var someVar = 'hello'
}

console.log(someVar); // hello
console.log(someLet); // Uncaught ReferenceError: someLet is not defined

// No redeclaring: When you redeclare an already existing "let" it will throw an exception
// In "var" this will not cause an exception and it will simply change the value to the last value declared.
let someLet = 'Hi';
let someLet = 2 + 2; // Uncaught SyntaxError: Identifier 'someLet' has already been declared

var someVar = 'Hello';
var someVar = 2 + 2;
console.log(someVar); //4
