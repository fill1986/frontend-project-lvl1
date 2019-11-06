import readlineSync from '../index';


const engineGame = (countTry, Question, trueAnswer, gameName, userName, rulesGame) => {
  const countTrueAnswerForWin = 3;
  let countTryEngine = countTry;
  if (countTryEngine === 0) {
    console.log(`Hellow, ${userName}`);
    console.log('Welcome to the Brain Games!');
    console.log(rulesGame);
    countTryEngine += 1;
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

  if (countTryEngine === countTrueAnswerForWin) {
    console.log(`Congratulation, ${userName}`);
    countTryEngine += 1;
    return countTryEngine;
  }

  countTryEngine = (userAnswer === trueAnswer.toString()) ? countTryEngine + 1 : countTryEngine;

  return countTryEngine;
};

export default engineGame;
