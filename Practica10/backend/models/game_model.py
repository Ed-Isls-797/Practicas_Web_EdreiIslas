from pymongo import MongoClient
from bson.objectid import ObjectId

client = MongoClient("mongodb://localhost:27017")
db = client["videojuegos_db"]
collection = db["games"]

def get_all_games():
    games["_id"] = str(game["_id"])
    return games

def create_game(data):
    result = collection.insert_one(data)
    return str(result.insert_id)