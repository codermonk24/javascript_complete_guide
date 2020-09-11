let password = "1122asdc";

if (password.length >= 6) {
  if (password.indexOf("  ") === -1) {
    console.log("password accepted");
  } else {
    console.log("spaces not allowed");
  }
} else {
  console.log("password not accepted");
}

//switch ---------------

let num = 1;

switch (num) {
  case 1:
    console.log("1");
    break;

  default:
    break;
}

//ternary operator-----------

let color = "Green";

color === "green" ? console.log("accepted") : console.log("rejected");
let status = "offline";

let colour = status === "offline" ? "red" : "green";

console.log(colour);
