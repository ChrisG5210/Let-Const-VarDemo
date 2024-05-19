//ES2015 Global Constants 
const PI = 3.14;
if(true){
    const PI = 42;
    console.log(PI);
};
console.log(PI);

//////////////////////////////////////////////////////////////////////////////////////////////////

//Q: What is the difference between var and let ?

//A: Var can be reassigned AND redeclared as well as has a scope mainly 
//   related to its function it belongs to which belongs to the window.
//   Where as let may only be reassigned but NOT redeclared and is also 
//   creates block-scoped variables

//////////////////////////////////////////////////////////////////////////////////////////////////

//Q: What is the difference between var and const?

//A: Var can be redeclared AND reassigned. With a global scope to the window. 
//   Const however may NOT be reassigned, redeclared but just like "let" it too
//   shares the abaility to create block scoped variables. Unfortunatley const 
//   takes more effort to change primitive types such as strings and numbers but is 
//   easier to chnage reference types such as an array. 

//////////////////////////////////////////////////////////////////////////////////////////////////

//Q: What is the difference between let and const 

//A: Let may be reassigned unlike const where that is NOT possible. Const is a constant 
//   keyword making it impossible to reassign. 

//////////////////////////////////////////////////////////////////////////////////////////////////

//Q: What is hoisting 

//A: Hoisting is the format JS uses when compiling code. When your code gets compiled 
//   the variable declerations get ran BEFORE initialization. This takes place mainly 
//   using the var keyword due to the fact you can set the variable before any initializers 
//   get declared or assigned to var. 
//   EX: var demo; --- you can than call this LATER in your code block or code base for use. 

//////////////////////////////////////////////////////////////////////////////////////////////////