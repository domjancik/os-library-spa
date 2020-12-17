from uuid import uuid4

class MemoryDB:
    def __init__(self, model_class):
        self.items = {}
        self.model_class = model_class
    
    def get_all(self):
        return list(self.items.values())

    def find(self, uid):
        return self.items[uid]

    def insert(self, item):
        item.uid = str(uuid4())
        self.items[item.uid] = item
        return item

    def update(self, uid, item):
        item_to_update = self.find(uid)

        new_values = dict(item_to_update)
        item_without_none = dict(filter(lambda x : x[1] != None, dict(item).items()))

        new_values.update(item_without_none)
        new_values["uid"] = uid

        updated_item = self.model_class(**new_values)
        self.items[uid] = updated_item

        return updated_item

    def delete(self, uid):
        try:
            del self.items[uid]
            return True
        except:
            return False
