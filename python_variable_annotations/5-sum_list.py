#!/usr/bin/env python3
"""
Module that makes the sum a list of floats with type annotations.
"""


from typing import List


def sum_list(input_list: List[float]) -> float:
    """ Return the sum of a given list and convert it to a flaot """
    return float(sum(input_list))
