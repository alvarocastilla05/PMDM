import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Film } from '../../models/films.response.interfaces';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.css'
})
export class FilmDetailComponent {
  @Input() film: Film | undefined;
  @Output() filmChecked = new EventEmitter<number>();

  onCheckClick(filmClicked: Film | undefined) {
    console.log('Film clicked:', filmClicked);

    this.filmChecked.emit(filmClicked?.episode_id);
  }
}