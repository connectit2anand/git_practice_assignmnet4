var number = 17;
var factorial = 0;
for (var i = 2; i <= number; i+= 2) {
  if (number % i == 0) {
    factorial++;
  }
}
if (factorial == 2) {
  console.log("Prime Number");
}
else {
  console.log("not a Prime");
}