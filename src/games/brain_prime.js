#! /usr/bin/env node
import generateNumber from '../engine_common_function';
import engineGame from '../engine';

const brainPrimeGame = () => {
  const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no"?';

  const getQuestionAnswer = () => {
    const question = generateNumber(0, 1000);

    const getTrueAnswer = (num) => {
      for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) { return 'no'; }
      } return 'yes';
    };

    const trueAnswer = getTrueAnswer(question);

    return [question, trueAnswer];
  };

  engineGame(getQuestionAnswer, rulesGame);
};

export default brainPrimeGame;
