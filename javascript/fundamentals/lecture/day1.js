// What does MERN stand for?
/* MongoDB
Express.JS
React
Node.JS
*/
// How much time did it take to build JavaScript?
// 10 Days

// Are Java and JavaScript related?
// Not related

// What's the difference between web JavaScript and node JavaScript?
//  web exists on web
//  node exists on your runtime environment

// What not var?
//var doesn't give code separation 
// var can be a global or local variable depending on where it is written in the program
// Let variables can be local, global or block variables. Block variables are only available within the block they are declared.
// Variables declared with let also don't allow hoisting, meaning we cannot use a varible beofre it is declared.

// destructuring 
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};

const key = "email";


//dot notation
const firstName = person.firstName;
// using bracket to get key (very helpful to refactor your code)
const lastName = person['lastName'];
const email = person[key]; // person ["email"]
console.log(firstName);
console.log(lastName);
console.log(email);


// 1. create the variables (password, createdAt)
const {password,  createdAt, createdAt: updatedAt} = person; // create updatedAt, assign createdAt as the value

// 2. search for person.password and assign to person, search for person.createdAt and assign to person
console.log(password,createdAt, updatedAt);


const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const [firstAnimal,  , thirdAnimal] = animals;
// 1. Create the variables (firstAnimal, thirdAnimal)
// 2. Search for animals[0], animals[2] to assign the variables
console.log(firstAnimal, thirdAnimal);


// spread/rest

const personCopy = {...person, firstName:"Alex", lastName:"Miller", nickname:"cool dev"};
// personCopy.firstName = "Alex"
console.log(person);
console.log(personCopy);

// push one more element into the array without .push
const animalCopy = ["dragon", ...animals, "unicorn"];
console.log(animalCopy);


// arrow function
function sayHello(name){
    console.log(`Hello, ${name}`);
}

const sayHello2 = function(name){ // anonymous function (function without a name)
    console.log(`Hello2, ${name}`);
}

// () => {}
const sayHello3 = (name) =>{
    console.log(`Hello3, ${name}`);
}

const sayHelloToAnonymous = ()=>{
    console.log(`Hello stranger!`);
} 

sayHello("Immanuel")
sayHello2("John")
sayHello3("Tom")

sayHelloToAnonymous();


// a function that return something
function changePrice(price, discount){
    return price * discount;
}

// long-handed arrow function
const changePrice2 = (price, discount) => {
    return price * discount
}
// short-handed arrow function
const changePrice3 = (price, discount) => price*discount; // implicit return: no {}, or using ()
// implicit return (we didnt type return but it understands there is a return)

//this is implicit as well
const changePrice4 = (price,discount) => (price * discount);

console.log(changePrice(100,0.9));
console.log(changePrice2(200,0.9));
console.log(changePrice3(200,0.8));
console.log(changePrice4(200,0.7));


// ternary operator 

const rating = 6;

if (rating >5){
    console.log("this is a great move");
}else{
    console.log("this movie is okay");
}

// condition?true-statement:else-statement
rating>5 ? console.log("this is a great movie2") : console.log("this movie is okay2");

// short circuit logical operator (&&) if without else
if (rating>5){
    console.log("if statement works");
}

rating>5 && console.log('if statement2 works');