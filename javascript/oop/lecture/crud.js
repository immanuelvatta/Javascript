const shoppingList = Object.freeze([
    {id: 3, item: "Pepper's food", price: 1.29, shops: ["petco", "amazon"], required: true}, 
    {id: 5, item: "red gamer chair", price: 300, shops: ["amazon", "BestBuy"], required: false},
    {id: 9, item: "soup dumplings", price: 3.29, shops: ["Trader Joes"], required: true},
    {id: 2, item: "Air ticket to Barcelona", price: 600, shops: ["Expedia"], required: false}, 
    {id: 10, item: "custard tart", price: 3.99, shops: ["Trader Joes"], required: true}     
])

// ------------- CRUD with functional programming (DO NOT ALTER ORIGINAL ARRAY)------------

//! Task 1: Given a new item, create a updated shoppingList with that new item
const newItem = {id: 11, item: "TV", price: 500, shops: ["BestBuy"], required: false};

const list1 = [...shoppingList, newItem];
console.table(list1);

//! Task 2: Given an ID, remove that item without changing the original array. 
const deleteId = 2; // Removing air ticket

const list2 = shoppingList.filter(item => item.id !== deleteId);
console.table(list2);


//! Task 3: Given an index, remove that item without changing the original array. 
const deleteArrIdx = 0 // Removing Pepper's food. 
const list3 = shoppingList.filter((eachItem, index) => index !== deleteArrIdx);
console.table(list3);

// const list4 = [shoppingList.slice(0,deleteArrIdx),shoppingList.slice(deleteArrIdx+1)]
//slice: return a portion of the array without changing the original one
//splice: return a portion of the array and alter the original one

//! Task 4: Create a list of <div> with all the name & the price of each item
const list4 = shoppingList.map(eachItem => `<div>${eachItem.item} ${eachItem.price}</div> `)
console.table(list4)
// we ned ul li i think?


//! Task 5: Given an ID, update that item. (DO NOT CHANGE THE ORIGINAL ARRAY, create a new one)
const updateId = 5; // Change it to required. 
const list5 = shoppingList.map((eachItem,idx) =>{
    if(eachItem.id == updateId){
        return {...eachItem, required: true}
    }else{
        return eachItem;
    }  
})

console.table(list5)