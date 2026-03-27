const cards = document.getElementsByClassName("card");

console.log(cards);

cards[0].style.backgroundColor = "red";

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

// -----------------------------------------------

const age = 18;

// Type 3: Anonymous Function assignment

const ageFn = function () {
    console.log(18);
};

ageFn();

// // Advantages of function assignment:
// // 1. You can NOT create another function with same name
// // 2. You can NOT call the function above its declaration
// // 3. Always one name.
