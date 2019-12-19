#! /usr/bin/env node
import generateNumber from '../utils';
import engineGame from '../engine';

const signsOperations = ['-', '+', '*'];
const firstSymbol = 0;
const lastSymbol = signsOperations.length - 1;
const minValueRange = 0;
const maxValueRange = 100;
const ruleGame = 'What is the result of the expression?';

const getQuestionAnswer = () => {
  const number1 = generateNumber(minValueRange, maxValueRange);
  const number2 = generateNumber(minValueRange, maxValueRange);
  const getRandomSign = signsOperations[generateNumber(firstSymbol, lastSymbol)];
  let trueAnswer;

  switch (getRandomSign) {
    case '-': trueAnswer = number1 - number2; break;
    case '+': trueAnswer = number1 + number2; break;
    case '*': trueAnswer = number1 * number2; break;
    default: break;
  }
  const question = `${number1}${getRandomSign}${number2}=?`;

  return [question, trueAnswer.toString()];
};

const calculatorGame = () => {
  engineGame(getQuestionAnswer, ruleGame);
};

export default calculatorGame;
