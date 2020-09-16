//reusable chunks of code
function py() {
  console.log("hurray");
  console.log("adios");
}

py();

function containsPurple(arr) {
  for (let color of arr) {
    if (color === "purple" || color === "green") {
      return "present in array";
    }
  }
  return "not present";
}

const answer = containsPurple(["red", "purple"]);

//---------------password validator----------------

function isValidPassword(password, username) {
  if (password.length < 8) {
    console.log("1");
    return false;
  }
  if (password.indexOf(" ") !== -1) {
    console.log("2");
    return false;
  }
  if (password.indexOf(username) !== -1) {
    console.log("3");
    return false;
  }
}

const ans = isValidPassword("dogLover", "dg");

//------------------AVerage calculator----
let num = [];
let sum = 0;
function findAverage(num) {
  let avg = 0;
  for (let i of num) {
    sum += i;

    avg = sum / num.length;
  }
  console.log(sum);
  return avg;
}

const val = findAverage([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//-----------------pangrams---------------

function isPangram(sentence) {
  let loweredCase = sentence.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (loweredCase.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}

function isPangram_includes(sentence) {
  let loweredCase = sentence.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (!loweredCase.includes(char)) {
      return false;
    }
  }
  return true;
}

//------------get card -----------------

function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCard() {
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  //   const idx = Math.floor(Math.random() * values.length) + 1;
  //   const value = values[idx];

  const suits = ["clubs", "spades", "hearts", "diamonds"];
  //   const suitIdx = Math.floor(Math.random() * suits.length);
  //   const suit = suits[suitIdx];

  //   return { value: value, suit: suit };
  return { value: pick(values), suit: pick(suits) };
  //return [value, suits[suitIdx]];
}

//----------function scope-----------------

//block scope >>>>> function scope

if (true) {
  var animal = "eel";
  console.log(animal);
}
console.log(animal); //var scope is greater and ambiguous than let or const

if (true) {
  let animal1 = "ant";
  console.log(animal1);
}
//console.log(animal1);  ---- wont work

function doubleArr(arr) {
  const result = [];
  for (let num of arr) {
    let double = num * 2;
    result.push(double);
    console.log(double);
  }
  return result;
}

//-------------lexical scope----------

function outer() {
  let movie = "badshah";

  function inner() {
    let movie = "django unchained";
    console.log(movie.toUpperCase());
    function Extrainner() {
      //let movie = "gladiator";
      console.log(movie.toUpperCase());
    }
    Extrainner();
  }
  inner();
}
outer();

//----function expression --------

function add(x, y) {
  return x + y;
}

const add1 = function (x, y) {
  //-------function expression------
  return x + y;
};

const product = function multiply(x, y) {
  return x * y;
};

//-------function as argument ----------

function callThreeTimes(f) {
  f();
  f();
  f();
}

function cry() {
  console.log("so sad");
}

callThreeTimes(cry); //function passed as an argument thats why no ()
//cry --- it is a callback function
//---------return a function-------------

function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

const triple = multiplyBy(3);
const double = multiplyBy(2);
const halves = multiplyBy(0.5);

const a = triple(4);
console.log(a);
//-------------callback function -----------

// function greedy() {
//   alert("gahhh go away");
// }

setTimeout(() => {
  alert("gaahhh go away!");
}, 5000);
// setTimeout(function () {
//   alert("gaaahh go away");
// }, 5000);

//-----function declaration is hoisted but function expression is not
