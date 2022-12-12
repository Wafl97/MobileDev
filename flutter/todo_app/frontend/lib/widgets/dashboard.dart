import 'package:flutter/material.dart';
import 'package:todo_app/models/Task.dart';
import 'package:todo_app/models/User.dart';
import 'package:todo_app/viewmodels/TaskViewModel.dart';
import 'package:todo_app/widgets/task_list.dart';

class Dashboard extends StatefulWidget {
  late final User user;

  Dashboard({required User user}) {
    this.user = user;
    print(user.id);
  }

  @override
  State<StatefulWidget> createState() => _DashboardState(user: this.user);
}

class _DashboardState extends State<Dashboard> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final TextEditingController _taskTitleController = TextEditingController();
  final TextEditingController _taskDescriptionController =
      TextEditingController();

  late final User user;
  List<Task> todoList = [];
  List<Task> doingList = [];
  List<Task> doneList = [];

  _DashboardState({required User user}) {
    this.user = user;
    TaskViewModel().initViewModel(user.id).then((value) => {
          setState(() {
            _updateLists();
          }),
        });
  }

  _updateLists() {
    todoList = TaskViewModel().getAllTasksByState(TaskState.TODO);
    doingList = TaskViewModel().getAllTasksByState(TaskState.DOING);
    doneList = TaskViewModel().getAllTasksByState(TaskState.DONE);
  }

  _updateListsCallBack() {
    setState(() {
      _updateLists();
    });
  }

  _handleNewTask() {
    String title = this._taskTitleController.text;
    this._taskTitleController.clear();
    String description = this._taskDescriptionController.text;
    this._taskDescriptionController.clear();
    TaskViewModel()
        .addTask(Task.defaultState(this.user.id, title, description));
    Navigator.of(context).pop();
    setState(() {
      _updateLists();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Welcome " + this.user.username),
      ),
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.max,
          children: [
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Align(
                alignment: Alignment.topLeft,
                child: FloatingActionButton(
                  onPressed: () {
                    showDialog(
                      context: context,
                      builder: (BuildContext context) => AlertDialog(
                        title: Text("Create new task"),
                        actions: <Widget>[
                          Form(
                            key: this._formKey,
                            child: Column(
                              children: <Widget>[
                                TextFormField(
                                  controller: this._taskTitleController,
                                  decoration:
                                      InputDecoration(hintText: "Title"),
                                  validator: (String? value) {
                                    if (value == null || value.isEmpty) {
                                      return "Please enter a title";
                                    }
                                    return null;
                                  },
                                ),
                                TextFormField(
                                  controller: this._taskDescriptionController,
                                  decoration:
                                      InputDecoration(hintText: "Desctiption"),
                                ),
                              ],
                            ),
                          ),
                          TextButton(
                              onPressed: () => {
                                    if (this._formKey.currentState!.validate())
                                      {
                                        _handleNewTask(),
                                      }
                                  },
                              child: Text("Add")),
                        ],
                      ),
                    );
                  },
                  child: Icon(Icons.add),
                  backgroundColor: Colors.green,
                ),
              ),
            ),
            Expanded(
              child: Row(
                mainAxisSize: MainAxisSize.max,
                children: [
                  Expanded(
                    child: TaskList(UniqueKey(), 'Todo', todoList,
                        () => _updateListsCallBack()),
                  ),
                  Expanded(
                    child: TaskList(UniqueKey(), 'Doing', doingList,
                        () => _updateListsCallBack()),
                  ),
                  Expanded(
                    child: TaskList(UniqueKey(), 'Done', doneList,
                        () => _updateListsCallBack()),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
