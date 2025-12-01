# 📚 Projet : Pagination

*Carnet de bord d’une étudiante développeuse*

Hello ! \
Bienvenue sur mon petit projet de pagination.\
Ce dépôt rassemble mes essais, mes découvertes et mes notes autour d’un sujet qui paraît simple au début… mais qui ne l’est pas tant que ça : comment afficher des données page par page proprement ?

## 🌱 Objectif du projet

*L’objectif principal est d’**implémenter un système de pagination clair**, pratique et **facile à réutiliser dans de futurs projets**.*

**Je veux surtout comprendre :**

* comment **découper une grande liste en plusieurs pages**,
* comment **naviguer entre ces pages**,
* comment **gérer les cas limites** (page 0, page trop grande, liste vide…),

*et comment rendre tout ça agréable côté interface.*


## ✨ Fonctionnement

*La **pagination repose sur quelques concepts simples** :*

* **itemsPerPage →** combien d’éléments afficher à la fois
* **currentPage →** la page où on se trouve
* **totalPages →** le nombre total de pages calculé automatiquement
* **des boutons :** Précédent, Suivant, Aller à la page…

## 🗺️ Schéma de fonctionnement – Pagination
```
                 ┌───────────────────────────────┐
                 │         LISTE COMPLÈTE        │
                 │  [ éléments : 1,2,3,...,100 ] │
                 └───────────────────────────────┘
                                │
                                ▼
                   (découpage par pages)
                                │
                                ▼
          ┌──────────────┬──────────────┬──────────────┬──────────────┐
          │   Page 1     │   Page 2     │   Page 3     │   Page 4     │
          │ [1 → 10]     │ [11 → 20]    │ [21 → 30]    │ [31 → 40]    │
          └──────────────┴──────────────┴──────────────┴──────────────┘
                                │
                                ▼
                      (navigation utilisateur)
                                │
                                ▼
    ┌───────────────────────────────────────────────────────────┐
    │   ⟨ Précédent | 1 | 2 | 3 | 4 | 5 | ... | Suivant ⟩        |
    └───────────────────────────────────────────────────────────┘

```

## 📁 Structure du projet
```
/pagination
│── Popular_Baby_Names.csv 
│── 0-simple_helper_function.py
│── 0-main.py
│── 1-simple_pagination.py
│── 1-main.py
│── 2-hypermedia_pagination.py
│── 2-main.py
│── 3-hypermedia_del_pagination.py
└── 3-main.py
```


## 🌺 Ce que j'ai appris

* Que la pagination, c’est plus subtil qu’un simple “affiche 10 éléments”.
* Que penser aux utilisateurs (et à leurs clics) change tout.


## 📓 Notes personnelles

Je garde ce projet comme une référence pour mes prochains sites.
N’hésite pas à t’en inspirer ou à me suggérer des améliorations 🌼