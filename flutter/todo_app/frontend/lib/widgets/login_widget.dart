import 'package:flutter/material.dart';
import 'package:todo_app/models/User.dart';
import 'package:todo_app/viewmodels/UserViewModel.dart';
import 'package:todo_app/widgets/dashboard.dart';

class LoginWidget extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _LoginFormState();
}

class _LoginFormState extends State<LoginWidget> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final TextEditingController _usernameController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Login"),
      ),
      body: Center(
        child: Container(
          padding: EdgeInsets.all(20),
          width: 500,
          child: Column(
            children: [
              Form(
                key: _formKey,
                child: Column(
                  children: <Widget>[
                    TextFormField(
                      controller: this._usernameController,
                      decoration: InputDecoration(hintText: "User Name"),
                      validator: (String? value) {
                        if (value == null || value.isEmpty) {
                          return "Please enter a user name";
                        }
                        return null;
                      },
                    ),
                    TextFormField(
                      controller: this._passwordController,
                      decoration: InputDecoration(hintText: "Password"),
                      validator: (String? value) {
                        if (value == null || value.isEmpty) {
                          return "Please enter a password";
                        }
                        return null;
                      },
                    ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: ElevatedButton(
                    child: Text("Login"),
                    onPressed: () {
                      if (this._formKey.currentState!.validate()) {
                        _handleLogin();
                      }
                    }),
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: ElevatedButton(
                    child: Text("Create New User"),
                    onPressed: () {
                      if (this._formKey.currentState!.validate()) {
                        _handleNewUser();
                      }
                    }),
              ),
            ],
          ),
        ),
      ),
    );
  }

  _handleLogin() {
    String username = this._usernameController.text;
    String password = this._passwordController.text;
    UserViewModel().login(username, password).then((User? user) {
      if (user != null) {
        Navigator.of(context).push(
          MaterialPageRoute(
            builder: (context) => Dashboard(user: user),
          ),
        );
      } else {
        showDialog(
            context: context,
            builder: (BuildContext context) => AlertDialog(
                  title: Text("Wrong user credentials"),
                  actions: <Widget>[
                    TextButton(
                        onPressed: () => {
                              Navigator.of(context).pop(),
                            },
                        child: Text("Ok")),
                  ],
                ));
      }
    });
  }

  _handleNewUser() {
    String username = this._usernameController.text;
    String password = this._passwordController.text;
    UserViewModel().createNewUser(username, password).then((User? user) {
      if (user != null) {
        Navigator.of(context).push(
          MaterialPageRoute(
            builder: (context) => Dashboard(user: user),
          ),
        );
      } else {
        showDialog(
            context: context,
            builder: (BuildContext context) => AlertDialog(
                  title: Text("User already exists"),
                  actions: <Widget>[
                    TextButton(
                        onPressed: () => {
                              Navigator.of(context).pop(),
                            },
                        child: Text("Ok")),
                  ],
                ));
      }
    });
  }
}
