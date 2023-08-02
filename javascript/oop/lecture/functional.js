// callback functions

const makingPurchase = (person, price) => {
    console.log(`Processing purchase for ${person}, charged ${price}`)
}

const returningItem = (person,price) =>{
    console.log(`Processing refund for ${person}, ${price} will be issued at ${person}'s bank account`)
}

// register counter is the parent function with a child function as parameter (callback function)
const registerCounter = (customerAction, person, price) => {
    console.log("Hello! Welcome to the store");
    customerAction(person, price); // execute this function
}

registerCounter (makingPurchase, "Immanuel", 100);
registerCounter(returningItem, "Tom", 30);


