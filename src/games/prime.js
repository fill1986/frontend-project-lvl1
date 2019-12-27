#! /usr/bin/env node
import generateNumber from '../utils';
import engineGame from '../engine';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"?';
const minValueRange = -10;
const maxValueRange = 100;

const isPrime = (value) => {
  if (value <= 1) { return false; }
  for (let i = 2; i <= Math.sqrt(value); i += 1) {
    if (value % i === 0) { return false; }
  } return true;
};

const getQuestionAnswer = () => {
  const question = generateNumber(minValueRange, maxValueRange);
  const trueAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, trueAnswer];
};

export default () => {
  engineGame(getQuestionAnswer, gameDescription);
};
