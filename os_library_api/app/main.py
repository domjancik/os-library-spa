from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import asyncio
import uvicorn

from app.routers import libraries
from app.db.db import db
from app.utils.generators import random_library
from app.services.rubygems import get_rubygem_libraries

app = FastAPI(
    title="OSS Libraries API",
    description="List auto generated and fetched libraries",
    version="0.0.1",
)

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def configure():
    for i in range(20):
        db.insert(random_library())

    app.include_router(libraries.router)
    print("configured")

def fetchApiData(query: str):
    libs = get_rubygem_libraries(query)
    for lib in libs:
        db.insert(lib)

configure()
fetchApiData('cors')
fetchApiData('cucumber')
    
