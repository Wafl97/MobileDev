db = new Mongo().getDB("todo-app");

db.createUser({
    user: "todo-app-admin",
    pwd: "hard-password",
    roles: [
        {
            role: "readWrite",
            db: "todo-app",
        },
    ],
});

db.createCollection("tasks");
db.createCollection("users");
