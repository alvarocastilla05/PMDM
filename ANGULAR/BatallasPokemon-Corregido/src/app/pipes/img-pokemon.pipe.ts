import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgPokemon'
})
export class ImgPokemonPipe implements PipeTransform {

  transform(id: string | number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }

}
