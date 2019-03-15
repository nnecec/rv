import 'package:flutter/material.dart';

class Wallet extends StatelessWidget {
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Wallet"),
      ),
      body: Column(
        children: <Widget>[
          Text("小账本"),
          Text("加加减减"),
        ],
      ),
    );
  }
}
