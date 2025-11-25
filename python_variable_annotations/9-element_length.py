#!/usr/bin/env python3
"""
Module that contains a function which returns list of tuples
"""


from typing import Iterable, List, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Function that takes a list of sequences and returns"""
    return [(i, len(i)) for i in lst]
