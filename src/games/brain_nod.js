#! /usr/bin/env node
import {
  getNOD, generateNumber,
} from './engine_common_module';
import engineGame from './Engine';
import readlineSync from '../index';

const gameNode = () => {
  const gameName = 'gameNode';
  const userName = readlineSync.question('May I have you name: ');
  const iter = (countTry) => {
    if (countTry > 3) { return 'end'; }
    const num1 = generateNumber(99);
    const num2 = generateNumber(99);
    const trueAnswer = getNOD(num1, num2);
    const Question = `${num1}  ${num2}`;

    return iter(engineGame(countTry, Question, trueAnswer, gameName, userName));
  };
  return iter(0);
};

export default gameNode;
