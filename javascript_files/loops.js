//------for loop----------

// for (let i = 0; i < 10; i++) {
//   console.log("hello worrld " + i);
// }

// for (let index = 1; index <= 20; index++) {
//   //   console.log(index ** 2);
//   console.log(`${index}X${index} = ${index * index}`);
// }

//-------infinite loop----------
// for (let i = 0; i >= 0; i++) {
//   console.log(i);
// }

//for loop +arrays
/*
const animals = ["lion", "tigers", "bears"];

for (let index = 0; index < animals.length; index++) {
  console.log(index, animals[index]);
}

const word = "stressed";

for (let i = word.length - 1; i >= 0; i--) {
  console.log(word[i]);
}

let reversedWord = "";
for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
}
*/

//-----------------nested loop------------------
/*
for (let i = 1; i <= 10; i++) {
  console.log("OUTER LOOP:", i);
  for (let j = 10; j >= 0; j -= 2) {
    console.log("   INNER LOOP:", j);
  }
}*/

//-------------while loop ----------------
/*for (let i = 0; i <= 5; i++) {
  console.log(i);
}*/

/*let j = 0;
while (j <= 5) {
  console.log(j);
  j++;
}*/

// const target = Math.floor(Math.random() * 10);
// console.log(target);

//-------------for..of loop

/*let nums = [1, 5, 6, 7, 9, 0];
for (let i of nums) {
  console.log(i);
}

for (let char of "cockadoodle") {
  console.log(char.toUpperCase());
}
*/

//-------fiir..of with objects
const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  "In bruges": 9,
  Amadeus: 10,
  "kill bill": 8,
};
/*
for (let x of movieReviews) {
  console.log(x); //objects are not iterable
}*/

// for (let movie of Object.keys(movieReviews)) {
//   console.log(movie, movieReviews[movie]);
// }

// for (let movie of Object.values(movieReviews)) {
//   console.log(movie);
// }

const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
  total += r;
}
total /= ratings.length;

//--------------for..in loop-----------
const jeopardyWinnings = {
  regularplay: 25222,
  watsonChallenge: 3000000,
  tournamentOfChampions: 5000000,
  battleOFtheDecades: 100000,
};

for (let key in jeopardyWinnings) {
  console.log(key);
  console.log(jeopardyWinnings[key]);
}

let total1 = 0;
for (let key in jeopardyWinnings) {
  total1 += jeopardyWinnings[key];
}
for (let k in [2, 5, 7, 8, 9]) {
  console.log(k);
}

for (let k of [2, 5, 7, 8, 9]) {
  console.log(k);
}
