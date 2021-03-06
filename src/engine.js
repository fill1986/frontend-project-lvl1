import readlineSync from 'readline-sync';

const roundsCount = 3;

const engineGame = (getQuestionAnswer, gameDescription) => {
  const userName = readlineSync.question('May I have you name: ');
  console.log(`Hellow, ${userName}`);
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);

  const iter = (count) => {
    if (count === roundsCount) {
      console.log(`Congratulation, ${userName}`);
      return;
    }

    const [question, trueAnswer] = getQuestionAnswer();
    console.log(`Question:${question}`);
    const userAnswer = readlineSync.question('Answer:');

    if (userAnswer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}"`);
      console.log(`Let's try again, ${userName}`);
      return;
    }

    iter(count + 1);
  };

  iter(0);
};

export default engineGame;
