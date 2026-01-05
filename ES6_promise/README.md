# ES6 Promises ⌛
---
## Concepts clés
### 1️⃣ Qu’est-ce qu’une Promise ?

* Une Promise représente **une valeur qui n’est pas encore **, mais qui **le sera dans le futur**.

**Elle peut avoir 3 états :**

* **Pending (en attente)** – l’opération n’est pas encore terminée
* **Fulfilled (résolue)** – l’opération a réussi
* **Rejected (rejetée)** – l’opération a échoué

### 2️⃣ Créer une Promise
```
const maPromise = new Promise((resolve, reject) => {
  const succes = true;

  if (succes) {
    resolve('Opération réussie !');
  } else {
    reject('Opération échouée !');
  }
});
```

### 3️⃣ Consommer une Promise
Avec **.then()** et **.catch()**
```
maPromise
  .then(resultat => console.log(resultat)) // exécuté si résolue
  .catch(erreur => console.error(erreur)); // exécuté si rejetée
```
### 4️⃣ Async/Await (ES8)

Les Promises peuvent être **utilisées avec async/await** pour un code plus lisible :
```
async function fetchData() {
  try {
    const resultat = await maPromise;
    console.log(resultat);
  } catch (erreur) {
    console.error(erreur);
  }
}

fetchData();
```
### 5️⃣ Méthodes utilitaires des Promises

**Promise.all() →** attend que toutes les Promises soient résolues \
**Promise.race() →** se résout ou se rejette dès qu’une Promise se termine \
**Promise.resolve() / Promise.reject() →** créer rapidement une Promise résolue ou rejetée
```
Promise.all([promise1, promise2])
  .then(resultats => console.log(resultats))
  .catch(err => console.error(err));
```
---
**Arsinoé CHOBERT**
