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
    //let idGame = JSON.parse(localStorage.getItem('idGame'));
    //let idGame = await id;
    //console.log(idGame);
    //this.setIDGame(idGame);
    let idGame = [];
    if (localStorage.getItem("idGame")) {
      idGame = JSON.parse(localStorage.getItem("idGame"));
      console.log(idGame);
    } else {
      idGame = await id;
      console.log(idGame);
      this.setIDGame(idGame);
    }
    return idGame;
  }
}
