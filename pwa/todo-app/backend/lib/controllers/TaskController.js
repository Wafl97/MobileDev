"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TaskModel_1 = require("../models/TaskModel");
class TaskController {
    constructor() {
    }
    async findAllTasks(req, res) {
        const tasks = await TaskModel_1.TaskModel.find();
        if (!tasks)
            return res.status(404).json({ "empty": "no tasks found" });
        return res.status(200).json(tasks);
    }
    async findTask(req, res) {
        const task = await TaskModel_1.TaskModel.findOne({ _id: req.params.task_id });
        if (!task)
            return res.status(404).json({ "bad id": `task with id [${req.params.task_id}] not found` });
        return res.json(task);
    }
    async storeTask(req, res) {
        try {
            const task = await TaskModel_1.TaskModel.create(req.body);
            return res.status(201).json(task);
        }
        catch (err) {
            return res.status(400).json(err.message);
        }
    }
    async updateTask(req, res) {
        const task = await TaskModel_1.TaskModel.findByIdAndUpdate({ _id: req.body.id }, { returnOriginal: false });
        if (!task)
            return res.status(404).json({ "bad id": `task with id [${req.params.task_id}] not found` });
        return res.json(task);
    }
    async removeTask(req, res) {
        const task = await TaskModel_1.TaskModel.findOneAndDelete({ _id: req.params.task_id });
        if (!task)
            return res.status(404).json({ "bad id": `task with id [${req.params.task_id}] not found` });
        return res.status(200).json(task);
    }
}
exports.default = TaskController;
//# sourceMappingURL=TaskController.js.map