import generateNumber from '../utils';
import engineGame from '../engine';

const signs = ['-', '+', '*'];
const firstSign = 0;
const lastSign = signs.length - 1;
const minValueRange = 0;
const maxValueRange = 100;
const gameDescription = 'What is the result of the expression?';

const getQuestionAnswer = () => {
  const number1 = generateNumber(minValueRange, maxValueRange);
  const number2 = generateNumber(minValueRange, maxValueRange);
  const randomSign = signs[generateNumber(firstSign, lastSign)];
  let trueAnswer;

  switch (randomSign) {
    case '-': trueAnswer = number1 - number2; break;
    case '+': trueAnswer = number1 + number2; break;
    case '*': trueAnswer = number1 * number2; break;
    default: break;
  }
  const question = `${number1}${randomSign}${number2}=?`;

  return [question, trueAnswer.toString()];
};

export default () => {
  engineGame(getQuestionAnswer, gameDescription);
};
