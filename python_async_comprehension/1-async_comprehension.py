#!/usr/bin/env python3
"""Async Generator that yields a random number"""


from typing import List


async_generator = __import__('0-async_comprehension').async_generator


async def async_comprehensio() -> List[float]:
    """ Collect 10 random numbers using an async comprehensing"""
    return [num async for num in async_generator()]
