import generateNumber from '../utils';
import engineGame from '../engine';

const isEven = (value) => value % 2 === 0;
const minValueRange = 0;
const maxValueRange = 1000;
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAnswer = () => {
  const question = generateNumber(minValueRange, maxValueRange);
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return [question, trueAnswer];
};

export default () => {
  engineGame(getQuestionAnswer, gameDescription);
};
