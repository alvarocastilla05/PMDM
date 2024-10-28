import { Component, Input, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { PokemonList } from '../../models/pokemon-battle.interfaces';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  @Input() pokemonId: PokemonList | undefined;
  

  constructor(private pokemonsService: PokemonsService) { }

}