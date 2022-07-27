// Import modules
import './sass/style.scss';
import createScoresUl from './modules/createScoresUl.js';
import id from './modules/createGame.js';

window.addEventListener('load', () => {
  createScoresUl();
  console.log(`Este es el id${id}`);
});
