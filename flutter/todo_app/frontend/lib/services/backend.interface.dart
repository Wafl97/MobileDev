import 'dart:convert';

import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:http/http.dart';

class BackendInterface {
  final String API_BASE_URL;
  late final Map<String, String> headers = {'api_key': dotenv.env['API_KEY']!};

  BackendInterface(this.API_BASE_URL) {
    print('api@' + this.API_BASE_URL);
  }

  Future<FetchResult> GET({required String endpoint}) async {
    var respose = await get(Uri.parse(this.API_BASE_URL + endpoint),
        headers: this.headers);
    var resBody = respose.body;
    var jsonBody = json.decode(resBody);
    if (jsonBody['value'] != null) {
      return FetchResult.withValue(jsonBody['message'], jsonBody['value']);
    }
    return FetchResult(jsonBody['message']);
  }

  Future<FetchResult> POST(
      {required String endpoint, Map<String, dynamic>? body}) async {
    var respose = await post(Uri.parse(this.API_BASE_URL + endpoint),
        headers: this.headers, body: body);
    var resBody = respose.body;
    var jsonBody = json.decode(resBody);
    if (jsonBody['value'] != null) {
      return FetchResult.withValue(jsonBody['message'], jsonBody['value']);
    }
    return FetchResult(jsonBody['message']);
  }

  Future<FetchResult> PATCH(
      {required String endpoint, Map<String, dynamic>? body}) async {
    var response = await patch(Uri.parse(this.API_BASE_URL + endpoint),
        headers: this.headers, body: body);
    var resBody = response.body;
    var jsonBody = json.decode(resBody);
    if (jsonBody['value'] != null) {
      return FetchResult.withValue(jsonBody['message'], jsonBody['value']);
    }
    return FetchResult(jsonBody['message']);
  }

  Future<FetchResult> DELETE(
      {required String endpoint, Map<String, dynamic>? body}) async {
    var response = await delete(Uri.parse(this.API_BASE_URL + endpoint),
        headers: this.headers, body: body);
    var resBody = response.body;
    var jsonBody = json.decode(resBody);
    if (jsonBody['value'] != null) {
      return FetchResult.withValue(jsonBody['message'], jsonBody['value']);
    }
    return FetchResult(jsonBody['message']);
  }
}

class FetchResult {
  String message;
  dynamic value;

  FetchResult(this.message);

  FetchResult.withValue(this.message, this.value);
}
