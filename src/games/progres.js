#! /usr/bin/env node
import generateNumber from '../utils';
import engineGame from '../engine';

const gameDescription = 'What number is missing in the progression?';
const minValueRange = 1;
const maxValueRange = 100;
const lengthProgression = 10;
const startProgression = generateNumber(minValueRange, maxValueRange);
const stepPregression = generateNumber(minValueRange, maxValueRange);

const generateProgression = (start = startProgression, step = stepPregression) => {
  const progression = [];
  for (let i = 0; i <= lengthProgression; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const createQuestion = (progression, lostPosition) => {
  let question = '';
  const iter = (count) => {
    if (count === progression.length) {
      return question;
    }
    question += (count !== lostPosition) ? ` ${progression[count]}` : ' ..';
    return iter(count + 1);
  };
  return iter(0);
};

const getQuestionAnswer = () => {
  const progression = generateProgression();
  const lostPosition = generateNumber(0, lengthProgression - 1);
  const trueAnswer = progression[lostPosition].toString();
  const question = createQuestion(progression, lostPosition);
  return [question, trueAnswer];
};

export default () => {
  engineGame(getQuestionAnswer, gameDescription);
};
