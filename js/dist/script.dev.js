"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

console.log("1");
var number = 5; //изменяемая информация

var leftBorderWidth = 1; //константа

number = 10;
console.log(number);
leftBorderWidth = (_readOnlyError("leftBorderWidth"), 10);
var obj = {
  a: 50
};
obj.a = 10;
console.log(obj); // прямых констант не бывает 

console.log(name);
var name = 'ivan';
{
  var _result = 50;
}
console.log(result);