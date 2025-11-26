#!/usr/bin/env python3
"""
Spawn wait_random n times and return the delays in ascending order.
"""


import asyncio  # gère les coroutines et l’asynchronisme
from typing import List  # annoter le type

wait_random = __import__('0-basic_async_syntax').wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Execute wait_random n times with max_delay

    async def → définit une coroutine, qui peut être utilisée avec await.
    n: int → nombre de fois qu’on veut lancer wait_random.
    max_delay: int → délai maximum pour chaque wait_random.
    -> List[float] → le retour sera une liste de float.
    """

    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    # create_task(coroutine) → lance la coroutine et retourne un task objet.
    delays: List[float] = []

    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
