#! /usr/bin/env node
import {
  generateNumber,
} from './engine_common_module';
import engineGame from './Engine';
import readlineSync from '../index';


const progresGame = () => {
  const gameName = 'progresGame';
  const userName = readlineSync.question('May I have you name: ');

  const iterTry = (countTry) => {
    if (countTry > 3) { return 'end'; }
    let startProgression = generateNumber(60);
    const stepPregression = generateNumber(10);
    const arrProgression = [];
    const endProg = startProgression + stepPregression * (10 - 1);

    for (startProgression; startProgression < endProg;) {
      startProgression += stepPregression;
      arrProgression.push(startProgression);
    }

    const lostPosition = generateNumber(9);
    const trueAnswer = arrProgression[lostPosition];

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
    const Question = createQuestion();

    return iterTry(engineGame(countTry, Question, trueAnswer, gameName, userName));
  };
  iterTry(0);
};

export default progresGame;
