import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon-response.interfaces';
import { PokemonsService } from '../../services/pokemons.service';
import { PokemonDetailResponse } from '../../models/pokemon-details-interfaces';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {

  @Input() pokemonId: number | undefined;
  pokemon: PokemonDetailResponse | undefined;
  //pokemonsSeleccionados: Pokemon[] = [];

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.pokemonsService.getDetailsPokemon(this.pokemonId!).subscribe(respuesta => {
      this.pokemon = respuesta;
    });
  }




  /*
    newPokemonSeleccionado(pokemon: Pokemon) {
      if (this.pokemonsSeleccionados.includes(pokemon)) {
        let indexToDelete = this.pokemonsSeleccionados.indexOf(pokemon);
        this.pokemonsSeleccionados.splice(indexToDelete, 1);
      }else{
        this.pokemonsSeleccionados.push(pokemon);
      }
    }*/
}
