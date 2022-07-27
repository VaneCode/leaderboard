import ulRecentScores from './domElements.js';
import createScoreLi from './createScoreLi.js';
import scores from './dataClass.js';

const createScoresUl = () => {
  scores.forEach((score) => {
    ulRecentScores.appendChild(createScoreLi(score));
  });
};

export default createScoresUl;