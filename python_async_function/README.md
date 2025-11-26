# 🌀 Python – Async
*Carnet de bord d’une étudiante Holberton en immersion dans le monde de l’asynchronisme*

Ce module m’a fait entrer dans une autre dimension du Python :
* celle où les **fonctions ne se bloquent plus les unes les autres**.
* celle où **on attend sans vraiment attendre**.
* celle où je comprends ce que fait un **event loop**.

## 🌱 Objectif du projet

*Le but ici, c’est d’apprendre à utiliser **l'asynchronisme** en Python, notamment :*

* **async def** → fonctions asynchrones
* **await** → attendre CORRECTEMENT quelque chose
* **asyncio** → le cerveau de l’opération
* **create_task** → lancer plusieurs choses en même temps
* **gather** → récupérer les résultats coordonnés
* gérer des délais non bloquants avec **sleep**



## 📝 Notes de mon carnet de dev
### 1️⃣ Ce que j’ai compris de async

**Une fonction async** ne s’exécute pas tout de suite, elle **crée une coroutine.**

**await** = “je mets cette **fonction en pause** jusqu’à ce que tu me **donnes une réponse**”.

Le programme continue pendant ce temps → magique.

**Quand j’ai compris que :**

    time.sleep(1)


et

    await asyncio.sleep(1)



#### 2️⃣ L’event loop (mon nouveau colocataire)

Je me suis imaginé l’event loop comme un organisateur d’événements dans un bureau :

* Il **garde une liste des tâches** à faire
* Il **exécute tout dès que c’est possible**
* Il passe **d’une tâche à l’autre sans bloquer**


#### 3️⃣ create_task : “allez, fais tourner ça en parallèle !”

*Quand j’ai vu que :*

    task = asyncio.create_task(async_function())


*pouvait lancer un job en arrière-plan pendant que je fais autre chose →
j’ai compris la puissance du truc.
J’ai aussi compris pourquoi on pouvait foutre le bazar si on oublie await.*

#### 4️⃣ gather : récupérer tout proprement

***gather** → c’est comme dire :*

“Ok, j’ai lancé 10 trucs, ramène-moi tout dans l’ordre.” \
super utile pour orchestrer plusieurs coroutines.

#### Mes petites expériences persos
**Essai 1 :** faire dormir plusieurs fonctions sans bloquer tout le monde
```
async def wait_random():
    await asyncio.sleep(1)
    return "done"
```

*Avec 5 tâches lancées →* 
Elles ont toutes fini à presque la même seconde.

**Essai 2 :** un mini-benchmark async

* **version synchronisée** → ~5 secondes
* **version async** → ~1.1 seconde

## Conclusion :
async, c’est comme avoir 5 mini développeurs qui t’aident en même temps.