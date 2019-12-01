#! /usr/bin/env node
import generateNumber from '../utils';
import engineGame from '../engine';

const getGreatestCommonDivisor = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return getGreatestCommonDivisor(num2, num1 % num2);
};

const getQuestionAnswer = () => {
  const minValueRange = 0;
  const maxValueRange = 99;
  const num1 = generateNumber(minValueRange, maxValueRange);
  const num2 = generateNumber(minValueRange, maxValueRange);
  const trueAnswer = (getGreatestCommonDivisor(num1, num2)).toString();
  const question = `${num1}  ${num2}`;
  return [question, trueAnswer];
};

const ruleGame = 'Find the greatest common divisor of given numbers.';

const gameNode = () => {
  engineGame(getQuestionAnswer, ruleGame);
};

export default gameNode;
