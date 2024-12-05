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
      body:  Column(
        children: [
          SizedBox(
          width: double.infinity,
          child: ElevatedButton(
            onPressed: () {}, 
            child: const Text('Login')
          ),
          ),
          const Text('Estamos en el login page'),
        ],
      ));
  }
}