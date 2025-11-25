#!/usr/bin/env python3
"""
Module that contains a function which creates a multiplier function
"""


from typing import Union, Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Function that returns a function that multiplies a float by multiplier"""
    def multiply(n: float) -> float:
        return n * multiplier
    return multiply
