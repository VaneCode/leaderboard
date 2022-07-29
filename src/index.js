// Import modules
import "./sass/style.scss";
import getScoresByGame from "./modules/getScoresByGame.js";
import postNewScore from "./modules/postNewScore.js";
import DataClass from "./modules/dataClass.js";
import createScoresUl from "./modules/createScoresUl.js";
import validationFrm from "./modules/validationFrm.js";
import {
  refreshBtn,
  addBtn,
  inpName,
  inpScore,
  msg,
  frmAddScore,
} from "./modules/domElements.js";

refreshBtn.addEventListener("click", async () => {
  const id = await DataClass.getIDGame();
  const scoresAPI = await getScoresByGame(id);
  DataClass.setScores(scoresAPI);
  createScoresUl();
});

frmAddScore.addEventListener("submit", async (e) => {
  e.preventDefault();
  const val = validationFrm(frmAddScore);
  if (val === "correct") {
    const name = frmAddScore.elements[0].value;
    const score = frmAddScore.elements[1].value;
    const id = await DataClass.getIDGame();
    const result= await postNewScore(id, name, score);
    console.log(result);
    
    /*if(result.lenght !== 0){
      //msg.textContent = successMsg;
      setTimeout(() => {
        msg.textContent = " ";
      }, 5000);
    }*/
    //Clean the form
    //frmAddScore.reset();
  } else {
    msg.textContent = val;
  }
});

window.addEventListener("load", () => {
  createScoresUl();
});
