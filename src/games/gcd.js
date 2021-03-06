import generateNumber from '../utils';
import engineGame from '../engine';

const getGreatestCommonDivisor = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return getGreatestCommonDivisor(num2, num1 % num2);
};

const minValueRange = 0;
const maxValueRange = 99;
const gameDescription = 'Find the greatest common divisor of given numbers.';

const getQuestionAnswer = () => {
  const num1 = generateNumber(minValueRange, maxValueRange);
  const num2 = generateNumber(minValueRange, maxValueRange);
  const trueAnswer = (getGreatestCommonDivisor(num1, num2)).toString();
  const question = `${num1} and ${num2}`;
  return [question, trueAnswer];
};

export default () => {
  engineGame(getQuestionAnswer, gameDescription);
};
