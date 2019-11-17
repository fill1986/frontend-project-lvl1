import readlineSync from './index';

let userName;

const engineGame = (countTry, Question, trueAnswer, rulesGame) => {
  const countTrueAnswerForWin = 3;
  let countTryEngine = countTry;
  if (countTryEngine === 0) {
    userName = readlineSync.question('May I have you name: ');
    console.log(`Hellow, ${userName}`);
    console.log('Welcome to the Brain Games!');
    console.log(rulesGame);
    countTryEngine += 1;
  }

  const checkAnswer = (userAnswer, corretAnswer) => {
    if (userAnswer.toString() === corretAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${corretAnswer}"`);
      console.log(`Let's try again, ${userName}`);
    }
  };

  console.log(`Question:  ${Question}  //${trueAnswer}`);
  const userAnswer = readlineSync.question('Answer: ');
  checkAnswer(userAnswer, trueAnswer);

  if (countTryEngine === countTrueAnswerForWin) {
    console.log(`Congratulation, ${userName}`);
    countTryEngine += 1;
    return countTryEngine;
  }

  countTryEngine = (userAnswer === trueAnswer.toString()) ? countTryEngine + 1 : countTryEngine;

  return countTryEngine;
};

export default engineGame;
