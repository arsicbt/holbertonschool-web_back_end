#!/usr/bin/venv python3
"""
Module that updates topics in a MongoDB collection.
"""


from pymongo import MongoClient


def update_topics(mongo_collection, name, topics):
    """Updates topics for a school in a MongoDB collection."""
    updated = mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
    return updated
