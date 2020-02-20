"use strict";
function AddFunction(n1, n2) {
    return n1 + n2;
}
var add_main;
add_main = function (n1, n2) { return n1 + n2; };
var user1;
var Person_main = (function () {
    function Person_main(_name) {
        this.name = _name;
    }
    Person_main.prototype.greet = function (phrase) {
        console.log("Hi I am", phrase);
    };
    return Person_main;
}());
user1 = new Person_main("Dang");
console.log(user1);
//# sourceMappingURL=interface.js.map