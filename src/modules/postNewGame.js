// Async function to post a new game in the API
const postNewGame = async () => {
  const game = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'MicroGame',
      }),
      method: 'POST',
    },
  ).then((response) => {
    if (response.ok) return response.json();
    return Promise.reject(response);
  }).then((data) => data.result.split(' ')[3]);
  return game;
};

const id = postNewGame();
export default id;
