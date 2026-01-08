// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

// Example:

// Input: "hello"
// Output: "olleh"

// Solution:---
console.log('Problem 1 : ');


function reverseAString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseAString("hello"));

console.log(" ");

// --------------------------------------------
// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:

// Input: "programming"
// Output: 3

// Solution:---
console.log('Problem 2 : ');

function countVowels(str) {
    const convertedStr = str.toLocaleLowerCase();
    const separateLetter = convertedStr.split('');
    let count = 0;
    for (let i = 0; i <= separateLetter.length - 1; i++) {
        // console.log(separateWord[i]);
        if (separateLetter[i] === 'a' || separateLetter[i] === 'e' || separateLetter[i] === 'i' || separateLetter[i] === 'o' || separateLetter[i] === 'u') {
            count++
        }
    }
    return count;
}

console.log(countVowels('programming'));

console.log(" ");

// --------------------------------------------
// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

// Solution:---
console.log('Problem 3 : ');

function checkPalindrome(str) {
    const convertedStr = str.toLocaleLowerCase();
    const reversedStr = convertedStr.split('').reverse().join('');
    const check = convertedStr === reversedStr;
    return check
}

console.log(checkPalindrome('madam'));
console.log(checkPalindrome('hello'));

console.log(" ");

// --------------------------------------------
// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

// Example:

// Input: [5, 1, 9, 3]
// Output: 9

// Solution:---
console.log('Problem 4 : ');

const numbers = [5, 1, 9, 3];
const findMaximumNumber = Math.max(...numbers);
console.log(findMaximumNumber);

console.log(" ");

// --------------------------------------------
// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

// Example:

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]
console.log('Problem 5 : ');

const numbersOfArray = [1, 2, 2, 3, 2, 4, 4]

function checkDuplicateValue(arr) {
    let removedDuplicate = arr.filter((value, index) => arr.indexOf(value) === index);
    return removedDuplicate;
}

console.log(checkDuplicateValue(numbersOfArray));

console.log(" ");

// --------------------------------------------
// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.

// Example:

// Input: [1, 2, 3, 4]
// Output: 10

// Solution:---
console.log('Problem 6 : ');

const digits = [1, 2, 3, 4];

function totalSum(numberOfArr) {
    let total = 0
    const totalSum = numberOfArr.reduce((acc, value) => {
        let total = acc + value;
        return total;
    }, 0);
    return totalSum;
}

console.log(totalSum(digits));

console.log(" ");

// --------------------------------------------
// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

// Example:

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

// Solution:---
console.log('Problem 7 : ');

const arrayOfNumbers = [1, 2, 3, 4, 5, 6];

function findEvenNumbers(arr) {
    const evenNumbers = arr.filter(even => even % 2 === 0)
    return evenNumbers
}

console.log(findEvenNumbers(arrayOfNumbers));

console.log(" ");

// --------------------------------------------
// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

// Example:

// Input: "hello world"
// Output: "Hello World"

// Solution:---
console.log('Problem 8 : ');

function capitalizeFirstWord(sentence) {
    const splitedTheSen = sentence.split(" ")
    let modifiedSentence = '';
    let arrayOfWord = [];
    for (let i = 0; i <= splitedTheSen.length - 1; i++) {
        let capitalizedLetter = splitedTheSen[i][0].toUpperCase();
        let otherLetters = splitedTheSen[i].slice(1);
        let word = capitalizedLetter + otherLetters;
        arrayOfWord.push(word)
        modifiedSentence = arrayOfWord.join(" ");
    }
    return modifiedSentence;
}

console.log(capitalizeFirstWord('hello world'));

console.log(" ");


// --------------------------------------------
// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120

// Solution:---
console.log('Problem 9 : ');

function findFactorialNumber(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i

    }
    return factorial;
}

console.log(findFactorialNumber(5));


console.log(" ");

// --------------------------------------------
// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.

// Example:

// For multiples of 3, print "Ping"
// For multiples of 5, print "Pong"
// For multiples of both 3 and 5, print "PingPong"
// If the number is not a multiple of 3 or 5, print the number itself
// Example Output:

// 1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16 …..

// Solution:---
console.log('Problem 10 : ');

function pingpong() {
    let result = [];
    for (let i = 1; i <= 20; i++) {
        let value = i;
        if (i % 3 === 0 && i % 5 === 0) {
            value = 'PingPong';
        } else if (i % 3 === 0) {
            value = 'Ping';
        } else if (i % 5 === 0) {
            value = 'Pong';
        }
        result.push(value)
    }
    return result.join(', ')
}
console.log(pingpong());
