// Async function to post a new score in the API
const postNewScore = async (id, userName, userScore) => {
  const score = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`,
    {
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        user: userName,
        score: userScore,
      }),
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
    },
  ).then((response) => {
    if (response.ok) return response.json();
    return Promise.reject(response);
  })
    .then((data) => data.result);
  return score;
};

export default postNewScore;
