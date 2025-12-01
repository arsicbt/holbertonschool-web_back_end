# 🗃️ Projet : NoSQL

*Carnet de bord d’une étudiante développeuse*

Salut ! \
Bienvenue dans mon petit carnet de notes sur mon **projet NoSQL**. \
Ici, je consigne mes essais, mes découvertes et mes réflexions autour **des bases de données NoSQL**.

## 🤜🏼 Objectif du projet

*L’objectif est d’**explorer les bases de données non relationnelles**, **comprendre leur fonctionnement** et **implémenter quelques opérations** simples comme :*

* **Créer une “base”** et des **“collections”**
* **Insérer des documents**
* **Interroger** et **filtrer des données**
* **Mettre à jour** ou **supprimer des documents**

*En gros, apprendre à manipuler des données sans SQL, et garder tout ça sous forme de mini-database maison pour mieux comprendre.*


## ⚙️ Fonctionnement

**Le principe de ma mini NoSQL :**

1. **Une base de données =** un dictionnaire Python contenant des collections
2. **Une collection =** liste de documents (chaque document = dictionnaire Python)

**On peut faire des opérations :**

* insert_one(document)
* find(filter)
* update(filter, new_values)
* delete(filter)

**Exemple en pseudo-code :**

```
db = Database()              # création de la base
users = db.create_collection("users")
users.insert_one({"name": "Emma", "age": 23})
users.find({"age": 23})      # [{'name': 'Emma', 'age': 23}]
```

## 🗺️ Schéma de la mini base NoSQL
```
┌───────────────────────────┐
│       Database (db)       │
│───────────────────────────│
│  collections : dict       │
│                           │
│  "users"      ──────────┐ │
│  "products"   ────────┐ │ │
│  "orders"     ───────┐ │ │
└─────────────────────┘ │ │
                        │ │
       ┌───────────────┘ │
       ▼                 ▼
┌───────────────┐   ┌───────────────┐
│ Collection:   │   │ Collection:   │
│ "users"       │   │ "products"    │
│───────────────│   │───────────────│
│ documents :   │   │ documents :   │
│ ┌───────────┐ │   │ ┌───────────┐ │
│ │ {"name":  │ │   │ │ {"id":1,  │ │
│ │  "Emma"}  │ │   │ │ "name":"Laptop"} │
│ └───────────┘ │   │ └───────────┘ │
│ ┌───────────┐ │   │ ┌───────────┐ │
│ │ {"name":  │ │   │ │ {"id":2,  │ │
│ │  "Liam"}  │ │   │ │ "name":"Phone"} │
│ └───────────┘ │   │ └───────────┘ │
└───────────────┘   └───────────────┘
```
## 📓 Notes personnelles

Je garde ce projet comme référence personnelle pour mes prochains projets NoSQL. \
Chaque fonction, et surtout chaque solution est noté pour que je puisse continuer à m'améliorer. 🌼