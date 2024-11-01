import { Component } from '@angular/core';
import { UserDto } from '../../models/user-dto';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  conociminetoPagina = ['Google', 'Amigo', 'Profesor', 'Otro'];
  sexos = ['Hombre', 'Mujer', 'Otro'];
  user = new UserDto('Alvaro', 'Castilla Cano', '12345678A', 'alvarocasno06@gmail.com', '675314070', 'Hombre', 'Si', '123456', '123456');
  submitted = false;

  constructor() { }

  addUser() {
    console.log(this.user);
    this.submitted = true;

  }
  
}
