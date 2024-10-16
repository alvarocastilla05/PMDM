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
  operacion = '';
  calculo = '';

  constructor(){
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
  }

  addNum(num:number){
    if(this.operacion == ''){
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
    this.operacion = '';
    this.calculo = '';
  }

  seleccionarOperador(op:string){
    this.operacion = op;
    this.calculo += this.operacion;
  }

  resolver(){
    if(this.operacion == '+'){
      this.sumar();
        return this.resultado
    }
    if(this.operacion == '-'){
      this.restar();
        return this.resultado
    }
    return 0;
  }

 
  

}
