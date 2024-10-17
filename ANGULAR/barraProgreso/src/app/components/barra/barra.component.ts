import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrl: './barra.component.css'
})
export class BarraComponent {
  @Input() color = 'primary';
  @Input() porcentaje = 80;

 
  getProgressColor(){
    if(this.porcentaje <= 25){
      return 'danger';
    }
    if(this.porcentaje > 25 && this.porcentaje <= 50){
      return 'warning';
    }if(this.porcentaje > 50 && this.porcentaje <= 75){
      return 'info';
    }
    return 'success';
  }
 
  

  
}
