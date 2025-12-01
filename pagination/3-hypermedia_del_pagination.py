#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """ Returns a dictionary containing the following key-value pairs """
        # liste complete des data à paginer
        dataset = self.dataset()
        total_lines = len(dataset)

        # index: entier ? compris entre 0 et total_lines -1 ?
        assert isinstance(index, int) and 0 <= index < total_lines
        assert isinstance(page_size, int) and page_size > 0

        # page demandée :
        # prends les lignes du dataset de l’indice...
        # ...index jusqu’à index + page_size - 1
        data = dataset[index:index + page_size]

        # index + taille réelle...
        # ...(dernière page peut être plus courte que page_size)
        next_index = index + len(data)
        if next_index >= total_lines:
            # none si on atteint la fin
            next_index = None

        return {
            'index': index,
            'next_index': next_index,
            'page_size': len(data),
            'data': data,
        }
