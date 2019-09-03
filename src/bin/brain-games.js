#!/usr/bin/env node

var readlineSync = require('readline-sync');


console.log('Welcome to the Brain Games!, test STEP_3');
const actual = readlineSync.question('May I have you name: ');
console.log(`Hellow, dear ${actual}!`);
