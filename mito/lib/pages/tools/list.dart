import 'package:flutter/material.dart';

class ToolsList extends StatelessWidget {
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Overview'),
        ),
        body: GenerateToolList());
  }
}

class GenerateToolList extends StatelessWidget {
  final toolList = [1, 2, 3, 4, 5];

  Widget _buildToolList() {
    return ListView.builder(itemBuilder: (context, i) {
      return ListTile(title: Text('123'));
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: Text('Overview')), body: _buildToolList());
  }
}
