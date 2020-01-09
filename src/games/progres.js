import generateNumber from '../utils';
import engineGame from '../engine';

const gameDescription = 'What number is missing in the progression?';
const minValueRange = 1;
const maxValueRange = 100;
const lengthProgression = 10;

const generateProgression = () => {
  const startProgression = generateNumber(minValueRange, maxValueRange);
  const stepPregression = generateNumber(minValueRange, maxValueRange);
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(startProgression + stepPregression * i);
  }
  return progression;
};

const getQuestionAnswer = () => {
  const progression = generateProgression();
  const lostPosition = generateNumber(0, lengthProgression - 1);
  const trueAnswer = progression[lostPosition].toString();
  progression.splice(lostPosition, 1, '..');
  return [progression.join(' '), trueAnswer];
};

export default () => {
  engineGame(getQuestionAnswer, gameDescription);
};
