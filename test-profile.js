/**
 * Created by mr470 on 13.11.2015.
 */

var filter = require('hola-filter');
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

//for (var i = 0; i<100000; i++){
//    filter.working(messages, rules);
//}
//for (var j = 0; j<100000; j++){
//    filter.v1(messages, rules);
//}

console.log(filter.working(messages,rules));