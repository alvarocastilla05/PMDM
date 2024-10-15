import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  numero1: number;
  numero2: number;
  resultado: number;

  constructor(){
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
  }

  addNum(num:number){
    if(this.numero1 == 0){
      this.numero1 = num;
    }else{
      this.numero2 = num;
    }
  }
  
  sumar(){
    this.resultado = this.numero1 + this.numero2;
  }
  restar(){
    this.resultado = this.numero1 - this.numero2;
  }

 
  

}
