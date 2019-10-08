#! /usr/bin/env node
import { greeting, getName, generateNumber, checkAnswer, engineGame, getNOD } from '../index';

const readlineSync = require('readline-sync');


const gameNode = (name) => {
  greeting('Find the greatest common divisor of given numbers.');
  const iter = (numTry) =>{
    if (numTry==3){return console.log(`Congratulation, ${name} `)}
    let num1=generateNumber(99);
    let num2=generateNumber(99);
    let trueResult = getNOD (num1, num2);
    console.log(`Question: ${num1}  ${num2}  //${trueResult}`);
    const answerUser = readlineSync.question(`Yuor answer: `);
    checkAnswer (answerUser, trueResult, name);
  return iter((trueResult==answerUser)?numTry+1:0);
  }
return iter (0);
}

engineGame (gameNode);