import 'package:flutter/material.dart';
import 'package:starwars/models/people_response/people.dart';

class PeopleDetailScreen extends StatefulWidget {
  final People peopleItem;
  const PeopleDetailScreen({super.key, required this.peopleItem});

  @override
  State<PeopleDetailScreen> createState() => _PeopleDetailScreenState();
}

class _PeopleDetailScreenState extends State<PeopleDetailScreen> {
 @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.peopleItem.name!.toLowerCase(), style: const TextStyle(color: Colors.yellow, fontFamily: 'StarJedi')),
        backgroundColor: Colors.black,
      ),
      body: Center(
        child: Container(
          margin: const EdgeInsets.all(30),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              ClipRRect(
                borderRadius: BorderRadius.circular(30), // Ajusta el radio según tus necesidades
                child: Image.network(
                  'https://starwars-visualguide.com/assets/img/characters/${_extractIdFromUrl(widget.peopleItem.url!)}.jpg',
                ),
              ),
              Row(
                children: [
                  const Icon(Icons.person, color: Colors.yellow),
                  const SizedBox(width: 8),
                  Text('Name: ${widget.peopleItem.name}', style: const TextStyle(color: Colors.yellow, fontFamily: 'StarJedi')),
                ],
              ),
              Row(
                children: [
                  const Icon(Icons.height, color: Colors.yellow),
                  const SizedBox(width: 8),
                  Text('Height: ${widget.peopleItem.height}', style: const TextStyle(color: Colors.yellow, fontFamily: 'StarJedi')),
                ],
              ),
              Row(
                children: [
                  const Icon(Icons.fitness_center, color: Colors.yellow),
                  const SizedBox(width: 8),
                  Text('Mass: ${widget.peopleItem.mass}', style: const TextStyle(color: Colors.yellow, fontFamily: 'StarJedi')),
                ],
              ),
              Row(
                children: [
                  const Icon(Icons.color_lens, color: Colors.yellow),
                  const SizedBox(width: 8),
                  Text('Hair Color: ${widget.peopleItem.hairColor}', style: const TextStyle(color: Colors.yellow, fontFamily: 'StarJedi')),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  String _extractIdFromUrl(String url) {
    final regex = RegExp(r'people/(\d+)/');
    final match = regex.firstMatch(url);
    return match!.group(1)!;
  }
}