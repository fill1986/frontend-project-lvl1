#! /usr/bin/env node
import {
  checkAnswer, engineGame, generateNumber, greeting, readlineSync,
} from '../index';

const brainEven = (name) => {
  greeting('Answer "yes" if given number is prime. Otherwise answer "no"?');
  const iterTry = (numTry) => {
    if (numTry == 3) { return console.log(`Congratulation, ${name} `); }

    const qestionForUser = generateNumber(99);
    console.log(`Question:  ${qestionForUser}`);
    const answerUser = readlineSync.question('Answer:');
    const getTrueResult = (num) => ((num % 2 == 0) ? 'yes' : 'no');
    const trueResult = getTrueResult(qestionForUser);

    checkAnswer(answerUser, trueResult, name);
    return iterTry((trueResult == answerUser) ? numTry + 1 : 0);
  };
  return iterTry(0);
};

export { brainEven };
