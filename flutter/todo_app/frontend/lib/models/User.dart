import 'dart:convert';
import 'package:crypto/crypto.dart';
import 'package:todo_app/models/Model.dart';
import 'package:uuid/uuid.dart';

class User implements Model {
  late final String id;
  late String username;
  late String password;

  User(this.id, this.username, this.password);

  User.makeNew(this.username, this.password) {
    this.id = Uuid().v4();
    this.password = hash(this.password);
    print(this);
  }

  User.fromJson(Map<String, dynamic> json) {
    this.id = json["_id"];
    this.username = json["username"];
    this.password = json["password"];
  }

  static String hash(String plainText) {
    return sha256.convert(utf8.encode(plainText)).toString();
  }

  String toString() {
    return this.id + ': { ' + this.username + ', ' + this.password + ' }';
  }

  @override
  Map<String, dynamic> toJson() {
    return {
      '_id': this.id,
      'username': this.username,
      'password': this.password,
    };
  }
}
