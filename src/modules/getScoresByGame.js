// Async function to get scores by a game's id from the API
const getScoresByGame = async (id) => {
  const scoresAPI = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    },
  )
    .then((response) => {
      if (response.ok) return response.json();
      return Promise.reject(response);
    })
    .then((data) => data.result.sort((a, b) => b.score - a.score));
  // console.log("Response" + scoresAPI);
  // const scores = scoresAPI.result.sort((a, b) => b.score - a.score);
  return scoresAPI;
  /* const response = await fetch(path);
  const data = await response.json();
  data.result.sort((a, b) => b.score - a.score);
  return data; */
};

export default getScoresByGame;
