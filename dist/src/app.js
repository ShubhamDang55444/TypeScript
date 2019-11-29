"use strict";
var Addd = function (num1, num2) { return num1 + num2; };
var Print = function (output) { return console.log(output); };
console.log(Addd(5, 5));
var myHobbies = ['a', 'b'];
var myActiveHobbies = ['c'];
myActiveHobbies.push.apply(myActiveHobbies, myHobbies);
console.log(myActiveHobbies);
//# sourceMappingURL=app.js.map