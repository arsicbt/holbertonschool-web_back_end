export default function handleResponseFromAPI(promise) {

  return promise
    .then(() => {
      // succès
      return {
        status: 200,
        body: 'success',
      };
    })

    .catch(() => {
      // erreur
      return new Error();
    })

    .finally(() => {
      // succès | erreur
      console.log('Got a response from the API');
    });
}
