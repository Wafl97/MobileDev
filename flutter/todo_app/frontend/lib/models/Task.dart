import 'package:flutter/material.dart';
import 'package:todo_app/models/Model.dart';
import 'package:uuid/uuid.dart';

class Task implements Model {
  late String id;
  late String user_id;
  late String title;
  late String description;
  late TaskState state;
  static final Map<String, TaskState> _stateMap = {
    'Todo': TaskState.TODO,
    'Doing': TaskState.DOING,
    'Done': TaskState.DONE
  };

  Task(this.id, this.user_id, this.title, this.description, this.state);

  Task.defaultState(this.user_id, this.title, this.description) {
    this.id = Uuid().v4();
    this.state = TaskState.TODO;
  }

  Task.fromJson(Map<String, dynamic> json) {
    this.id = json['_id'];
    this.user_id = json['user_id'];
    this.title = json['title'];
    this.description = json['description'];
    this.state = _stateMap[json['state']]!;
  }

  @override
  String toString() {
    return this.id +
        ': { ' +
        this.user_id +
        ',' +
        this.title +
        ',' +
        this.description +
        ',' +
        this.state.value +
        ' }';
  }

  @override
  Map<String, dynamic> toJson() {
    return {
      '_id': this.id,
      'user_id': this.user_id,
      'title': this.title,
      'description': this.description,
      'state': this.state.value
    };
  }
}

enum TaskState {
  TODO('Todo', Colors.orange),
  DOING('Doing', Colors.yellow),
  DONE('Done', Colors.green);

  const TaskState(this.value, this.color);
  final String value;
  final MaterialColor color;
}
