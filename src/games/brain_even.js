#! /usr/bin/env node
import {
  generateNumber,
} from './engine_common_module';
import engineGame from './Engine';
import readlineSync from '../index';

const brainEven = () => {
  const gameName = 'evenGame';
  const userName = readlineSync.question('May I have you name: ');
  const iter = (countTry) => {
    if (countTry === 3) { return 'end'; }
    const Question = generateNumber(99);
    const getTrueAnswer = (num) => ((num % 2 === 0) ? 'yes' : 'no');
    const trueAnswer = getTrueAnswer(Question);

    return (iter(engineGame(countTry, Question, trueAnswer, gameName, userName)));
  };
  return iter(0);
};

export default brainEven;
