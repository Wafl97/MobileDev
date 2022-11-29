class Task {
  late String id;
  late String title;
  late String description;
  late TaskState state;

  Task(this.id, this.title, this.description, this.state);

  Task.defaultState(this.id, this.title, this.description) {
    this.state = TaskState.TODO;
  }

  Task.from(Task task) {
    this.id = task.id;
    this.title = task.title;
    this.description = task.description;
    this.state = task.state;
  }

  @override
  String toString() {
    return this.id +
        ': { ' +
        this.title +
        "," +
        this.description +
        "," +
        this.state.toString() +
        " }";
  }
}

enum TaskState {
  TODO("TODO"),
  DOING("DOING"),
  DONE("DONE");

  const TaskState(this.value);
  final String value;
}
