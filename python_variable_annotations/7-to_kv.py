#!/usr/bin/env python3
"""
Module that contains a function which converts a key-value pair
"""


from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Function that takes a string and a number and returns a tuple"""
    return (k, float(v ** 2))
