import { greeting } from '../index';

const readlineSync = require('readline-sync');

/*const greeting = (rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
};*/


const getName = () => {
  const name = readlineSync.question('May I have you name: ');
  console.log(`Hellow dear ${name}`);
  return name;
};

const generateNumber = () => Math.floor(Math.random() * 99);

const engine = (f) => {
  const name = getName();
  return f(name);
};

// calk

const calculatorGame = (name) => {
  greeting('What is the result of the expression?');

  const iterCalc = (count) => {
    if (count === 3) { return console.log(`Congradulations, ${name}`); }
    const a = generateNumber();
    const b = generateNumber();
    let operator;
    const answer = readlineSync.question(`${a}+${b}=`);

    return iterCalc(count+1); // добавить проверку правильност и рандом знака
  };

  return iterCalc(0);
};

engine(calculatorGame);
