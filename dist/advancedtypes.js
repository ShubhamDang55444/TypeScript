"use strict";
console.log("Hello");
var e1 = {
    name: "DANG",
    priveleges: "server",
    date: new Date()
};
console.log(e1);
function Add(a, b) {
    if (typeof (a) == 'string' || typeof (b) == 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(Add(2, 3));
console.log(Add('sand', 4));
console.log(Add('s', 'q'));
function PrintEmployeeInfo(emp) {
    console.log('Name:-' + emp.name);
    if ('priveleges' in emp) {
        console.log('Privelegs:-', emp.priveleges);
    }
    if ('date' in emp) {
        console.log('StartDate:-', emp.date);
    }
}
PrintEmployeeInfo(e1);
PrintEmployeeInfo({ name: 'Manu', priveleges: 'koi ni' });
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("driving");
    };
    return Car;
}());
var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('driving');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading:", amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        (vehicle.loadCargo(22));
    }
}
useVehicle(v2);
useVehicle(v1);
function AnimalSpeed(animalType) {
    var speed;
    switch (animalType.type) {
        case 'bird':
            {
                speed = animalType.flyingSpeed;
                break;
            }
        case 'horse':
            {
                speed = animalType.runningSpeed;
            }
    }
    console.log('Speed is:', speed);
}
AnimalSpeed({ type: 'bird', flyingSpeed: 10 });
//# sourceMappingURL=advancedtypes.js.map