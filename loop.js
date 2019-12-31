//! READ: http://learn.ironhack.com/#/learning_unit/8206

//***************** EXAMPLE ************ //
// for(initiation; condition to keep loop; incrementer) {
//   statement
// }


// ************* PRATICE ************** //
//! Print numbers 0 to 100

for(let i = 0; i < 101; i += 1){
  console.log(i);
}

// ######################################### //

//! Print only even numbers from 0 to 100

for(let i = 0; i < 101; i += 1){
  if(i % 2 === 0) {
    console.log(i);
}
}

// ######################################### //

//! Print only odd numbers from 0 to 100

for(let i = 0; i < 101; i += 1){
  if(i % 2 !== 0) {
    console.log(i);
}
}

// ######################################### //

//! Print numbers 80 to 20

for(let i = 80; i > 19; i -= 1){
  console.log(i);
}

// ######################################### //


//! Write an array called arrEx2 with length 3.
const arrEx2 = [];
for(let i = 0; i < 3; i += 1){
  arrEx2.push("");
}

// ######################################### //

//! Write a loop using for structure that prints all positive numbers until 48 (including 48).

for(let i = 1; i < 49; i += 1){
  console.log(i);
}

// ######################################### //

//! Write a loop using for structure that prints all negative numbers until -30 (excluding).


for(let i = -1; i > -31; i -= 1){
  console.log(i);
}

// ######################################### //

//! Write a loop using for structure that prints all numbers from 102 (including) to 32 (including) in steps of 2.

for(let i = 102; i > 31; i -= 2){
  console.log(i);
}

// ######################################### //


const pets = ['dog', 'cat', 'bird', 'salamander', 'human', 'ape', 'alien', 'dinossaur'];
// Use FOR Loop to print the content of array "pets"
for(let i = 0; i < pets.length; i += 1){
  console.log(pets[i]);
}

//! Use FOR EACH to print the content of array "pets"
pets.forEach(e => console.log(e))

const array = [1, 'x', 3, 8, 'x', 5, 7, 3, 'x', 2, 6, 'x', 10];
// Use FOR to count and print how many times the letter x appears in the array
let numberOfX = 0;
for(let i = 0; i < array.length; i += 1){
  if(array[i] === 'x'){
    numberOfX += 1;
  };
}
console.log(numberOfX)

//! Use FOR EACH to count and print how many times the letter x appears in the array
let numberOfX = 0;
array.forEach(e => {
  if(e === 'x'){
    numberOfX += 1;
  }
})
console.log(numberOfX)


const numbers = [1, 5, 6, 8, 12, 25, 65, 78];
//! Use FOR to calculate and print the sum of all numbers in the array
let sum = 0;
for(let i = 0; i < numbers.length; i += 1){
  sum += numbers[i];
}
console.log(sum)

//! Use FOR EACH to calculate and print the sum of all numbers in the array
let sum = 0;
numbers.forEach(e => sum += e);
console.log(sum)


const sentence = 'Hack your life';
//! Use FOR to print each letter of the sentence on a different line.
for(let i = 0; i < sentence.length; i += 1){
  if(sentence[i] !== " "){
    console.log(sentence[i]);
  }
}

//! Use FOR EACH to print each letter of the sentence on a different line.
let sentence2 = sentence.split('')
sentence2.forEach(e => {
  if(e !== " "){
    console.log(e);
  }
})