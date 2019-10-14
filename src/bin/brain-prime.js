#! /usr/bin/env node
import {
  checkAnswer, engineGame, generateNumber, greeting,
} from '../index';

const readlineSync = require('readline-sync');

const brainPrime = (name) => {
  greeting('Answer "yes" if given number is prime. Otherwise answer "no"?');
  const iterTry = (numTry) => {
    if (numTry == 3) { return console.log(`Congratulation, ${name} `); }

    const qestionForUser = generateNumber(500);
    console.log(`Question:  ${qestionForUser}`);
    const answerUser = readlineSync.question('Answer:');

    const getTrueResult = (num) => {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) { return 'no'; }
      } return 'yes';
    };
    const trueResult = getTrueResult(qestionForUser);

    checkAnswer(answerUser, trueResult, name);
    return iterTry((trueResult == answerUser) ? numTry + 1 : 0);
  };
  iterTry(0);
};

engineGame(brainPrime);
