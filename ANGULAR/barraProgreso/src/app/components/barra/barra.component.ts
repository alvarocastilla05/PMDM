import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrl: './barra.component.css'
})
export class BarraComponent {
  @Input() color = 'primary';
  @Input() porcentaje = 80;

 
  get getAncho() {
    return `${this.porcentaje}%`;
  }
  

  
}
