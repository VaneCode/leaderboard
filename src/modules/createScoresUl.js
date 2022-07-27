import { ulRecentScores } from './domElements.js';
import createScoreLi from './createScoreLi.js';
import DataClass from './dataClass.js';

const createScoresUl = () => {
  const scores = DataClass.getScores();
  scores.forEach((score) => {
    ulRecentScores.appendChild(createScoreLi(score));
  });
};

export default createScoresUl;
