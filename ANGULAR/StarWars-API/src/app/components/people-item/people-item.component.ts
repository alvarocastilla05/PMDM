import { Component, Input, OnInit } from '@angular/core';
import { People } from '../../interfaces/people.interfaces';
import { PeopleDetailResponse } from '../../interfaces/people-detail.interfaces';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrl: './people-item.component.css'
})
export class PeopleItemComponent implements OnInit{

  @Input() personId: number | undefined;
  person: PeopleDetailResponse | undefined;

  

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getOnePeople(this.personId!).subscribe(respuesta => {
      this.person = respuesta;
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
