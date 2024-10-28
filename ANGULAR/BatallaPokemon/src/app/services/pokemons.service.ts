import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonBattleResponse } from '../models/pokemon-battle.interfaces';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<PokemonBattleResponse> {
    return this.http.get<PokemonBattleResponse>('https://pokeapi.co/api/v2/pokemon/');
  }
}
