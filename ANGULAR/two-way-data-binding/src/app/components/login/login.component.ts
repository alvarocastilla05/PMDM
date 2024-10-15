import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //1. Property binding (one way)
  valoracion = 5;
  imgUrl = "https://i.pinimg.com/originals/d7/0a/e5/d70ae5e2bf047eedc063dc8486df7e48.png"

  //2. Event binding (one way)
  showUserInfo (){
    alert(`Nombre de usuario: ${this.nombre}`);
  }

  //3. Two way data binding
  nombre = 'Alvaro';
}
