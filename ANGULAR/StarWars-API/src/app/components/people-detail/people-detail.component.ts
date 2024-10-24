import { Component, OnInit } from '@angular/core';
import { PeopleDetailResponse } from '../../interfaces/people-detail.interfaces';
import { PeopleService } from '../../services/people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrl: './people-detail.component.css'
})
export class PeopleDetailComponent implements OnInit{

  personId: string | null = '';
  person: PeopleDetailResponse | undefined;

  constructor(
    private peopleService: PeopleService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.personId = this.activatedRoute.snapshot.paramMap.get('id');

    this.peopleService.getOnePeople(parseInt(this.personId!)).subscribe(respuesta => {
      this.person = respuesta;
    });
  }

  getPeopleImg(url: string): string {
    const id = url.split('/')[5];
    return  `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  }
  
}
