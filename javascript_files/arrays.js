/*
let shoppingList = ["ice", "cheese", "cereal"];
//console.log(shoppingList);

let myCollection = [12, "dog", true, null, NaN]; //way 1

myCollection[2] = "yolo";
myCollection[myCollection.length] = "tomato";
myCollection[myCollection.length] = "potato";

console.log(myCollection);

let num = new Array(1, 2, 3, 4, 5, 8); //way 2
//console.log(num.length);
//console.log(num[num.length - 1]);
*/

//-------------array push,pop operations ---------------

let topSongs = ["first time ", "god only knows", "a day", "tere bin"];

topSongs.push("la la la ");

topSongs[topSongs.length] = "tere";

//-------------concat --------------

let fruits = ["apple", "banana"];
let veggies = ["potato", "cauliflower"];
let meats = ["chicken", "steak"];

// console.log(fruits.concat(veggies));
// console.log(veggies.concat(fruits));

let allfood = fruits.concat(veggies, meats);

//--------------includes and indexOf--------
let ingredients = [
  "water",
  "corn starch",
  "flour",
  "cheese",
  "brown sugar",
  "shrimp",
  "eel",
  "butter",
];
// console.log(ingredients.includes("fish"));
// console.log(ingredients.includes("flour", 1));
// console.log(ingredients.indexOf("flour"));
// console.log(ingredients.indexOf("maple syrup"));
// console.log(ingredients.indexOf("butter", -1));

//---------------reverse and join-----------------

let letters = ["T", "C", "E", "P", "S", "E", "R"];

//letters.reverse();
//letters.reverse().join("&");
//[12.3,60,false].join(' #->');

//-----------------slice -----------------(does not modify the original array)

let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];
let swimmers = animals.slice(0, 3);
let mammals = animals.slice(2, 4);
//let reptiles = animals.slice(4, 6);
let reptiles = animals.slice(4);
// let quadruped = animals.slice(-3);
let quadruped = animals.slice(-3, -1);

//to make a copy of an array --
//animals.slice()

//-------------------splice (replacing,removing,adding)---------
//Array.splice(startindex, deletecount, itemnames);

animals.splice(3, 2);
animals.splice(3, 2, "aa", "ss");

//-----------------sort ----------------

let people = ["Mrs. Robbinson", "Angie", "Jolene", "Maggie May", "Roxanne"];

people.sort();

let nums = [34, 10, 10000, 67, 99]; //based on utf value these are sorted coverted to strings

//-----------reference type-------------
//value type variable
let fruit1 = "orange";

let color = fruit1;
// for array a reference is stored

let num1 = [5, 6, 7, 8, 9];

let othernum = num1;

num1.push(10);

//----------------nested arrays-------------------

const colors = [
  ["red", "crimson"],
  ["orange", "dark orange"],
  ["green", "olive"],
  ["blue", "navy blue"],
];

const board = [
  ["O", null, "X"],
  [null, "X", "O"],
  ["X", "O", null],
];
