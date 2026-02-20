// CREATE
const student = {
    name: "Likhilesh",
    city: "Delhi",
};

// READ
console.log(student);
console.log(student.name);
console.log(student["city"]);

// UPDATE
student["country"] = "INDIA"; // adding a new key value pair
student["city"] = "Mumbai"; // replacing the old value with new value
console.log(student);

// DELETE
delete student.name; // delete student["name"]
console.log(student);

// COPY
const student2 = student; //shallow copy
student2.city = "Jaipur";

console.log(student);
console.log(student2);
