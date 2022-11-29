import 'package:flutter/material.dart';

class HeaderWidget extends StatelessWidget {
  final String title;

  const HeaderWidget(this.title);

  @override
  Widget build(BuildContext context) {
    return Text(title);
  }
}
