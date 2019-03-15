import 'package:fluro/fluro.dart';
import 'package:flutter/material.dart';

import './overview/index.dart';
import './tools/counter/counter.dart';
import './tools/wallet/wallet.dart';

class Routes {
  static void configureRoutes(Router router) {
    router.define("/", handler: new Handler(
      handlerFunc: (BuildContext context, Map<String, List<String>> params) {
        return new Overview();
      },
    ));
    // tools
    router.define("/tools/counter", handler: new Handler(
      handlerFunc: (BuildContext context, Map<String, List<String>> params) {
        return new Counter();
      },
    ));
    router.define("/tools/wallet", handler: new Handler(
      handlerFunc: (BuildContext context, Map<String, List<String>> params) {
        return new Wallet();
      },
    ));
  }
}

class Application {
  static Router router;
}
