import 'package:flutter/material.dart';
import 'package:todo_app/models/Task.dart';
import 'package:todo_app/viewmodels/TaskViewModel.dart';

class TaskWidget extends StatefulWidget {
  final Task task;
  final Function callBack;

  TaskWidget(Key key, this.task, this.callBack) : super(key: key);

  @override
  _TaskWidgetState createState() => _TaskWidgetState(this.task, this.callBack);
}

class _TaskWidgetState extends State<TaskWidget> {
  final TaskViewModel taskViewModel = TaskViewModel();
  late Task task;
  late MaterialColor color = this.task.state.color;
  final Function callBack;

  _TaskWidgetState(this.task, this.callBack);

  void _next() {
    var oldState = this.task.state;
    if (oldState == TaskState.TODO) {
      this.task.state = TaskState.DOING;
    } else if (oldState == TaskState.DOING) {
      this.task.state = TaskState.DONE;
    }
    TaskViewModel().updateTaskState(this.task, oldState);
    callBack();
  }

  void _previous() {
    var oldState = this.task.state;
    if (oldState == TaskState.DONE) {
      this.task.state = TaskState.DOING;
    } else if (oldState == TaskState.DOING) {
      this.task.state = TaskState.TODO;
    }
    TaskViewModel().updateTaskState(this.task, oldState);
    callBack();
  }

  void _removeTask() {
    TaskViewModel().removeTask(task);
    callBack();
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.all(5),
      color: this.color,
      child: Container(
        margin: EdgeInsets.all(10),
        child: SizedBox(
          child: Column(
            children: <Widget>[
              Align(
                alignment: Alignment.topRight,
                child: FloatingActionButton(
                  heroTag: this.task.id + "del",
                  onPressed: _removeTask,
                  child: Icon(Icons.delete),
                  backgroundColor: Colors.red,
                ),
              ),
              Align(
                alignment: Alignment.center,
                child: Text(
                  this.task.title,
                  style: TextStyle(fontSize: 20),
                ),
              ),
              Align(
                alignment: Alignment.topCenter,
                child: Text(
                  this.task.description,
                  style: TextStyle(fontSize: 16),
                ),
              ),
              Stack(
                alignment: Alignment.bottomCenter,
                children: [
                  Align(
                    alignment: Alignment.bottomLeft,
                    child: FloatingActionButton(
                      heroTag: this.task.id + "left",
                      onPressed:
                          this.task.state == TaskState.TODO ? null : _previous,
                      child: Icon(Icons.arrow_left),
                      backgroundColor: this.task.state == TaskState.TODO
                          ? Colors.grey
                          : Colors.blue,
                    ),
                  ),
                  Align(
                    alignment: Alignment.bottomRight,
                    child: FloatingActionButton(
                      heroTag: this.task.id + "right",
                      onPressed:
                          this.task.state == TaskState.DONE ? null : _next,
                      child: Icon(Icons.arrow_right),
                      backgroundColor: this.task.state == TaskState.DONE
                          ? Colors.grey
                          : Colors.blue,
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
