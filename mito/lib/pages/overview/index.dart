import 'package:flutter/material.dart';
import '../routes.dart';

class Overview extends StatelessWidget {
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Overview'),
      ),
      body: Column(
        children: <Widget>[
          menuButton(context, "计数器", "/tools/counter"),
          menuButton(context, "记账本", "/tools/wallet"),
        ],
      ),
    );
  }
}

Widget menuButton(BuildContext context, String title, String key) {
  return new Padding(
    padding: new EdgeInsets.all(8.0),
    child: new ConstrainedBox(
      constraints: new BoxConstraints(minHeight: 42.0),
      child: new ListTile(
        title: Text(title),
        onTap: () {
          Application.router.navigateTo(context, key);
        },
      ),
    ),
  );
}
