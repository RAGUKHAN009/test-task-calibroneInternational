
// QUESTION 1

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];
let largestNumber = findLargestNumber(numbersArray);

function findLargestNumber(arr) {
    return Math.max(...arr);
}
console.log(largestNumber); 

// QUESTION 2

let InitialString = "Hello";
function reverseString(testString) {
    return testString.split('').reverse().join('');
}


let reversedString = reverseString(InitialString);
console.log(reversedString);


// QUESTION 3

function CheckIfDuplicates(arr) {
    const TestArray = new Set(arr);
    return TestArray.size !== arr.length;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3, 4, 4];

console.log(CheckIfDuplicates(array1));
console.log(CheckIfDuplicates(array2));

// 
