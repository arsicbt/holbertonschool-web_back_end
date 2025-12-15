export default function getResponseFromAPI() {
  const newPromise = new Promise((resolve, reject) => {
    const succes = true;

    if (succes) {
      resolve('Opération réussie !');
    } else {
      reject('Opération échouée !');
    }
  });

  return newPromise;
}
