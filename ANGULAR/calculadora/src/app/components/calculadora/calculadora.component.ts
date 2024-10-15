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
  operator = '';
  calculo = '';

  constructor(){
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
  }

  addNum(num:number){
    if(this.operator == ''){
      this.numero1 = parseInt(this.numero1.toString() + num.toString());
      this.calculo += num.toString();
    }else{
      this.numero2 = parseInt(this.numero2.toString() + num.toString());
      this.calculo += num.toString();
    }
  }
  
  sumar(){
    this.resultado = this.numero1 + this.numero2;
  }
  restar(){
    this.resultado = this.numero1 - this.numero2;
  }

  borrar(){
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
    this.operator = '';
    this.calculo = '';
  }

  seleccionarOperador(op:string){
    this.operator = op;
    this.calculo += this.operator;
  }

  resolver(){
    if(this.operator == '+'){
      this.sumar();
        return this.resultado
    }
    if(this.operator == '-'){
      this.restar();
        return this.resultado
    }
    return 0;
  }

 
  

}
