#! /usr/bin/env node
import generateNumber from './engine_common_module';
import engineGame from './Engine';
import readlineSync from '../index';

const brainPrimeGame = () => {
  const gameName = 'primeGame';
  const userName = readlineSync.question('May I have you name: ');
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

    return iter(engineGame(countTry, Question, trueAnswer, gameName, userName, rulesGame));
  };
  return iter(0);
};

export default brainPrimeGame;
