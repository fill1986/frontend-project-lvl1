#! /usr/bin/env node
import generateNumber from './engine_common_module';
import engineGame from './Engine';
import readlineSync from '../index';

const getNOD = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return getNOD(num2, num1 % num2);
};

const gameNode = () => {
  const rulesGame = 'Find the greatest common divisor of given numbers.';
  const gameName = 'gameNode';
  const userName = readlineSync.question('May I have you name: ');
  const iter = (countTry) => {
    if (countTry > 3) { return 'end'; }
    const num1 = generateNumber(0, 99);
    const num2 = generateNumber(0, 99);
    const trueAnswer = getNOD(num1, num2);
    const Question = `${num1}  ${num2}`;

    return iter(engineGame(countTry, Question, trueAnswer, gameName, userName, rulesGame));
  };
  return iter(0);
};

export default gameNode;
