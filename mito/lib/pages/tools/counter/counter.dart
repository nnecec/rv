import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class Counter extends StatefulWidget {
  @override
  _CounterState createState() => new _CounterState();
}

class _CounterState extends State<Counter> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  void _decrementCounter() {
    setState(() {
      _counter--;
    });
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text("Counter"),
      ),
      body: new Column(
        children: <Widget>[
          new Text(
            '$_counter',
            style: TextStyle(
              fontSize: 64,
            ),
          ),
          new ButtonBar(
            children: <Widget>[
              RaisedButton(
                onPressed: _incrementCounter,
                child: Text('增加'),
              ),
              RaisedButton(
                onPressed: _decrementCounter,
                child: Text('减少'),
              ),
            ],
          )
        ],
      ),
    );
  }
}
