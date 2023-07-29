//TODO---------------------------------------
//! 1 Given 

// console.log(hello);                                   
// var hello = 'world';                                 

//? Seen By interpreter 

// var hello;
// console.log(hello);
// var hello = 'world';

//TODO---------------------------------------
//! 2 Given 

// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

//? Seen By interpreter 

// var needle = 'haystack';
// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }
// test();

//TODO---------------------------------------
//! 3 Given 

// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

//? Seen By interpreter 

// var brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

//TODO---------------------------------------
//! 4 Given 

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

//? Seen By interpreter 

// var food = 'chicken';
// console.log(food);
// eat();
// function eat() {
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }

//TODO---------------------------------------
//! 5 Given 

// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//? Seen By interpreter 

// var mean; 
// mean(); 
// console.log(food);
// mean = function() {
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// console.log(food);


//TODO---------------------------------------
//! 6 Given 

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

//? Seen By interpreter 

// var genre; 
// console.log(genre);
// genre = "disco";
// rewind();
// function rewind() {
//     var genre;
//     genre = "rock";
//     genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);


//TODO---------------------------------------
//! 7 Given 

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

//? Seen By interpreter 

// var dojo;
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
