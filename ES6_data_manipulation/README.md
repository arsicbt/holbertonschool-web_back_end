# 📓 ES6 & Data Manipulation
---

## 🖊️ Introduction

Ce README regroupe mes notes de cours sur la **manipulation de données en ES6**.
On y retrouve les concepts essentiels pour travailler avec des tableaux, des objets et des fonctions modernes en JavaScript.

ES6 (ECMAScript 2015) apporte une écriture **plus claire**, **plus lisible** et **plus puissante**, idéale pour analyser et transformer des données.

---

## 🧺 Manipulation des tableaux (Array)

### 🔁 `map()` — Transformer des données

```js
const notes = [10, 12, 14];
const notesMajorees = notes.map(note => note + 1);
```

*Utile pour appliquer une transformation à chaque élément.*

---

### 🔍 `filter()` — Sélectionner des données

```js
const notes = [8, 12, 15, 9];
const notesValidees = notes.filter(note => note >= 10);
```

*Permet de garder uniquement les données qui respectent une condition.*

---

### ➕ `reduce()` — Résumer des données

```js
const notes = [10, 12, 14];
const somme = notes.reduce((total, note) => total + note, 0);
```

*Idéal pour calculer une somme, une moyenne ou regrouper des données.*

---

## 🪄 Manipulation des objets

### 🧠 Destructuring

```js
const etudiante = {
  nom: "Sarah",
  age: 21,
  niveau: "L3"
};

const { nom, age } = etudiante;
```

*Permet d'extraire rapidement des valeurs d'un objet.*

---

### Spread Operator (`...`)

```js
const notes = [10, 12];
const nouvellesNotes = [...notes, 14];
```

*Très pratique pour copier ou fusionner des données sans les modifier.*

---

## 🧠 Fonctions fléchées (Arrow Functions)

```js
const calculerMoyenne = notes =>
  notes.reduce((a, b) => a + b, 0) / notes.length;
```

*Syntaxe plus courte et contexte `this` simplifié.*

---

## 📊 Cas pratique — Analyse de données

```js
const etudiantes = [
  { nom: "Lina", note: 14 },
  { nom: "Maya", note: 9 },
  { nom: "Ines", note: 16 }
];

const admises = etudiantes
  .filter(e => e.note >= 10)
  .map(e => e.nom);
```

Résultat : liste des étudiantes admises.

---

## 📌 Bonnes pratiques à retenir

* Préférer `map`, `filter`, `reduce` aux boucles classiques
* Ne pas modifier directement les données (immutabilité)
* Utiliser des noms de variables clairs
* Fractionner le code en petites fonctions

---

## 💭 Conclusion personnelle

ES6 rend la manipulation des données plus **expressive** et **logique**.
Avec un peu de pratique, le code devient presque une phrase lisible.

> *"Un tableau bien manipulé, c'est un bug en moins."*

---
Arsinoé CHOBERT

