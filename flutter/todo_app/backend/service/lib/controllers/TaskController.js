"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ReturnObj_1 = tslib_1.__importDefault(require("../types/ReturnObj"));
const TaskModel_1 = require("../models/TaskModel");
class TaskController {
    constructor() {
    }
    async getTasks(req, res) {
        if (!req.params.user_id)
            return res.status(404).json(new ReturnObj_1.default("this user has no tasks"));
        const tasks = await TaskModel_1.TaskModel.find({ user_id: req.params.user_id }).exec();
        if (!tasks)
            return res.status(404).json(new ReturnObj_1.default("no tasks found"));
        return res.status(200).json(new ReturnObj_1.default("success").setValue({ "tasks": tasks }));
    }
    async postTask(req, res) {
        try {
            const task = await TaskModel_1.TaskModel.create(req.body);
            return res.status(201).json(new ReturnObj_1.default("success").setValue({ "task": task }));
        }
        catch (err) {
            return res.status(400).json(new ReturnObj_1.default(err.mesaage));
        }
    }
    async patchTask(req, res) {
        if (!req.body._id)
            return res.status(404).json(new ReturnObj_1.default("req.body._id is undefined"));
        const task = await TaskModel_1.TaskModel.findByIdAndUpdate({ _id: req.body._id }, {
            title: req.body.title,
            description: req.body.description,
            state: req.body.state,
        }, { returnOriginal: false });
        if (!task)
            return res.status(404).json(new ReturnObj_1.default(`task with id [${req.body._id}] not found`));
        return res.json(new ReturnObj_1.default("success").setValue({ "task": task }));
    }
    async deleteTask(req, res) {
        const task = await TaskModel_1.TaskModel.findOneAndDelete({ _id: req.params.task_id });
        if (!task)
            return res.status(404).json(new ReturnObj_1.default(`task with id [${req.params.task_id}] not found`));
        return res.status(200).json(new ReturnObj_1.default("success").setValue({ "task": task }));
    }
}
exports.default = TaskController;
//# sourceMappingURL=TaskController.js.map