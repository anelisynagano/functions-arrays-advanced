// const animals = ["Hubert", "Rosemary", "Paul", "Pierre"];
// const moreAnimals = ['Papa', 'Pepe']
// const allAnimals = [...animals, ...moreAnimals]

// console.log(allAnimals)

// animals.forEach(animal => console.log(animal))
// const array = animals.map(animal => animal)

// console.log(array)
// Create a function called forEachBTS. This function can accept two argument:
// An array
// A callback function

// Put the loop located in src/index.js inside the function declaration

// Replace the actual values by the functions parameters so that we can use the function with any array or any function


// arr.forEach(callback(currentValue, index, array]])

// const forEachBTS = (array, callback) => {
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i], i, array);
//     }
// }

// let index = 0
// forEachBTS(animals, (animal, index, array) => console.log(animal))


// arr.map(callback(currentValue))

// const mapBTS = (array, callback) => {
//     const output = []
//     for (let i = 0; i < array.length; i++) {
//         output.push(callback(array[i]))
//     }
//     return output
// }

// console.log(mapBTS(animals, currentVal =>  currentVal))

// const items = [
//     {
//         id: 0,
//         name: 'fries',
//         price: 2,
//         stock: true
//     },
//     {
//         id: 1,
//         name: 'burger',
//         price: 8,
//         stock: true
//     },
//     {
//         id: 2,
//         name: 'popcorn',
//         price: 5,
//         stock: false
//     },
//     {
//         id: 3,
//         name: 'ice-cream',
//         price: 3,
//         stock: true
//     }
// ]

// const result = items.reduce((acc, currVal) => acc + currVal.price, 0)

// const isInStock = items.filter(item => item.stock && item.price > 3).map(food => food.name)
// console.log(isInStock)


// const isInStock = items.every(item => {
//     return item.price > 1
// })
// if (isInStock) {
//     console.log('lucky! every item is in stock!')
// } else {
//     console.log('oh no, some item is not in stock anymore')
// }



// const priceItems = [10, 40, 20, 10];

// const total = priceItems.reduce((accumulator, currentValue) =>  accumulator + currentValue, 1000)

// // let total = 0;
// // for (let i = 0; i < priceItems.length; i++){
// //     total = total + priceItems[i] 
// // }


// console.log(total)

const age = 3;

// if (age > 33) {
//     console.log("you've lived more than jesus")
// } else {
//     console.log('not there yet!')
// }

// ternary operator
age > 33 ? console.log("you've lived more than jesus") : console.log('not there yet!') 