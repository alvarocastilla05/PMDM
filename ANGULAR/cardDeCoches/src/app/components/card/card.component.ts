import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  nombre = 'Testla';
  tipo = 'automatic/manual';
  precio = 299;
  img = 'coche_1.ppg';
}
