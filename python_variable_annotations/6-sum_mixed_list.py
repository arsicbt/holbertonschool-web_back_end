#!/usr/bin/env python3
"""
Module that contains a function which sums a list of mixed
"""


from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Function that sums a list of integers and floats"""
    return float(sum(mxd_lst))
