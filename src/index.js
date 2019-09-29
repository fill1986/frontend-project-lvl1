//import readlineSync from 'readline-sync';

const actual = readlineSync.question('Your answer: ');

const greeting = (rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
};

const checkAnswer = () => {
  if ((number % 2 === 0 && answer === 'yes')) {
    correctAnswer = 'yes';
    return true;
  } if (number % 2 !== 0 && answer === 'no') {
    correctAnswer = 'no';
    return true;
  } return false;
};

export {greeting, checkAnswer};
