import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListResponse } from '../models/pokemon-response.interfaces';
import { PokemonDetailResponse } from '../models/pokemon-details-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<PokemonListResponse>{
    return this.http.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon');
  }

  getDetailsPokemon(id: number): Observable<PokemonDetailResponse>{
    return this.http.get<PokemonDetailResponse>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
