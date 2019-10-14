import readlineSync from 'readline-sync';
export { greeting, checkAnswer, getName, generateNumber, engineGame, getNOD };
//const actual = readlineSync.question('Your answer: ');

const engineGame = (f) => {
  const name = getName();
  return f(name);
};

const greeting = (rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
};

const getName = () => {
  const name = readlineSync.question('May I have you name: ');
  console.log(`Hellow dear ${name}`);
  return name;
};

const generateNumber = (max) => Math.floor(Math.random() * max);

const checkAnswer = (answerUser, trueResult, name) => {
  if (answerUser==trueResult){
    console.log('Correct!');
  }else {
    console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${trueResult}"`);
    console.log(`Let's try again, ${name}`);
}
}

const getNOD = (num1, num2) => {
  if ( ! num2) {
  return num1;
  }
  return getNOD(num2, num1 % num2);
}