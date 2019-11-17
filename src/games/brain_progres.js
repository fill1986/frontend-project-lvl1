#! /usr/bin/env node
import generateNumber from '../engine_common_function';
import engineGame from '../Engine';

const progresGame = () => {
  const rulesGame = 'What number is missing in the progression?';
  const iterTry = (countTry) => {
    if (countTry > 3) { return 'end'; }
    let startProgression = generateNumber(0, 100);
    const stepPregression = generateNumber(1, 10);
    const lengthProgression = 10;
    const arrProgression = [];
    const endProg = startProgression + stepPregression * lengthProgression;

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

    return iterTry(engineGame(countTry, Question, trueAnswer, rulesGame));
  };
  iterTry(0);
};

export default progresGame;
