const generateNumber = (max) => Math.floor(Math.random() * max);

const checkAnswer = (answerUser, trueResult, name) => {
  if (answerUser === trueResult) {
    console.log('Correct!');
  } else {
    console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${trueResult}"`);
    console.log(`Let's try again, ${name}`);
  }
};

const getNOD = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return getNOD(num2, num1 % num2);
};

export {
  generateNumber, checkAnswer, getNOD,
};
