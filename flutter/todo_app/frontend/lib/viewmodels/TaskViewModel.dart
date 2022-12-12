import 'dart:convert';

import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:todo_app/models/Task.dart';
import 'package:todo_app/services/backend.interface.dart';

class TaskViewModel {
  //Singleton
  static final TaskViewModel _taskViewModel = TaskViewModel._internal();
  final BackendInterface backendConnection =
      BackendInterface(dotenv.env['API_URL']! + '/task');

  factory TaskViewModel() {
    return _taskViewModel;
  }

  TaskViewModel._internal();

  Map<String, Map<String, Task>> _groupedTaskMap = {
    TaskState.TODO.value: {},
    TaskState.DOING.value: {},
    TaskState.DONE.value: {}
  };

  Future<void> initViewModel(String user_id) async {
    this._groupedTaskMap[TaskState.TODO.value]!.clear();
    this._groupedTaskMap[TaskState.DOING.value]!.clear();
    this._groupedTaskMap[TaskState.DONE.value]!.clear();
    var response = await backendConnection.GET(endpoint: '/' + user_id);
    List<Map<String, dynamic>>? jsonList =
        response.value != null ? List.from(response.value['tasks']) : null;
    jsonList?.forEach((element) {
      Task task = Task.fromJson(element);
      this._groupedTaskMap[task.state.value]!.putIfAbsent(task.id, () => task);
    });
  }

  List<Task> getAllTasksByState(TaskState state) {
    return _groupedTaskMap[state.value]!.values.toList();
  }

  void addTask(Task task) {
    backendConnection.POST(endpoint: '/', body: task.toJson());
    this._groupedTaskMap[task.state.value]!.putIfAbsent(task.id, () => task);
  }

  void addAllTasks(List<Task> tasks) {
    tasks.forEach((task) {
      this.addTask(task);
    });
  }

  void removeTask(Task task) {
    backendConnection.DELETE(endpoint: '/' + task.id);
    this._groupedTaskMap[task.state.value]!.remove(task.id);
  }

  void updateTask(Task task) {
    backendConnection.PATCH(endpoint: '/', body: task.toJson());
    this._groupedTaskMap[task.state.value]!.update(task.id, (value) => task);
  }

  void updateTaskState(Task task, TaskState oldTaskState) {
    backendConnection.PATCH(endpoint: '/', body: task.toJson());
    this._groupedTaskMap[oldTaskState.value]!.remove(task.id);
    this._groupedTaskMap[task.state.value]!.putIfAbsent(task.id, () => task);
  }
}
