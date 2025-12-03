#!/usr/bin/env python3
"""
Module that retrieves and displays log statistics from a MongoDB collection.
"""


from pymongo import MongoClient


def get_collection():
    """Connects to MongoDB and returns the nginx logs collection."""
    client = MongoClient("mongodb://127.0.0.1:27017")
    return client.logs.nginx


def count_methods(collection):
    """"Counts the number of HTTP methods in the logs."""
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    counts = {}
    for m in methods:
        counts[m] = collection.count_documents({"method": m})
    return counts


def count_status_checks(collection):
    """Counts the number of status check logs."""
    return collection.count_documents({"method": "GET", "path": "/status"})


if __name__ == "__main__":
    col = get_collection()

    total = col.count_documents({})
    print(f"{total} logs")

    counts = count_methods(col)
    print("Methods:")
    for m in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
        print(f"\tmethod {m}: {counts[m]}")

    status = count_status_checks(col)
    print(f"{status} status check")
