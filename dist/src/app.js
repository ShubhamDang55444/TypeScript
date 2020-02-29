"use strict";
console.log("Heello");
function Merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
var mergedRes = Merge({ name: 'max' }, { age: 40 });
console.log(mergedRes.age);
function CountAndDescribe(element) {
    if (element.length < 1) {
        console.log("Got no values");
    }
    else
        console.log("Got" + " " + element.length + " " + "values");
    return element;
}
(CountAndDescribe(['aa', 'b']));
function ExtractAndConvert(obj1, key) {
    return obj1[key];
}
console.log(ExtractAndConvert({ name: 'MAX', age: 'undefined' }, 'age'));
var DataStorage = (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItemData = function () {
        return this.data;
    };
    return DataStorage;
}());
var numberStorage = new DataStorage();
numberStorage.addItem(5);
numberStorage.addItem(22323);
numberStorage.addItem(2);
numberStorage.addItem(3);
console.log(numberStorage.getItemData());
numberStorage.removeItem(5);
console.log(numberStorage.getItemData());
var stringStorage = new DataStorage();
stringStorage.getItemData();
//# sourceMappingURL=app.js.map