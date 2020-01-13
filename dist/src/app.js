"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(_id, _name) {
        this.employees = [];
        this.id = _id;
        this.name = _name;
    }
    Department.prototype.describe = function () {
        console.log("Dept (" + this.id + "): " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees);
    };
    return Department;
}());
var ITDept = (function (_super) {
    __extends(ITDept, _super);
    function ITDept(_admins) {
        var _this = _super.call(this, 2, "IT") || this;
        _this.admins = _admins;
        return _this;
    }
    return ITDept;
}(Department));
var AccountDpt = (function (_super) {
    __extends(AccountDpt, _super);
    function AccountDpt(id, _reports) {
        var _this = _super.call(this, 5, "Accounts") || this;
        _this.reports = [];
        _this.reports = _reports;
        return _this;
    }
    AccountDpt.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    AccountDpt.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountDpt;
}(Department));
var itDept = new ITDept(["MAX"]);
var accounting = new AccountDpt('d1', []);
accounting.addReport('Something went wrong...');
accounting.printReports();
itDept.addEmployee("Dang");
itDept.addEmployee("XYZ");
itDept.describe();
itDept.printEmployeeInfo();
console.log(itDept);
console.log(accounting);
//# sourceMappingURL=app.js.map