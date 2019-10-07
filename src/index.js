import readlineSync from 'readline-sync';
export { greeting, checkAnswer, getName, generateNumber };
//const actual = readlineSync.question('Your answer: ');

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