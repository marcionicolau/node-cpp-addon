// hello.js
//const addon = require('./build/Release/addon');

var addon = require('bindings')('addon.node');

console.log(addon.hello());