db = new Mongo().getDB("todo-app")

db.createCollection('tasks')