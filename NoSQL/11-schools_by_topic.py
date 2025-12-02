#!/usr/bin/env python3
"""
Module that retrieves schools by topic from a MongoDB collection.
"""


from pymongo import MongoClient


def schools_by_topic(mongo_collection, topic):
    """Retrieves all schools that offer a specific topic."""
    return list(mongo_collection.find({"topics": topic}))
