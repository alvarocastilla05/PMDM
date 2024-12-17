import 'package:flutter/material.dart';
import 'package:tmdb/models/MovieListResponse.dart';
import 'package:http/http.dart' as http;




class Moviescreen extends StatefulWidget {
  const Moviescreen({super.key});

  @override
  State<Moviescreen> createState() => _MoviescreenState();
}

class _MoviescreenState extends State<Moviescreen> {
  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }


  Future<MovieListResponse> getMovies() async {

    final response = await http.get(Uri.parse(
        'https://api.themoviedb.org/3/movie/popular?api_key=330dac319c12144e2cfd7dfb4bfcb9fd'));

    if (response.statusCode == 200) {
      return MovieListResponse().fromJson(response.body);
  }else{
      throw Exception('Failed to load movies');
    }
  }
}