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
    localStorage.setItem("tasks", JSON.stringify(scores));
  }
}
