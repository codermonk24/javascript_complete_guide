const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: "5 of 7",
  avgGoodSleep: "2:13",
};

let data = { a: 1 };

const numbers = {
  100: "one hundred",
  16: "sixteen",
  "76 trombones": "great song",
};

//access using numbers[100] or numbers['100']
const palette = {
  red: "#eb4db4",
  yellow: "#f9ca24",
  blue: "#30336b",
};

let color = "yellow";
console.log(palette[color]);

const reviews = {};

reviews["queens"] = 4.0;
reviews["queens"] += 2;

reviews.mrsmith = 3.5;
reviews.mrsmith++;

//--------------nested arrays and objects ------------

const student = {
  firstName: "David",
  lastName: "Jones",
  strengths: ["Music", "Arts"],
  exams: {
    midterm: 92,
    final: 88,
  },
};

const avg = (student.exams.midterm + student.exams.final) / 2;

let nums = [1, 2, 3];
let mystery = [1, 2, 3];

let moreNums = nums;

const user = {
  username: "CherryGarcia8",
  email: "abc@gmail.com",
  notifications: [],
};

//----------  === equality of references not values
//  {} === {}  ---- [] === [] ----- false
if (!(user.notifications === [])) {
  console.log("NO new notifications");
}

if (user.notifications.length === 0) {
  console.log("NO new notifications");
}
