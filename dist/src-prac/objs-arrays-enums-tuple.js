"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READONLY"] = 1] = "READONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "dang",
    age: 123,
    hobbies: ["dang", "dang"],
    role: Role.ADMIN
};
console.log(person.name);
console.log(person.hobbies[0]);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
//# sourceMappingURL=objs-arrays-enums-tuple.js.map