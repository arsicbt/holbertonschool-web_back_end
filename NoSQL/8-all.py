#!/usr/bin/env python3
"""
Module that lists all documents in a MongoDB collection.
"""


from typing import List
from pymongo import MongoClient


def list_all(mongo_collection) -> List:
    """List all documents in a MongoDB collection."""
    li = []
    for doc in mongo_collection.find():
        li.append(doc)
    return li
