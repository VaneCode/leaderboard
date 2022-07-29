// Function to generate an li element
const createScoreLi = (score) => {
  // Create elements
  const scoreLi = document.createElement('li');
  const pScore = document.createElement('p');

  // Add text to elements
  pScore.textContent = `${score.user}:${score.score}`;

  // Build li
  scoreLi.appendChild(pScore);

  return scoreLi;
};

export default createScoreLi;