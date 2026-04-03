const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Submit event-->", e);
    // we are inhibiting the default behavior of the form

    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const phoneNumber = e.target.phoneNumber.value;

    // create a new element
    const cardContainer = document.createElement("div");

    // attach a class name to the newly created element
    cardContainer.className = "card";

    // put some html inside that new element
    cardContainer.innerHTML = `
        <h4>Name: ${fullName}</h4>
        <p>Email: ${email}</p>
        <p>Phone Number: ${phoneNumber}</p>
        <button onClick="showForm()">Edit</button>
    `;

    // select the parent element where we need to insert new element
    const parentElement = document.getElementById("root");

    // connect the new element with already existing parent element
    parentElement.appendChild(cardContainer);

    // -------------------------------------------------

    const formElement = document.getElementsByTagName("form")[0];
    formElement.style.display = "none";
};

const handleFormClear = (e) => {
    console.log("Clear event-->", e);
};

const showForm = () => {
    const formElement = document.getElementsByTagName("form")[0];
    formElement.style.display = "block";

    const parentElement = document.getElementById("root");
    parentElement.innerHTML = "";
};
