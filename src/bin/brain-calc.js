#! /usr/bin/env node
import { greeting, getName, generateNumber, checkAnswer } from '../index';
const readlineSync = require('readline-sync');

const engine = (f) => {
  const name = getName();
  return f(name);
};

const calculatorGame = (name) => {
  greeting('What is the result of the expression?');
  const symbolArr = ['-', '+', '*'];

  const iterCalc = (count) => {
    if (count === 3) { return console.log(`Congradulations, ${name}`); }

    const number1 = generateNumber(99);
    const number2 = generateNumber(99);
    const getRandomSign = generateNumber(3);
    let ResultExpression;

    switch (getRandomSign) {
      case 0: ResultExpression = number1 - number2; break;
      case 1: ResultExpression = number1 + number2; break;
      case 2: ResultExpression = number1 * number2; break;
    }

    const answer = readlineSync.question(`${number1}${symbolArr[getRandomSign]}${number2}=?`);
    count = (answer == ResultExpression) ? count + 1 : 0;
    checkAnswer(answer, ResultExpression, name);

    return iterCalc(count);
  };

  return iterCalc(0);
};

engine(calculatorGame);
