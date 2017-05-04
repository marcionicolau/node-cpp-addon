// test.js

const addon = require('bindings')('addon.node');

const obj1 = addon('hello');
const obj2 = addon('world');

console.log(obj1.msg, obj2.msg);