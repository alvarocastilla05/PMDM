import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { Film } from '../../models/films.response.interfaces';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.css'
})
export class FilmListComponent implements OnInit {

  listadoPeliculas: Film[] = [];
  peliculasSeleccionadas: number[] = [];

  constructor(private filmService: FilmsService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(respuesta => {
      this.listadoPeliculas = respuesta.results;
    });
  }

  newElementSelected(episode_id: number) {
    console.log('Componente padre: ', episode_id);

    if (this.peliculasSeleccionadas.includes(episode_id)) {
      let indexToDelete = this.peliculasSeleccionadas.indexOf(episode_id);
      this.peliculasSeleccionadas.splice(indexToDelete, 1);
    } else {
      this.peliculasSeleccionadas.push(episode_id);
    }
  }
}

