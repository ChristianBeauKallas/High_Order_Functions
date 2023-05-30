// // Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");

function plus (number){
    return (plusNumber) => {
        return number + plusNumber ;
    }
}
let plus15 = plus(15);
console.log(plus15(10));

// // Exercise 2 Section
let hobbits = [
    {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
    },
    {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
    },
    {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
    },
    {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
    },
];

hobbits.forEach(function(user){
    console.log(user.name);
});

// // Exercise 3

let hobbits = hobbits.map(function(user){
    return {
        "hobbits.name": user.name,
        "hobbits.score": user.score
    };
});

// console.log(hobbits);

// // Exercise 4

let activeHobbits = hobbits.filter (user => user.isActive);

console.log(activeHobbits);

// // Exercise 5

hobbits.sort((a, b) => b.score - a.score);
console.log(hobbits);

// Exercise 6

const sum = hobbits.reduce((accumulator, user) => accumulator + user.score, 0);
const average = sum / hobbits.length;

console.log(sum);
console.log(average);