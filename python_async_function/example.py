"""
Exécuter une coroutine
"""

import asyncio

async def dire_bonjour():
    print("Bonjour")
    await asyncio.sleep(1)
    print("Au revoir")

# Exécution
asyncio.run(dire_bonjour())


"""
Lancer plusieurs coroutines en parallèle
"""
async def tache(n):
    await asyncio.sleep(n)
    return f"Tâche {n} terminée"

async def main():
    resultats = await asyncio.gather(tache(1), tache(2), tache(3))
    print(resultats)

asyncio.run(main())
