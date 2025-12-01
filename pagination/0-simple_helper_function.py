#!/usr/bin/env python3

def index_range(page: int, page_size: int) -> tuple:

    start = (page - 1) * page_size
    end = page_size * page

    return (start, end)
