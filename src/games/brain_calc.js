#! /usr/bin/env node
import generateNumber from '../engine_common_function';
import engineGame from '../engine';

const symbolArr = ['-', '+', '*'];

const calculatorGame = () => {
  const rulesGame = 'What is the result of the expression?';
  const getQuestionAnswer = () => {
    const number1 = generateNumber(0, 100);
    const number2 = generateNumber(0, 100);
    const getRandomSign = generateNumber(0, 2);
    let resultExpression;

    switch (getRandomSign) {
      case 0: resultExpression = number1 - number2; break;
      case 1: resultExpression = number1 + number2; break;
      case 2: resultExpression = number1 * number2; break;
      default: break;
    }

    const question = `${number1}${symbolArr[getRandomSign]}${number2}=?`;

    return [question, resultExpression];
  };

  engineGame(getQuestionAnswer, rulesGame);
};

export default calculatorGame;
