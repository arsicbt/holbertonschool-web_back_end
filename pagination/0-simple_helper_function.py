#!/usr/bin/env python3
"""
Module that contains a helper function for pagination
"""


def index_range(page: int, page_size: int) -> tuple:
    """ Returns a tuple of size two containing a start index """

    start = (page - 1) * page_size
    end = page_size * page

    return (start, end)
