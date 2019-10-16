import readlineSync from 'readline-sync';
import { brainEven } from './games/brain-even_module';
import { calculatorGame } from './games/brain_calc_module';
import { gameNode } from './games/brain_nod_module';
import { brainPrimeGame } from './games/brain_prime_module';
import { progresGame } from './games/brain_progres_module';

import {
  engineGame, greeting, getName, generateNumber, checkAnswer, getNOD,
} from './games/engine_common_module';

export {
  greeting, checkAnswer, getName, generateNumber, engineGame, getNOD, readlineSync, brainEven, calculatorGame, gameNode, brainPrimeGame, progresGame,
};
