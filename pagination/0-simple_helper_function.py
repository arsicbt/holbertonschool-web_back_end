#!/usr/bin/env python3

def index_range(page: int, page_size: int) -> tuple:
    start = 0
    end = 0

    for i in range(0, page_size - 1):
        start = (page - 1) * page_size
        end = page_size * page

    return (start, end)
