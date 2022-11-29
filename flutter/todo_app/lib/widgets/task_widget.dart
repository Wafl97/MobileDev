import 'package:flutter/material.dart';
import 'package:todo_app/task.dart';
import 'package:todo_app/viewmodels/TaskViewModel.dart';

class TaskWidget extends StatefulWidget {
  final String taskID;

  TaskWidget(this.taskID);

  @override
  _TaskWidgetState createState() => _TaskWidgetState(taskID);
}

class _TaskWidgetState extends State<TaskWidget> {
  final TaskViewModel taskViewModel = TaskViewModel();
  final String taskID;
  late Task task;
  MaterialColor color = Colors.red;

  _TaskWidgetState(this.taskID) {
    this.task = this.taskViewModel.getTask(this.taskID);
  }

  void _next() {
    setState(() {
      switch (this.task.state) {
        case TaskState.TODO:
          this.task.state = TaskState.DOING;
          this.color = Colors.yellow;
          break;
        case TaskState.DOING:
          this.task.state = TaskState.DONE;
          this.color = Colors.green;
          break;
        case TaskState.DONE:
          break;
      }
    });
  }

  void _previous() {
    setState(() {
      switch (this.task.state) {
        case TaskState.TODO:
          break;
        case TaskState.DOING:
          this.task.state = TaskState.TODO;
          this.color = Colors.red;
          break;
        case TaskState.DONE:
          this.task.state = TaskState.DOING;
          this.color = Colors.yellow;
          break;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      color: this.color,
      child: SizedBox(
        width: 300,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            SizedBox(
              height: 10,
            ),
            Text(this.task.title),
            SizedBox(
              height: 10,
            ),
            Text(this.task.description),
            SizedBox(
              height: 10,
            ),
            FloatingActionButton(
                onPressed: _next, child: Icon(Icons.arrow_right)),
            FloatingActionButton(
                onPressed: _previous, child: Icon(Icons.arrow_left)),
            Text.rich(
              TextSpan(
                text: 'State: ' + this.task.state.value,
                children: [],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
