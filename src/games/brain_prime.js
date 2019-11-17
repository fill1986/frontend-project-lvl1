#! /usr/bin/env node
import generateNumber from '../engine_common_function';
import engineGame from '../Engine';

const brainPrimeGame = () => {
  const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no"?';

  const iter = (countTry) => {
    if (countTry > 3) { return 'end'; }
    const Question = generateNumber(0, 1000);

    const getTrueAnswer = (num) => {
      for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) { return 'no'; }
      } return 'yes';
    };

    const trueAnswer = getTrueAnswer(Question);

    return iter(engineGame(countTry, Question, trueAnswer, rulesGame));
  };
  return iter(0);
};

export default brainPrimeGame;
