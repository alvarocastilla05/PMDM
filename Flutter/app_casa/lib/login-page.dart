import 'package:flutter/material.dart';

class LoginPage extends StatelessWidget {
  const LoginPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Login page')),
      floatingActionButton:
          FloatingActionButton(onPressed: () {}, child: const Icon(Icons.add)),
      body: Column(children: [
        Container(
          color: Colors.blue,
          width: double.infinity,
          child: const ElevatedButton(onPressed: null, child: Text("Login")),
        ),
        Container(
            color: const Color.fromARGB(255, 0, 255, 115),
            width: double.infinity,
            child: const Text("Estamos en el login page")),
      ]),
    );
  }
}