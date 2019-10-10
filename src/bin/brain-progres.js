#! /usr/bin/env node
import {
  checkAnswer, engineGame, generateNumber, greeting,
} from '../index';

const readlineSync = require('readline-sync');

const progresGamme = (name) => {
  greeting('What number is missing in the progression?');
  const iterTry = (numTry) => {
    if (numTry == 3) { return console.log(`Congratulation, ${name} `); }
    let startProgression = generateNumber(60);
    const stepPregression = generateNumber(10);
    const arrProgression = [];
    const endProg = startProgression + stepPregression * (10 - 1);

    for (startProgression; startProgression < endProg;) {
      startProgression += stepPregression;
      arrProgression.push(startProgression);
    }

    const lostPosition = generateNumber(9);
    const trueResult = arrProgression[lostPosition];

    const createQuestion = () => {
      let stringQuestion = '';
      const iter = (count) => {
        if (count === arrProgression.length) {
          return stringQuestion;
        }
        stringQuestion += (count !== lostPosition) ? ` ${arrProgression[count]}` : ' ..';
        return iter(count + 1);
      };
      return iter(0);
    };

    console.log(`Question:  ${createQuestion()}`);
    const answerUser = readlineSync.question('Answer:');

    checkAnswer(answerUser, trueResult, name);

    return iterTry((trueResult == answerUser) ? numTry + 1 : 0);
  };
  iterTry(0);
};

engineGame(progresGamme);
