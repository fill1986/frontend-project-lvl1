#! /usr/bin/env node
import generateNumber from './engine_common_module';
import engineGame from './Engine';
import readlineSync from '../index';

const brainEven = () => {
  const gameName = 'evenGame';
  const userName = readlineSync.question('May I have you name: ');
  const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const iter = (countTry) => {
    if (countTry > 3) { return 'end'; }
    const Question = generateNumber(0, 100);
    const checkEven = (value) => value % 2 === 0;
    const getTrueAnswer = (num) => (checkEven(num) ? 'yes' : 'no');
    const trueAnswer = getTrueAnswer(Question);

    return (iter(engineGame(countTry, Question, trueAnswer, gameName, userName, rulesGame)));
  };
  return iter(0);
};

export default brainEven;
