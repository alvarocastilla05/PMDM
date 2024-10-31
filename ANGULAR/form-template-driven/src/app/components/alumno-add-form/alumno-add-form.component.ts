import { Component } from '@angular/core';
import { AlumnoDto } from '../../models/alumno.dto';

@Component({
  selector: 'app-alumno-add-form',
  templateUrl: './alumno-add-form.component.html',
  styleUrl: './alumno-add-form.component.css'
})
export class AlumnoAddFormComponent {
  courseList: string[] = ['1º DAM', '2º DAM', '1º AYF', '2º AYF'];

  alumno = new AlumnoDto('Alvaro', this.courseList[1], 18, '675314070');
  submitted = false;

  constructor() {}

  addAlumno() {
    console.log(this.alumno);
    this.submitted = true;
  }
}
