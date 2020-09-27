//--------default--------

function multiply(x, y) {
  /*
    if (typeof y === "undefined") {
    y = 1;
  }
  */
  y = typeof y === 'undefined' ? 1 : y;
  return x * y;
}

const greet = (person, greeting = 'hi') => {
  console.log(`${greeting}, ${person}`);
};

const blah = (x, y = [1, 2, 3]) => {
  console.log(x, y); //sequence matters
};

//spread ---------------------(No IE)
//create a new array using an existing array.spreads the elements from one array into a new array
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

console.log(...num1, ...num2);

const nums = [9, 3, 2, 8];
console.log(Math.max(nums)); //NaN
console.log(Math.max(...nums)); //9--> array using spread operator

//in object literals -- copies object properties from one object to another object
const feline = { legs: 4, family: 'felidae' };

const canine = { family: 'caninae', furry: true };

const dog = { ...canine, isPet: true };

//-------------Argument Object --------------
function sum() {
  const argsArr = [...arguments];
  return argsArr.reduce((total, currVal) => {
    return total + currVal;
  });
}

//------------REST -------------(should always be the last parameter)

function sum1(...nums) {
  return nums.reduce((total, currVal) => {
    return total + currVal;
  });
}

//----------destructuring----------

const raceresult = [
  'Eliud kipchoge',
  'feyisa lelisa',
  'galen rupp',
  'alphonce simbu',
];

const [gold, silver, bronze] = raceresult;

const [fastest, , ...everyother] = raceresult;
//---------object destructuring --------

const runner = {
  first: 'Eliud',
  last: 'kipchoge',
  country: 'kenya',
  title: 'elder of the order of the golden heart of kenya',
};

//const { first, last, country } = runner;
//const { country: nation } = runner;
//const { first, last, ...other } = runner;

const results = [
  {
    first: 'eliud',
    last: 'kipchoge',
    country: 'kenya',
  },
  {
    first: 'feyisa',
    last: 'lilesa',
    country: 'ethiopia',
  },
  {
    first: 'galen',
    last: 'rupp',
    country: 'US',
  },
];

//const [{ first: goldWinner }, { country }] = results;
const [, silverMedal] = results;
const { country } = silverMedal;
