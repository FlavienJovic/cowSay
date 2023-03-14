const userInfo = require('./information');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text :`I'm a ${userInfo.firstname} from ${userInfo.campus} `,
    e : "oO",
    T : "U "
}));

// or cowsay.think()