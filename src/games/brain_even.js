#! /usr/bin/env node
import generateNumber from '../engine_common_function';
import engineGame from '../Engine';

const brainEven = () => {
  const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const iter = (countTry) => {
    if (countTry > 3) { return 'end'; }
    const Question = generateNumber(0, 100);
    const isEven = (value) => value % 2 === 0;
    const checkQuestion = (func, value) => (func(value) ? 'yes' : 'no');
    const getTrueAnswer = (num) => checkQuestion(isEven, num);
    const trueAnswer = getTrueAnswer(Question);

    return (iter(engineGame(countTry, Question, trueAnswer, rulesGame)));
  };
  return iter(0);
};

export default brainEven;
