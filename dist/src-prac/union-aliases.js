"use strict";
var combinedAges = combine(30, 25, "as-number");
console.log(combinedAges);
var combinedNames = combine('4', "4", "as-text");
console.log(combinedNames);
function combine(n1, n2, resultString) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === "number" || resultString === "as-number") {
        result = +n1 + +n2;
    }
    else
        result = n1.toString() + n2.toString();
    return result;
}
var u1 = { name: 'MAX' };
u1 = 'MIC';
//# sourceMappingURL=union-aliases.js.map