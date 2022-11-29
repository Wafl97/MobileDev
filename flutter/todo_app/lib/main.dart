import 'package:flutter/material.dart';
import 'package:todo_app/task.dart';
import 'package:todo_app/widgets/task_widget.dart';
import 'package:todo_app/viewmodels/TaskViewModel.dart';

void main() {
  Task t1 = Task.defaultState("0", "Task1", "0");
  Task t2 = Task.defaultState("1", "Task2", "1");
  Task t3 = Task.defaultState("2", "Task3", "2");
  TaskViewModel().addAllTasks([t1, t2, t3]);
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
          child: Column(
        children: <Widget>[
          TaskWidget('0'),
          TaskWidget('1'),
          TaskWidget('2'),
        ],
      )), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
