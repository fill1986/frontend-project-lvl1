import readlineSync from 'readline-sync';

const engineGame = (getQuestionAnswer, rulesGame) => {
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
    if (count === countTrueAnswerForWin) {
      return console.log(`Congratulation, ${userName}`);
    }

    const pairQuestionAnswer = getQuestionAnswer();
    const question = pairQuestionAnswer[0];
    const trueAnswer = pairQuestionAnswer[1];
    console.log(`Question:  ${question}`);
    const userAnswer = readlineSync.question('Answer: ');
    checkAnswer(userAnswer, trueAnswer);

    return iter((userAnswer === trueAnswer) ? count + 1 : count);
  };

  return iter(0);
};

export default engineGame;
