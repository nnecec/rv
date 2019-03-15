import 'package:flutter/material.dart';
import 'package:fluro/fluro.dart';

import './routes.dart';

class App extends StatefulWidget {
  @override
  State createState() {
    return new AppState();
  }
}

class AppState extends State<App> {
  AppState() {
    final router = new Router();
    Routes.configureRoutes(router);
    Application.router = router;
  }

  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Mito',
      onGenerateRoute: Application.router.generator,
    );
  }
}
