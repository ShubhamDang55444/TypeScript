"use strict";
var Department = (function () {
    function Department(_name) {
        this.name = _name;
    }
    Department.prototype.describe = function () {
        console.log("Dept:" + this.name);
    };
    return Department;
}());
var depName = new Department("SD");
depName.describe();
var copyOfDept = {
    name: 's', describe: depName.describe
};
copyOfDept.describe();
//# sourceMappingURL=app.js.map