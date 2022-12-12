import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:flutter/material.dart';
import 'package:todo_app/widgets/login_widget.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  //wait for the .env file to load
  dotenv.load(fileName: '.env').then((value) => runApp(TodoApp()));
}

class TodoApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'TODO App',
      theme: ThemeData(
        primarySwatch: Colors.indigo,
      ),
      home: LoginWidget(),
    );
  }
}
