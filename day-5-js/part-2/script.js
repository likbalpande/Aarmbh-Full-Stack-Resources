// be default: javascript is synchronous
// to tell browser that this function may take some time, we need to make it asynchronous (explicitly)
const main = async () => {
    const URL = "https://dummyjson.com/products";
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    // renderUI(data)
};

main();
// make a new function called "renderUI"
// take the data as parameter
// loop on the products inside the data object
// create a card (same as we did earlier in part-1)
// attach that card to root element
