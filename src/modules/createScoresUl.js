import { ulRecentScores } from "./domElements";
import createScoreLi from "./createScoreLi";
import { scores } from "./dataClass";

const createScoresUl = () =>{
    scores.forEach(score => {
        ulRecentScores.appendChild(createScoreLi(score));
    });
}

export default createScoresUl;