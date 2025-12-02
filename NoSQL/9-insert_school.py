#!/usr/bin/env python3
"""
Module that inserts a new document in a MongoDB collection.
"""


from pymongo import MongoClient


def insert_school(mongo_collection, **kwargs):
    """Inserts a new document in a MongoDB collection."""
    inserted = mongo_collection.insert_one(kwargs)
    return inserted.inserted_ids
