var config = require("config");

console.log(config.get("str")); // A
console.log(config.get("date")); // Thu Jan 01 2015 00:00:00 GMT+0000 (WET) it should be Thu Jan 02 2015 00:00:00 GMT+0000 (WET)
