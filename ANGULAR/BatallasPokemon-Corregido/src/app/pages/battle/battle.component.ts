import { Component } from '@angular/core';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrl: './battle.component.css'
})
export class BattleComponent {
  //TURN possible values: 1 or 2
  pokemonTurn = 1;
  pokemonPlayer1Id = this.generarPokemonRandom();
  pokemonPlayer2Id = this.generarPokemonRandom();
  lifePokemon1 = 100;
  lifePokemon2 = 100;


  applyDamage(damage: number) {
    if (this.pokemonTurn == 1) {
      // Apply damage to pokemon 2
      this.lifePokemon2 -= damage;
      this.pokemonTurn = 2;
    } else {
      // Apply damage to pokemon 1
      this.lifePokemon1 -= damage;
      this.pokemonTurn = 1;
    }
  }

  generarPokemonRandom(): number {
    return Math.floor(Math.random() * 150) + 1;
  }

  reiniciarBatalla() {
    this.lifePokemon1 = 100;
    this.lifePokemon2 = 100;
    this.pokemonTurn = 1;
    this.pokemonPlayer1Id = this.generarPokemonRandom();
    this.pokemonPlayer2Id = this.generarPokemonRandom();
  }

}
