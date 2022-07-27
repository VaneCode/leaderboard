// Import modules
import './sass/style.scss';
import getScoresByGame from './modules/getScoresByGame';
import DataClass from './modules/dataClass';
import createScoresUl from './modules/createScoresUl.js';
import id from './modules/postNewGame.js';
import { refreshBtn, addBtn } from './modules/domElements.js';

refreshBtn.addEventListener('click', async() =>{
  const scoresAPI = await getScoresByGame( await id);
  DataClass.setScores(scoresAPI);
  createScoresUl();
});

window.addEventListener('load', () => {
  createScoresUl();
});
