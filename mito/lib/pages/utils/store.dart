import 'package:shared_preferences/shared_preferences.dart';

setStore(String key, value) async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  var func;
  if (value is String) {
    func = prefs.setString;
  }

  if (value is int) {
    func = prefs.setInt;
  }
  print({key, value, func});
  await func(key, value);
}

Future<int> getStore(String key) async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  return await prefs.get(key);
}
