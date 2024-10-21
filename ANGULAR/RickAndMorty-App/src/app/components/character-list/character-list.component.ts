import { Component, OnInit } from '@angular/core';
import { Character } from '../../model/character.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {

  characterList : Character [] = [];

  constructor(private characterService : CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(respuesta => {
      this.characterList = respuesta.results;
    });
  }
}
