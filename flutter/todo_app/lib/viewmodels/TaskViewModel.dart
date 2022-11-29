import '../task.dart';

class TaskViewModel {
  //Singleton
  static final TaskViewModel _taskViewModel = TaskViewModel._internal();

  factory TaskViewModel() {
    return _taskViewModel;
  }

  TaskViewModel._internal();

  Map<String, Task> taskMap = {};

  void addTask(Task task) {
    this.taskMap.putIfAbsent(task.id, () => task);
  }

  void addAllTasks(List<Task> tasks) {
    tasks.forEach((task) {
      this.addTask(task);
    });
  }

  void removeTask(Task task) {
    this.taskMap.remove(task.id);
  }

  void updateTask(Task task) {
    this.taskMap.update(task.id, (value) => task);
  }

  List<Task> getTasks() {
    return this.taskMap.values.toList();
  }

  Task getTask(String taskID) {
    return this.taskMap[taskID]!;
  }
}
