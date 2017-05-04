// test.js

const addon = require('bindings')('addon.node');

addon((msg) => {
    console.log(msg);
});