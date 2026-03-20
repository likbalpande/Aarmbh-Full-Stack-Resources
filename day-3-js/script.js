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

const student = {
    name: "Likhilesh",
    age: 11,
    address: "xyz",
};

// .....

// updating (adding a new key value pair)
student["bloodGroup"] = "O+";

// updating (existing key value pair)
student["name"] = "Ajay";

// deleting (existing key value pair)
delete student["name"];

console.log(student);
console.log(student["age"]);

// ---------------------------------
