import 'task.dart';

class TaskList {
  late Map<String, Task> taskList;
  TaskList(this.taskList);
  TaskList.empty() {
    this.taskList = {};
  }

  List<Task> getTasks() {
    return this.taskList.values.toList();
  }

  void addTask(Task task) {
    this.taskList.putIfAbsent(task.id, () => task);
  }

  void removeTask(Task task) {
    this.taskList.remove(task.id);
  }
}
