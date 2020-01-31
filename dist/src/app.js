"use strict";
var user1;
var Person = (function () {
    function Person(_name) {
        this.name = _name;
    }
    Person.prototype.greet = function (phrase) {
        console.log("Hi I am", phrase);
    };
    return Person;
}());
user1 = new Person("Dang");
console.log(user1);
//# sourceMappingURL=app.js.map