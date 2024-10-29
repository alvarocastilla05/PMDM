import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { PokemonBattleResponse, PokemonList } from '../../models/pokemon-battle.interfaces';
import { PokemonResponse } from '../../models/pokemon-response.interfaces';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrl: './pokemon-battle.component.css'
})
export class PokemonBattleComponent implements OnInit {

  listadoPokemon: PokemonList[] = [];
  pokemonSeleccionado: PokemonList[] = [];
  progress: number[] = [];
  turno1: boolean = true;
  mensajeGanador: string = '';
  pokemonDetails: PokemonResponse | undefined;

  constructor(private pokemonService: PokemonsService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((response: PokemonBattleResponse) => {
      this.listadoPokemon = response.results;
      this.seleccionarPokemonAleatorios();

    });
  }

  seleccionarPokemonAleatorios() {
    const random1 = Math.floor(Math.random() * this.listadoPokemon.length);
    const random2 = Math.floor(Math.random() * this.listadoPokemon.length);

    this.pokemonSeleccionado = [this.listadoPokemon[random1], this.listadoPokemon[random2]];

  }
  generarRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  /*atacar(index: number) {
    if ((this.turno1 && index === 0) || (!this.turno1 && index === 1)) {
      if (this.progress[index] > 0) {
        this.progress[index] = Math.max(0, this.progress[index] - this.generarRandom(5, 51));

        if (this.progress[index] === 0) {
          this.mensajeGanador = `${this.pokemonSeleccionado[1 - index].name} gana!`; 
        }
      }
      this.turno1 = !this.turno1;
    }
  }*/



}
