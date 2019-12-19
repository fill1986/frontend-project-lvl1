#! /usr/bin/env node
import generateNumber from '../utils';
import engineGame from '../engine';

const ruleGame = 'What number is missing in the progression?';
const minValueRange = 1;
const maxValueRange = 100;
const lengthProgression = 10;

const generateProgression = () => {
  const startProgression = generateNumber(minValueRange, maxValueRange);
  const stepPregression = generateNumber(minValueRange, maxValueRange);
  const progression = [];
  for (let i = 0; i <= lengthProgression; i += 1) {
    progression.push(startProgression + stepPregression * i);
  }
  return progression;
};

const getQuestionAnswer = () => {
  const progression = generateProgression();
  const lostPosition = generateNumber(0, lengthProgression - 1);
  const trueAnswer = progression[lostPosition].toString();

  const createQuestion = () => {
    let stringQuestion = '';
    const iter = (count) => {
      if (count === progression.length) {
        return stringQuestion;
      }
      stringQuestion += (count !== lostPosition) ? ` ${progression[count]}` : ' ..';
      return iter(count + 1);
    };
    return iter(0);
  };
  const question = createQuestion();
  return [question, trueAnswer];
};

const progresGame = () => {
  engineGame(getQuestionAnswer, ruleGame);
};

export default progresGame;
