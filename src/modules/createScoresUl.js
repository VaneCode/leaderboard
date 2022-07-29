import { ulRecentScores } from './domElements.js';
import createScoreLi from './createScoreLi.js';
import cleanElement from './cleanElement.js';
import getScoresByGame from './getScoresByGame.js';
import DataClass from './dataClass.js';

const createScoresUl = async () => {
  cleanElement('.ulRecentScores');
  const id = await DataClass.getIDGame();
  const scores = await getScoresByGame(id);
  scores.forEach((score) => {
    ulRecentScores.appendChild(createScoreLi(score));
  });
};

export default createScoresUl;
