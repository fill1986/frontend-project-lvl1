import readlineSync from 'readline-sync';

const engineGame = (funcQuestionAnswer, rulesGame) => {
  const countTrueAnswerForWin = 3;
  const userName = readlineSync.question('May I have you name: ');
  console.log(`Hellow, ${userName}`);
  console.log('Welcome to the Brain Games!');
  console.log(rulesGame);

  const checkAnswer = (userAnswer, corretAnswer) => {
    if (userAnswer === corretAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${corretAnswer}"`);
      console.log(`Let's try again, ${userName}`);
    }
  };

  const iter = (count) => {
    let countTryEngine = count;
    if (countTryEngine === countTrueAnswerForWin) {
      console.log(`Congratulation, ${userName}`);
      countTryEngine += 1;
      return countTryEngine;
    }

    const pairQuestionAnswer = funcQuestionAnswer();
    const question = pairQuestionAnswer[0];
    const trueAnswer = pairQuestionAnswer[1];
    console.log(`Question:  ${question}`);

    const userAnswer = readlineSync.question('Answer: ');
    checkAnswer(userAnswer, trueAnswer);

    countTryEngine = (userAnswer === trueAnswer) ? countTryEngine + 1 : countTryEngine;
    return iter(countTryEngine);
  };

  return iter(0);
};

export default engineGame;
