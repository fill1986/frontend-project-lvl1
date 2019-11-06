#! /usr/bin/env node
import generateNumber from './engine_common_module';
import engineGame from './Engine';
import readlineSync from '../index';


const calculatorGame = () => {
  const gameName = 'calculatorGame';
  const userName = readlineSync.question('May I have you name: ');
  const symbolArr = ['-', '+', '*'];
  const rulesGame = 'What is the result of the expression?';

  const iter = (countTry) => {
    if (countTry > 3) { return 'end'; }

    const number1 = generateNumber(0, 100);
    const number2 = generateNumber(0, 100);
    const getRandomSign = generateNumber(0, 3);
    let ResultExpression;

    switch (getRandomSign) {
      case 0: ResultExpression = number1 - number2; break;
      case 1: ResultExpression = number1 + number2; break;
      case 2: ResultExpression = number1 * number2; break;
      default: break;
    }

    const Question = `${number1}${symbolArr[getRandomSign]}${number2}=?`;

    return iter(engineGame(countTry, Question, ResultExpression, gameName, userName, rulesGame));
  };

  return iter(0);
};

export default calculatorGame;
