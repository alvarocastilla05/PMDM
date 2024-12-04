import 'package:flutter/material.dart';

class LoginPage extends StatelessWidget {
  const LoginPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Login Page')),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(Icons.add)),
      body: const Column(
        children: [
          ElevatedButton(
            onPressed: null, child: Text('Login')
          ),
          Text('Estamos en el login page'),
        ],
      ));
  }
}