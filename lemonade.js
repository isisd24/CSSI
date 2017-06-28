console.log("This works better now")

var cookies = [
  "chocolate chip",
  "thin mints",
  "lemon",
  "tag-a-longs",
  "peanutbutter",
  "snickerdoodles"
];

function eat(cookies) {
  console.log('I just ate ' +cookies);
}
function eatCookies() {
  for (var i = 0; i < cookies.length; i = i + 1) {
    eat(cookies[i]);
  }
}
var eatButton = $(".devour");
eatButton.on("click", eatCookies);
