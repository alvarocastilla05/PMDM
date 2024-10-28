import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film, FilmListResponse } from '../models/films.response.interfaces';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  getFilms(): Observable<FilmListResponse>{
    return this.http.get<FilmListResponse>('https://swapi.dev/api/films/');
  }
}
