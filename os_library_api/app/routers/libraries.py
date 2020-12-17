from fastapi import APIRouter, HTTPException
import random

from app.db.db import db
from app.model.library import Library, PatchLibrary

router = APIRouter()

def raise_item_not_found():
    raise HTTPException(status_code=404, detail="Item not found")

@router.get("/libraries")
def read_libraries():
    return db.get_all()

@router.get("/library/random")
def read_random_library():
    return random.choice(db.get_all())

@router.get("/library/{uid}")
def read_library(uid: str):
    try:
        return db.find(uid)
    except:
        raise_item_not_found()

@router.post("/library")
def add_library(library: Library):
    return db.insert(library)

@router.put("/library/{uid}")
def update_library(uid: str, library: Library):
    try:
        return db.update(uid, library)
    except:
        raise_item_not_found()

@router.patch("/library/{uid}")
def patch_library(uid: str, library: PatchLibrary):
    # try:
    return db.update(uid, library)
    # except:
        # raise_item_not_found()

@router.delete("/library/{uid}")
def delete_library(uid: str):
    db.delete(uid)
    return {"status": "Deleted"}