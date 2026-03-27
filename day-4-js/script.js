// const cards = document.getElementsByClassName("card");

// console.log(cards);

// cards[0].style.backgroundColor = "red";

// -----------------------------------------------

// printHello("Likhilesh");

// // Type 1: Function declaration
// function printHello(txt = "John Doe") {
//     console.log("Hello", txt);
// }

// function printHello(txt = "John Doe") {
//     console.log("Hi!", txt);
// }

// // Function invocation
// // printHello();
// // printHello("Likhilesh");

// // Issues with function declaration:
// // 1. You can create another function with same name
// // 2. You can call the function above its declaration

// -----------------------------------------------

// const age = 18;

// // Type 2: Function assignment

// const ageFn = function xyz() {
//     console.log(18);
// };

// ageFn();

// // Advantages of function assignment:
// // 1. You can NOT create another function with same name
// // 2. You can NOT call the function above its declaration

// // Disadvantage of function assignment:
// // 1. There are two names ageFn & xyz
//       while the name that can referred remains always one (ageFn).

// // -----------------------------------------------

// const age = 18;

// // Type 3: Anonymous Function assignment

// const ageFn = function () {
//     console.log(18);
// };

// ageFn();

// // // Advantages of function assignment:
// // // 1. You can NOT create another function with same name
// // // 2. You can NOT call the function above its declaration
// // // 3. Always one name.

// -----------------------------------------------

// const age = 18;

// // Type 4: Arrow Function assignment

// const ageFn = () => {
//     console.log(18);
// };

// ageFn();

// // // Advantages of function assignment:
// // // 1. You can NOT create another function with same name
// // // 2. You can NOT call the function above its declaration
// // // 3. Always one name.

// -----------------------------------------------

// FUNCTIONS are FIRST CLASS CITIZENS in JAVASCRIPT
// --> This means that functions are treated like any other value
//     or object in the language, such as strings or numbers,
//     and can be used in versatile ways.

// // ------------------------------------------------

// const sum = (a, b) => {
//     const ans = a + b;
//     console.log(ans);
// };

// const num1 = 10;
// const num2 = 20;

// sum(num1, num2);

// ------------------------------------------------

const printPretty1 = (x) => {
    console.log("------------");
    console.log("-->", x);
    console.log("------------");
};

const printPretty2 = (x) => {
    console.log("**************");
    console.log("-->", x);
    console.log("**************");
};

const sum = (a, b, cb) => {
    const ans = a + b;
    cb(ans);
};

const num1 = 10;
const num2 = 20;

sum(num1, num2, printPretty1);

// Here, "sum" is called a Higher Order Function (HoF)
// and, "printPretty1" is a callback function

// ------------------------------------------------
