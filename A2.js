// 1. Write a function that takes a string parameter, and it console "YES" if the string,
// contains 'y' other wise it console "NO".
// Example - 'Crazyy'

function isY(str) {
    for (let i in str) {
        if (str[i] === 'y') {
            return true;
        }
    }
    return false;
}
  
const inputString = 'Crazyy';
console.log(isY(inputString))

// 2. Write a function that finds a factorial of a number.
// Example - 5! = 120 (Use a normal loop for this one.)

function getFactorial(num) {
    return function (n) {
        if (n === 0 || n === 1) {
            return 1;
        } 
        else {
            return n * getFactorial()(n - 1);
        }
    };
}
  

const factorialFunction = getFactorial();
console.log(factorialFunction(5)); 
 
//3. You have an array of students
// let studentList = [
//   { name: "Mike", marks: [80, 50, 60, 100] },
//   { name: "Daniel", marks: [40, 50, 100, 100] },
//   {
//     name: "Stacy",
//     marks: [20, 100, 50, 70],
//   },
// ];

const studentList = [
    { name: "Mike", marks: [80, 50, 60, 100] },
    { name: "Daniel", marks: [40, 50, 100, 100] },
    { name: "Stacy", marks: [20, 100, 50, 70] },
];

function calculateAverageMarks(student) {
    return student.marks.reduce(function (sum, mark) {
        return sum + mark;
    }, 0) / student.marks.length;
}

function findStudentWithHighestAverage(studentList) {
    let highestAverage = 0;
    let studentWithHighestAverage = null;

    studentList.forEach(function (student) {
        const averageMarks = calculateAverageMarks(student);

        if (averageMarks > highestAverage) {
            highestAverage = averageMarks;
            studentWithHighestAverage = student;
        }
    });

    return studentWithHighestAverage;
}

const studentWithHighestAverage = findStudentWithHighestAverage(studentList);

if (studentWithHighestAverage) {
    const highestAverage = calculateAverageMarks(studentWithHighestAverage);
    console.log(studentWithHighestAverage.name + " has the highest average marks: " + highestAverage);
} else {
    console.log("No students in the list");
}


//4. HARD Question - You have to write a function that has the highest number of occurrences
// [ 20, 4, -10, 4, 11, 20, 4, 2]; // 4


function findMostFrequentElement(arr) {
    const occurrences = {};

    for (const num of arr) {
        occurrences[num] = (occurrences[num] || 0) + 1;
    }

    let mostFrequentElement = Object.keys(occurrences)[0];

    for (const num in occurrences) {
        if (occurrences[num] > occurrences[mostFrequentElement]) {
            mostFrequentElement = num;
        }
    }

    return parseInt(mostFrequentElement);
}

const array = [20, 4, -10, 4, 11, 20, 4, 2];
const mostFrequent = findMostFrequentElement(array);

console.log(`The most frequent element is: ${mostFrequent}`);



//5. You have to write a function that has to find a number which is unique in the array (I.e Only occured once)
// [20, 20, 11, 4, 11, 20, 2, 4]

function findUniqueElement(arr) {
    const occurrences = {};

    for (const num of arr) {
        occurrences[num] = (occurrences[num] || 0) + 1;
    }

    let uniqueElement = null;

    for (const num of arr) {
        if (occurrences[num] === 1) {
            uniqueElement = num;
            break;
        }
    }

    return uniqueElement;
}

const arr = [20, 20, 11, 4, 11, 20, 2, 4];
const unique = findUniqueElement(arr);

console.log("The unique element is:", unique);


//6. You have an arryay of palindromes and not palindromes,  and you have to return only palindromes array

// ['abc', 'aba', 'ccc', 'dca', 'a']

// ['aba', 'ccc', 'a']

function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
  
function filterPalindromes(arr) {
    return arr.filter(isPalindrome);
}
  
const mixedArray = ['abc', 'aba', 'ccc', 'dca', 'a'];
const palindromeArray = filterPalindromes(mixedArray);
  
console.log(palindromeArray);
  
  