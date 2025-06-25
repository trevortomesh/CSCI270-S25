"use strict";

console.log("Start");
setTimeout(function () {
  console.log("Timer done");
}, 0);
Promise.resolve().then(function () {
  console.log("Promise Done");
});
console.log("End");