//--------array callback methods ------------

//------foreach ----------
/*
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

nums.forEach(function (n) {
  console.log(n * n);
});

function printTriple(n) {
  console.log(n * 3);
}

nums.forEach(printTriple);
*/

//---------MAP----------------
/*
const texts = ["rofl", "lol", "omg", "ttyl"];
const caps = texts.map(function (t) {
  //console.log(t.toUpperCase());
  return t.toUpperCase();
});

// texts;//original array remains the same
caps; //creates new array

const numbers = [22, 34, 21, 20, 45, 66, 78];

const numDetail = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0,
  };
});

const words = ["asap", "byob", "rsvp", "diy"];

const abbrevs = words.map(function (word) {
  return word.toUpperCase().split("").join(".");
});
*/

//------------arrow functions -------------

//-------find-----------
/*
let movies = [
  "the fantastic mr.fxox",
  "Mr. and Mrs. Smith",
  "Mrs. DoubtFire",
  "Mr.Deeds",
];

const movie = movies.find((m) => {
  return m.includes("Mrs");
});

const movie1 = movies.find((m) => m.indexOf("Mrs.") === 0);
*/
//----------------filter----------------------

// const nums = [34, 35, 67, 54, 109, 102, 32, 9];

// const odds = nums.filter((n) => n % 2 === 1);

//-----------every-----------------
/*
const words = ["dig", "dog", "log"];

const last = words.every((word) => {
  const last_letter = word[word.length - 1];
  return last_letter === "g";
});
*/

//---------SOME--------------
/*
const words = ["dog", "jello", "wag"];

const l = words.some((t) => t.length > 4);
*/

//----------sort------------
/*
const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];

const badSort = prices.slice().sort();

const ascSort = prices.slice().sort((a, b) => a - b);
const descSort = prices.slice().sort((a, b) => b - a);
*/

//---------------reduce------------
/*
const sum = [3, 5, 7, 9, 11].reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue;
});

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];
*/
/*
const maxGrade = grades.reduce((max, currentVal) => {
  if (currentVal > max) max = currentVal; //return currentVal
  return max;
});
*/
// const maxGrade = grades.reduce((max, currentVal) => {
//   return Math.max(max, currentVal);
// });
/*
const sum = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
  return sum + currVal;
}, 1000);
*/

//------------tallying---------------

const votes = ["y", "y", "n", "y", "y", "n", "n", "y"];

const tally = votes.reduce((tally, vote) => {
  tally[vote] = (tally[vote] || 0) + 1;
  return tally;
}, {});
