//Async function to get scores by a game's id from the API
const getScoresByGame = async (id) => {
  const scoresAPI = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    }
  )
    .then((response) => {
      if (response.ok) return response.json();
      return Promise.reject(response);
    })
    .then((data) => {
      //data.json();
      data.result.sort((a, b) => b.score - a.score);
      console.log(data);
    });
  return scoresAPI;
};

export default getScoresByGame;
