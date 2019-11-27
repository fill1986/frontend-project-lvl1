#! /usr/bin/env node

import generateNumber from '../engine_common_function';
import engineGame from '../engine';

const isEven = (value) => value % 2 === 0;

const brainEven = () => {
  const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getQuestionAnswer = () => {
    const question = generateNumber(0, 100);
    const trueAnswer = isEven(question) ? 'yes' : 'no';
    return [question, trueAnswer];
  };

  engineGame(getQuestionAnswer, rulesGame);
};

export default brainEven;
