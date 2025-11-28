#!/usr/bin/env python3
"""
Measure runtime of parallel async comprehensions
"""

import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Execute async_comprehension 4*t in parallel and measure total time"""
    start_time = time.time()

    await asyncio.gather(
        *[async_comprehension() for _ in range(4)]
    )

    end_time = time.time()
    return end_time - start_time
