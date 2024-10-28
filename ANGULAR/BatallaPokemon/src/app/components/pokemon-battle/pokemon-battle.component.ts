import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../../models/pokemon-response.interfaces';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrl: './pokemon-battle.component.css'
})
export class PokemonBattleComponent implements OnInit {



  constructor(private pokemonService: PokemonsService) { }

  ngOnInit(): void {
    
  }




}
