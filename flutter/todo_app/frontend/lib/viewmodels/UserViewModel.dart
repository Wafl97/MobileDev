import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:todo_app/models/User.dart';
import 'package:todo_app/services/backend.interface.dart';

class UserViewModel {
//Singleton
  static final UserViewModel _userViewModel = UserViewModel._internal();
  final BackendInterface backendConnection =
      BackendInterface(dotenv.env['API_URL']! + '/user');

  factory UserViewModel() {
    return _userViewModel;
  }

  UserViewModel._internal();

  Future<User?> createNewUser(String username, String password) async {
    User user = User.makeNew(username, password);
    var fetchRes =
        await backendConnection.POST(endpoint: '/', body: user.toJson());
    if (fetchRes.value != null && fetchRes.value["user"] != null) {
      return User.fromJson(fetchRes.value["user"]);
    }
    return null;
  }

  Future<User?> login(String username, String password) async {
    var fetchRes = await backendConnection.POST(
        endpoint: '/login',
        body: {'username': username, 'password': User.hash(password)});
    if (fetchRes.value != null && fetchRes.value["user"] != null) {
      return User.fromJson(fetchRes.value["user"]);
    }
    return null;
  }
}
