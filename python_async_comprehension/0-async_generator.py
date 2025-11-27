#!/usr/bin/env python3
"""Async Generator that yields a random number"""

import asyncio
import random


async def async_generator() -> float:
    """ Function that generates a random number between 0 and 10
    every second for 1 seconds."""
    for _ in range(0, 10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)  # stop, je donne la rp
