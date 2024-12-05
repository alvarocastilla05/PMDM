import 'package:flutter/material.dart';

class Loginpage extends StatelessWidget {
  const Loginpage({super.key});

 @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SizedBox(
        width: double.infinity,
        height: double.infinity,
        child: Container(
          color: const Color(0xFFE62F16),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Image.asset('assets/path_logo.png', width: 200, height: 100),
              Text('Beautiful, Private Sharing',
                  style: TextStyle(
                      fontSize: 20, color: Colors.white.withOpacity(0.5))),
              Container(
                margin: const EdgeInsets.only(top: 250),
                child: SizedBox(
                  width: 250,
                  child: FloatingActionButton(
                      backgroundColor: Colors.white,
                      elevation: 0,
                      onPressed: () {},
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(7),
                      ),
                      child: const Text('Sign up',
                          style: TextStyle(
                              fontSize: 25,
                              fontWeight: FontWeight.bold,
                              color: Color(0xFFE62F16)))),
                ),
              ),
              Container(
                margin: const EdgeInsets.only(top: 20),
                child: Text('Already have a Path account?',
                    style: TextStyle(
                        fontSize: 14,
                        color: Colors.white.withOpacity(0.5))),
              ),
              SizedBox(
                width: 250,
                child: FloatingActionButton(
                    onPressed: () {},
                    backgroundColor: const Color(0xFFE62F16),
                    elevation: 0,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(7),
                      side: BorderSide(
                          color: Colors.white.withOpacity(0.5), width: 1),
                    ),
                    child: const Text('Log in',
                        style: TextStyle(
                            fontSize: 25,
                            fontWeight: FontWeight.normal,
                            color: Color.fromARGB(186, 221, 221, 221)))),
              ),
              SizedBox(
                width: 250,
                child: RichText(
                  textAlign: TextAlign.center,
                  text: TextSpan(
                    text: 'By using Path, you agree to our ',
                    style: TextStyle(
                        fontSize: 14,
                        color: Colors.white.withOpacity(0.5)),
                    children: const <TextSpan>[
                      TextSpan(
                          text: 'Terms of Service',
                          style: TextStyle(
                              color: Color(0xFFFFFFFF),
                              decoration: TextDecoration.underline)),
                      TextSpan(text: ' and '),
                      TextSpan(
                          text: 'Privace Policy',
                          style: TextStyle(
                              color: Color(0xFFFFFFFF),
                              decoration: TextDecoration.underline)),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}