#!/usr/bin/env node

const readlineSync = require('readline-sync');

const brainEven = () => {
  let answer;
  let correctAnswer;
  let result;
  let number;
  let counter;
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const name = readlineSync.question('May I have you name: ');
  console.log(`Hellow dear ${name}`);
  const iter = (count) => {
    number = Math.floor(Math.random() * 99);
    console.log(`Question: ${number}`);
    if (count === 3) {
      return console.log(`Coungradulation: ${name}`);
    }
    answer = readlineSync.question('You answer: ');

    const checkAnswer = () => {
      if ((number % 2 === 0 && answer === 'yes')) {
        correctAnswer = 'yes';
        return true;
      } if (number % 2 !== 0 && answer === 'no') {
        correctAnswer = 'no';
        return true;
      } return false;
    };
    result = checkAnswer();
    counter = (result) ? count + 1 : 0;
    if (checkAnswer()) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${name}`);
    }
    return iter(counter);
  };

  return iter(0);
};


brainEven();
