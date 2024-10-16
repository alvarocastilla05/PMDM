import { Component } from '@angular/core';


export interface Students {
  numAlumno: number;
  nombre: string;
  apellido: string;
  nif: string;
  edad: number;
  cursoMatriculado: string;
}

const ELEMENT_DATA: Students[] = [
  {numAlumno: 1, nombre: 'Juan', apellido: 'Pérez', nif: '12345678A', edad: 18, cursoMatriculado: '1º ESO'},
  {numAlumno: 2, nombre: 'María', apellido: 'López', nif: '87654321B', edad: 17, cursoMatriculado: '2º ESO'},
  {numAlumno: 3, nombre: 'Carlos', apellido: 'Gómez', nif: '12348765C', edad: 16, cursoMatriculado: '3º ESO'},
  {numAlumno: 4, nombre: 'Ana', apellido: 'Martínez', nif: '56781234D', edad: 15, cursoMatriculado: '4º ESO'}
];

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})

export class TablaComponent {
  displayedColumns: string[] = ['numAlumno', 'nombre', 'apellido', 'nif', 'edad', 'cursoMatriculado'];
  dataSource = ELEMENT_DATA;
}

