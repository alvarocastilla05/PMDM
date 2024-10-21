import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterListResponse } from '../model/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<CharacterListResponse>{
    return this.http.get<CharacterListResponse>('https://rickandmortyapi.com/api/character');
  }

}
