import 'package:flutter/material.dart';

class Loginpage extends StatelessWidget {
  const Loginpage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: double.infinity,
        color: const Color(0xFFE62F16),
        child:  Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,

          children: [
            
            const Image(
              image: AssetImage('assets/path_logo.png')),
            
            Text('Beautiful, Private Sharing', style: TextStyle(fontSize: 20, color: Colors.white.withOpacity(0.5)),),
            
              
          ],
        ),
        
      )
    );
  }
}