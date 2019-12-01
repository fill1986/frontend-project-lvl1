#! /usr/bin/env node
import generateNumber from '../utils';
import engineGame from '../engine';

const isSimple = (value) => {
  for (let i = 2; i <= Math.sqrt(value); i += 1) {
    if (value % i === 0) { return false; }
  } return true;
};

const getQuestionAnswer = () => {
  const minValueRange = 0;
  const maxValueRange = 1000;
  const question = generateNumber(minValueRange, maxValueRange);
  const trueAnswer = isSimple(question) ? 'yes' : 'no';

  return [question, trueAnswer];
};

const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no"?';

const brainPrimeGame = () => {
  engineGame(getQuestionAnswer, ruleGame);
};

export default brainPrimeGame;
