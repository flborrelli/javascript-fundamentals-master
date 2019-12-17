//! Given the array below, write a function add2 that will receive the array as an argument and will return a new array with all items of the original array added by 2.

const arrEx6 = [2, 4, 6, 7, 9, 12];

const add2 = (arr) => arr.map(e => e + 2);

add2(arrEx6);

// ######################################### //

//! Given an array of numbers, write a function checkSum that returns the string 'even' if the sum of all values are even, otherwise return 'odd';

const arrEx7 = [1, 2, 3];

const checkSum = (arr) => {
  let result = arr.reduce((acc, cV) => {
    return acc + cV;
    });
  if(result % 2 === 0){
    return "even"
  }else {
    return "odd"
  }
};

checkSum(arrEx7);


// ######################################### //

//! Given an array of numbers, write a function evenNumbers that returns a new array only with the even numbers of the original array.

const arrEx8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = (arr) => {
  let evenArr = arr.filter(e => e % 2 === 0);
  return evenArr;
};

evenNumbers(arrEx8);

// ######################################### //

//! Given an array of letters, write a function sortLetters that returns a new array of letters in alphabetical order.

const arrEx9 = ['a', 'c', 'g', 'r', 'w', 'e', 's', 'l', 'z', 'q', 'b', 'd'];

const sortLetters = (arr) => {
  let sortedArr = arr.sort((a, b) => a.localeCompare(b));
  return sortedArr;
};

sortLetters(arrEx9);

// ######################################### //

//! Make a function that takes a number and returns that number multiplied by 2.

// code here

// ######################################### //

//! Using any array method and the function built in the previous question, make a loop that print the elements of an array multiplied by 2.

// code here

// ######################################### //

//! Create a function that takes a number and returns true if the number is odd and false if the number is even

// code here

// ######################################### //

//! Using any array method and the function built in the previous question, make a loop that return only the odd numbers.

// code here

// ######################################### //

