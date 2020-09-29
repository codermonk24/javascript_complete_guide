//shorthand properties(no IE support)

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const max = Math.max(...reviews);
const min = Math.min(...reviews);
const sum = reviews.reduce((sum, r) => sum + r);
const avg = sum / reviews.length;

const stats = { min, max, sum, avg };

//computed properties------------

//methods(functions as properties on objects)

const math = {
  numbers: [1, 2, 3, 4, 5],
  add: function (x, y) {
    return x + y;
  },
};
//-------------OR-----------------
const math1 = {
  blah: 'Hi!',
  add(x, y) {
    return x + y;
  },
};
//TODO very important
//------------THIS ------------------
//reference to the current execution scope

function sayHi() {
  console.log('HI');
  console.log(this); //window object -- global scope in the browser
} //let and const are not aaded to the window object  but var is

const person = {
  first: 'Mrinal',
  last: 'Singh',
  nickName: 'MS',
  fullName() {
    console.log(this); //this time references to the object placed inside
  },
  fullName1() {
    const { first, last, nickName } = this;
    console.log(`${first} ${last} AKA ${nickName}`);
  },
};
