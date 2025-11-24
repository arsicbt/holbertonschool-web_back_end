# 🐍 Python - Variable Annotations

Salut ! \
Bienvenue dans le projet Python - **Variable Annotations**. Ici, je note tout ce que j’ai appris, testé, compris et expérimenté

## 🌱Objectif du projet 

- **Comprendre** et **utiliser** les **annotations de variables** en Python.

- **Rendre le code plus lisible** et **maintenable** grâce aux hints (str, int, list, etc.).

- Se familiariser avec le **typing module**.


## 📃Notes / Carnet de dev 
### 1️⃣ Qu’est-ce qu’une annotation ?

**Syntaxe :**

        variable: type = valeur


**Exemple rapide :**

        name: str = "Alice"
        age: int = 23


**Pourquoi c’est utile ?**

- **IDEs + linters** peuvent **checker ton code**
- Lecteur **humain comprend direct le type**
- **Prépare le terrain** pour le **type checking** avec mypy

### 2️⃣ Annotations sur les fonctions

**Pour les paramètres et le retour :**
```
def greet(name: str) -> str:
    return f"Hello, {name}"

```
*Tip : si tu oublies une annotation de retour, Python prend None par défaut.*

### 3️⃣ Typage avancé

**Listes, dictionnaires, tuples :**
```
from typing import List, Dict, Tuple

names: List[str] = ["Alice", "Bob"]
ages: Dict[str, int] = {"Alice": 23, "Bob": 25}
coordinates: Tuple[int, int] = (10, 20)
```

**Les Optional pour gérer None :**
```
from typing import Optional

nickname: Optional[str] = None
```
### 4️⃣ Bonnes pratiques que je retiens

*Toujours annoter quand c’est logique* (mais pas besoin de surcharger pour chaque variable locale).

**Utiliser mypy pour checker et éviter les galères :**
```
mypy my_script.py
```
*Typing, c’est la doc du code qui se met à jour toute seule 💡*

### 5️⃣ Notes personnelles / Testes personels

- **Les annotations ne sont pas obligatoires, Python n’impose rien à l’exécution** .
- **Elles sont 100% compatibles avec du code Python classique.**

*J’ai fait mes propres mini tests :*
```
def add(x: int, y: int) -> int:
    return x + y

result: int = add(5, 3)
print(result)  # ✅ 8
```


### 6️⃣ Prochaines étapes

- Jouer avec des Union et Any pour plus de flexibilité
- Tester avec des fonctions plus complexes, genre Callable et TypeVar
- Intégrer ça dans mes projets Holberton pour un code propre et lisible
