#!/usr/bin/env python3


from pymongo import MongoClient


def insert_school(mongo_collection, **kwargs):
    li = []
    for to_insert in mongo_collection.find():
        li.insert(kwarg)
    return li
