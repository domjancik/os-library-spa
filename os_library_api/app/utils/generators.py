import random

from app.model.library import Library, Repository

last_names = [
    "Rozenman",
    "Jancik",
    "Tierney"
]

first_names = [
    "Itay",
    "Dominik",
    "Shannon"
]


def random_author():
    return f'{random.choice(first_names)} {random.choice(last_names)}'


adjectives = [
    "sweet",
    "small",
    "red",
    "yellow",
    "green",
    "alpha"
]

nouns = [
    'Actor',
    'Gold',
    'Painting',
    'Advertisement',
    'Grass',
    'Parrot',
    'Afternoon',
    'Greece',
    'Pencil',
    'Airport',
    'Guitar',
    'Piano',
    'Ambulance',
    'Hair',
    'Pillow',
    'Animal',
    'Hamburger',
    'Pizza',
    'Answer',
    'Helicopter',
    'Planet',
    'Apple',
    'Helmet',
    'Plastic',
    'Army',
    'Holiday',
    'Portugal',
    'Australia',
    'Honey',
    'Potato',
    'Balloon',
    'Horse',
    'Queen',
    'Banana',
    'Hospital',
    'Quill',
    'Battery',
]


def random_package_name():
    return f'{random.choice(adjectives)}-{random.choice(nouns)}-{random.randint(0,10)}'

def random_library():
    return Library(
        name = random_package_name(),
        repository = Repository.CUSTOM,
        downloads = random.randint(0, 500000),
        author = random_author(),
    )