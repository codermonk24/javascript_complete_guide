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
