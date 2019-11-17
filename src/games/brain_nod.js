#! /usr/bin/env node
import generateNumber from '../engine_common_function';
import engineGame from '../Engine';

const getNOD = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return getNOD(num2, num1 % num2);
};

const gameNode = () => {
  const rulesGame = 'Find the greatest common divisor of given numbers.';
  const iter = (countTry) => {
    if (countTry > 3) { return 'end'; }
    const num1 = generateNumber(0, 99);
    const num2 = generateNumber(0, 99);
    const trueAnswer = getNOD(num1, num2);
    const Question = `${num1}  ${num2}`;

    return iter(engineGame(countTry, Question, trueAnswer, rulesGame));
  };
  return iter(0);
};

export default gameNode;
