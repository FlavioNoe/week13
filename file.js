// my file... rs..
var user = {
    first_name: "CSS",
    last_name: "HTML",
    age: 4,
    website:"java2s.com"
};
console.log("----------------------");
for (key in user) {
    console.log(key + " - with the value: " + user[key]);
}
console.log("----------------------");

var x = 0;
var sum = 0;
while (x<=11) {
    console.log("Number.: " + x);
    sum = sum + x;
    x = x + 1;
}
console.log("----------------------");
console.log("The total SUM is.: " + sum);
console.log("----------------------");