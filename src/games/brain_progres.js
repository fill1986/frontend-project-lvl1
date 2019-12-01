#! /usr/bin/env node
import generateNumber from '../utils';
import engineGame from '../engine';

const getQuestionAnswer = () => {
  const minValueRange = 1;
  const maxValueRange = 100;
  let startProgression = generateNumber(minValueRange, maxValueRange);
  const stepPregression = generateNumber(minValueRange, maxValueRange);
  const lengthProgression = 10;
  const progression = [];
  const endProgression = startProgression + stepPregression * lengthProgression;

  for (startProgression; startProgression < endProgression;) {
    startProgression += stepPregression;
    progression.push(startProgression);
  }

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

const ruleGame = 'What number is missing in the progression?';

const progresGame = () => {
  engineGame(getQuestionAnswer, ruleGame);
};

export default progresGame;
