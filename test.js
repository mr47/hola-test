/**
 * Created by mr470 on 13.11.2015.
 */

"use strict";

var filter = require('hola-filter');
var suite = require('benchmark').Suite('performance');

var messages = {
    msg1: {from: 'jack@example.com', to: 'jill@example.org'},
    msg2: {from: 'noreply@spam.com', to: 'jill@example.org'},
    msg3: {from: 'boss@work.com', to: 'jack@example.com'}
};

var rules = [
    {from: '*@work.com', action: 'tag work'},
    {from: '*@spam.com', action: 'tag spam'},
    {from: 'jack@example.com', to: 'jill@example.org', action: 'folder jack'},
    {to: 'jill@example.org', action: 'forward to jill@elsewhere.com'}
];

suite
    .on('start complete', function (ev) {
        console.log("\r\n\Performance test has been " +
            (ev.type == 'start' ? "started ... please wait" : "successfully completed!"));
    })
    .on('cycle', function (ev) {
        console.log(String(ev.target));
    })
    // Original solution
    .add('WORKING SOLUTION', function () {
        filter.working(messages, rules)
    })
    // Generic solution (1)
    .add('OPTIMIZATION #1 ', function () {
        filter.v1(messages, rules)
    })
    //// Generic solution (2)
    //.on('complete', function () {
    //    console.log('Solution #1 faster than original in ' + Math.round(this[1].hz / this[0].hz * 100) / 100 + ' times');
    //    //console.log('Solution #2 faster than original in ' + Math.round(this[2].hz / this[0].hz * 100) / 100 + ' times');
    //})
    .run({async: false});

process.exit(0);