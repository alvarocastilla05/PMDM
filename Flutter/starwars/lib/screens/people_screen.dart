import 'package:flutter/material.dart';
import 'package:starwars/models/people_response/people.dart';
import 'package:starwars/models/people_response/people_response.dart';
import 'package:http/http.dart' as http;
import 'package:starwars/screens/people_detail_screen.dart';

class PeopleScreen extends StatefulWidget {
  const PeopleScreen({super.key});

  @override
  State<PeopleScreen> createState() => _PeopleScreenState();
}

class _PeopleScreenState extends State<PeopleScreen> {
  late Future<PeopleResponse> peopleResponse;

  @override
  void initState() {
    super.initState();
    peopleResponse = getPeople();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
            backgroundColor: Colors.black,
            title: Image.network(
              'https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png',
              width: 100,
            )),
        body: Container(
          color: Colors.black,
          height: double.infinity,
          child: FutureBuilder<PeopleResponse>(
            future: peopleResponse,
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                return SingleChildScrollView(
                  child: Column(
                    children: [
                      Container(
                        margin: const EdgeInsets.only(top: 20),
                        child: Text('Character List', style: TextStyle(color: Colors.yellow[600],fontFamily: 'StarJedi', fontSize: 20))),
                      Container(
                        margin: const EdgeInsets.only(top: 100),
                        width: double.infinity,
                        height: 300,
                        child: _buildPeopleList(context, snapshot.data!)),
                    ],
                  ),
                );
              } else if (snapshot.hasError) {
                return Text('${snapshot.error}');
              }

              // By default, show a loading spinner.
              return const CircularProgressIndicator();
            },
          ),
        ));
  }

  Future<PeopleResponse> getPeople() async {
    final response = await http.get(Uri.parse('https://swapi.dev/api/people'));

    if (response.statusCode == 200) {
      return PeopleResponse.fromJson(response.body);
    } else {
      throw Exception('Failed to load album');
    }
  }

 Widget _buildPeopleList(BuildContext context, PeopleResponse peopleResponse) {
  return Center(
    child: SizedBox(
      width: double.infinity,
      child: ListView.builder(
        itemCount: peopleResponse.results!.length,
        scrollDirection: Axis.horizontal,
        itemBuilder: (context, index) {
          return _buildPeopleItem(context, peopleResponse.results![index]);
        },
      ),
    ),
  );
}

Widget _buildPeopleItem(BuildContext context, People people) {
    return GestureDetector(
        onTap: () {
          Navigator.of(context).push(
            MaterialPageRoute(
              builder: (context) => PeopleDetailScreen(peopleItem: people),
            ),
          );
        },
        child: Container(
            margin: const EdgeInsets.all(10),
            child: Column(
              children: [
                Stack(
                  children: [
                    ClipRRect(
                      borderRadius: BorderRadius.circular(30),
                      child: Image.network(
                        'https://starwars-visualguide.com/assets/img/characters/${_extractIdFromUrl(people.url!)}.jpg',
                        width: 200,
                      ),
                    ),
                    Positioned(
                      bottom: 10,
                      left: 10,
                      child: Container(
                        color: Colors.black.withOpacity(0.5),
                        padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 2),
                        child: SizedBox(
                          width: 160,
                          child: Text(
                            people.name!.toLowerCase(),
                            style: TextStyle(
                              color: Colors.yellow[600],
                              fontSize: 20, 
                              fontFamily: 'StarJedi',
                            ),
                           
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            )));
  }

  String _extractIdFromUrl(String url) {
    final regex = RegExp(r'people/(\d+)/');
    final match = regex.firstMatch(url);
    return match!.group(1)!;
  }
}
          