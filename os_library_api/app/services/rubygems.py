import httpx

from app.model.library import Library, Repository

def map_gem(gem):
    return Library(
        name = gem["name"],
        author = gem["authors"],
        downloads = gem["version_downloads"],
        repository = Repository.RUBYGEMS,
        uri = gem["project_uri"]
    )

def get_rubygem_libraries(query: str):
    r = httpx.get(f'https://rubygems.org/api/v1/search.json?query={query}')
    return list(map(map_gem, r.json()))