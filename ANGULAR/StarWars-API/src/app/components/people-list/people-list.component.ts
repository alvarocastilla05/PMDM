import { Component, OnInit } from '@angular/core';
import { People } from '../../interfaces/people.interfaces';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent implements OnInit {
  listadoPersonas: People[] = [];


  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(respuesta => {
      this.listadoPersonas = respuesta.results;
    });
  }

  getPeopleImg(url: string): string {
    const id = url.split('/')[5];
    return  `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  }

  getOnePeople(url: string): number {
    return parseInt(url.split('/')[5]);
  }

}
