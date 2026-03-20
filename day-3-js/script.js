// var --> re-declare, you can access it before its declaration
// console.log(sum);
// var sum = 0;

// let --> re-declaration not allowed, you cannot access it before declaration

// const --> re-declaration not allowed, you cannot reassign it

// let sum = 0;
// sum = 10;

// const sum = 0;
// sum = 10;

// -----------------------------------------------------

// -----------------------------------------------------

// const student = {
//     name: "Likhilesh",
//     age: 11,
//     address: "xyz",
// };

// // .....

// // updating (adding a new key value pair)
// student["bloodGroup"] = "O+";

// // updating (existing key value pair)
// student["name"] = "Ajay";

// // deleting (existing key value pair)
// delete student["name"];

// console.log(student);
// console.log(student["age"]);

// ---------------------------------

// // ARRAY
// const fruitsArr = ["Mango", "Grapes"];
// console.log(fruitsArr);

// // OBJECT
// const fruitsObj = {
//     0: "Mango",
//     1: "Grapes",
// };
// console.log(fruitsObj);

// -----------------------------------------

// const fruitsArr = ["Mango", "Grapes"];

// // adding a new element

// fruitsArr[2] = "Apple"; // risky

// console.log(fruitsArr);

// // this introduces holes in the array
// // (which is not an expected behavior)
// // --> fruitsArr[20] = "Watermelon";

// // So, we will always use array methods to work on arrays
// fruitsArr.unshift("Watermelon"); // add the element at first index
// fruitsArr.push("Watermelon"); // add the element at last index

// // delete an element
// fruitsArr.shift(); // to remove the first element
// fruitsArr.pop(); // to remove the last element

// // this introduces holes in the array
// // (which is not an expected behavior)
// // delete fruitsArr[2]

// console.log(fruitsArr);

// -----------------------------------------

// const fruitsArr = ["Mango", "Grapes", "Apple", "Watermelon"];

// // // delete one element starting from index 2
// // fruitsArr.splice(2, 1);

// // // delete 2 elements starting from index 2
// // fruitsArr.splice(2, 2);

// // insert one element starting from index 2
// // fruitsArr.splice(2, 0, "Kiwi");

// // insert two elements starting from index 2
// // fruitsArr.splice(2, 0, "Kiwi", "Guava");

// console.log(fruitsArr);

// --------------------------------------------

const arr = ["Mango", "Grapes", "Apple", "Watermelon"];

console.log("---------");

// usual FOR loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("---------");

// FOR - IN loop --> it gives you KEYS
for (let i in arr) {
    console.log(i);
    console.log(typeof i);
}

console.log("---------");

// FOR - OF loop --> it gives you VALUES
for (let i of arr) {
    console.log(i);
}
