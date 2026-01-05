# 📓 NodeJS Basics 

---

## 🧠 Objectif du projet

Ce projet **NodeJS Basics** sert de terrain d’entraînement pour comprendre et pratiquer les **fondamentaux de Node.js** :

* comprendre ce qu’est Node.js et à quoi il sert
* manipuler le terminal et `npm`
* créer des scripts simples
* découvrir les modules (core & custom)
* comprendre l’asynchronisme
* poser des bases propres pour des projets plus avancés

---

###  Node.js, en bref

* Node.js = JavaScript **hors du navigateur**
* Basé sur le moteur **V8**
* Non bloquant (asynchrone)
* Très utilisé pour les API, outils CLI, serveurs

---

###  Modules

* **Core modules** : `fs`, `path`, `http`, `os`, etc.
* **Custom modules** : fichiers `.js` exportés/importés
* **Third-party modules** : installés via npm

```js
const fs = require('fs')
```

---

###  Asynchronisme

* Callbacks (à éviter si possible)
* Promises 
* async / await 

```js
async function readFile() {
  const data = await fs.promises.readFile('file.txt', 'utf-8')
  console.log(data)
}
```

---

###  Erreurs fréquentes (et leçons apprises)

*  Oublier `await`
*  Modifier `node_modules`
*  Bloquer le thread avec du code synchrone lourd
*  Lire les messages d’erreur jusqu’au bout
*  Tester souvent, petit à petit

---

**Arsinoé CHOBERT**
