"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Addd = function (num1, num2) { return num1 + num2; };
var Print = function (output) { return console.log(output); };
console.log(Addd(5, 5));
var myHobbies = ['a', 'b'];
var myActiveHobbies = ['c'];
myActiveHobbies.push.apply(myActiveHobbies, myHobbies);
console.log(myActiveHobbies);
var Person = {
    age: 30,
    sal: 3000
};
var copiedPerson = __assign({}, Person);
function AddUsingRP() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
}
var AddedNos = AddUsingRP(3, 5, 4, 5, 3);
console.log(AddedNos);
//# sourceMappingURL=app.js.map