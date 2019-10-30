import readlineSync from '../index';

const engineGame = (countTry, Question, trueAnswer, gameName, userName) => {
  let countTryEngine = countTry;
  if (countTryEngine === 0) {
    console.log(`Hellow, ${userName}`);
    console.log('Welcome to the Brain Games!');

    switch (gameName) {
      case 'gameNode': console.log('Find the greatest common divisor of given numbers.');
        break;
      case 'calculatorGame': console.log('What is the result of the expression?');
        break;
      case 'evenGame': console.log('Answer "yes" if the number is even, otherwise answer "no".');
        break;
      case 'primeGame': console.log('Answer "yes" if given number is prime. Otherwise answer "no"?');
        break;
      case 'progresGame': console.log('What number is missing in the progression?');
        break;
      default: break;
    }
  }

  const checkAnswer = (userAnswer, corretAnswer, Name) => {
    if (userAnswer.toString() === corretAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${corretAnswer}"`);
      console.log(`Let's try again, ${Name}`);
    }
  };

  console.log(`Question:  ${Question}  //${trueAnswer}`);
  const userAnswer = readlineSync.question('Answer: ');
  checkAnswer(userAnswer, trueAnswer, userName);

  if (countTryEngine === 2) {
    console.log(`Congratulation, ${userName}`);
    countTryEngine += 1;
    return countTryEngine;
  }

  countTryEngine = (userAnswer === trueAnswer.toString()) ? countTryEngine + 1 : countTryEngine;

  return countTryEngine;
};

export default engineGame;
