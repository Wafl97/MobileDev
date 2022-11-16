"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = exports.TaskModel = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
let Task = class Task {
    constructor(_id, title, description, state) {
        this._id = _id;
        this.title = title;
        this.description = description;
        this.state = state;
    }
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], Task.prototype, "_id", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Task.prototype, "title", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Task.prototype, "description", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Task.prototype, "state", void 0);
Task = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({ schemaOptions: { collection: "tasks", timestamps: true } }),
    tslib_1.__metadata("design:paramtypes", [String, String, String, String])
], Task);
exports.Task = Task;
const TaskModel = (0, typegoose_1.getModelForClass)(Task);
exports.TaskModel = TaskModel;
//# sourceMappingURL=TaskModel.js.map