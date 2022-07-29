//Import modules
import id from './postNewGame.js'
export default class DataClass {
  static getScores() {
    let scores = [];
    if (localStorage.getItem("scores")) {
      scores = JSON.parse(localStorage.getItem("scores"));
    } else {
      localStorage.setItem("scores", JSON.stringify(scores));
    }
    return scores;
  }

  static setScores(scores) {
    localStorage.setItem("scores", JSON.stringify(scores));
  }

  static setIDGame(idGame) {
    localStorage.setItem("idGame", JSON.stringify(idGame));
  }

  static async getIDGame() {
    let idGame = [];
    if (localStorage.getItem("idGame")) {
      idGame = JSON.parse(localStorage.getItem("idGame"));
    } else {
      idGame = await id;
      this.setIDGame(idGame);
    }
    return idGame;
  }
}
