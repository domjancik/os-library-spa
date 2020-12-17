import random
from typing import Optional
from pydantic import BaseModel
from enum import Enum

class Repository(Enum):
    NPM = 'npm'
    MAVEN = 'Maven'
    CUSTOM = 'Custom'
    RUBYGEMS = 'RubyGems'

class Library(BaseModel):
    uid: Optional[str]
    name: str
    repository: Repository
    downloads: int
    author: str
    uri: Optional[str]

class PatchLibrary(BaseModel):
    uid: Optional[str]
    name: Optional[str]
    repository: Optional[Repository]
    downloads: Optional[int]
    author: Optional[str]
    uri: Optional[str]
