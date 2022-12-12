import 'package:flutter/material.dart';
import 'package:todo_app/models/Task.dart';
import 'package:todo_app/widgets/task_widget.dart';

class TaskList extends StatefulWidget {
  final String title;
  final List<Task> taskList;
  final Function callBack;
  TaskList(Key key, this.title, this.taskList, this.callBack) : super(key: key);

  @override
  _TaskListState createState() =>
      _TaskListState(this.title, this.taskList, this.callBack);
}

class _TaskListState extends State<TaskList> {
  final String title;
  final List<Task> taskList;
  final Function callBack;

  _TaskListState(this.title, this.taskList, this.callBack);

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.blueGrey,
      margin: EdgeInsets.only(left: 2.5, right: 2.5),
      child: Column(
        children: [
          Row(
            children: [
              Expanded(
                child: Container(
                  padding: EdgeInsets.only(top: 10, bottom: 10),
                  child: Center(
                    child: Text(
                      this.title,
                      textScaleFactor: 2,
                    ),
                  ),
                  color: Colors.indigo,
                ),
              ),
            ],
          ),
          Expanded(
            child: ListView.builder(
              scrollDirection: Axis.vertical,
              shrinkWrap: true,
              padding: const EdgeInsets.all(5),
              itemCount: taskList.length,
              itemBuilder: (BuildContext context, int index) {
                return TaskWidget(UniqueKey(), taskList[index], this.callBack);
              },
            ),
          ),
        ],
      ),
    );
  }
}
