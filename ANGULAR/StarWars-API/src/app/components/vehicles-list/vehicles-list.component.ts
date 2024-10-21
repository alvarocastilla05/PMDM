import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle.interfaces';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.css'
})
export class VehiclesListComponent implements OnInit {
  listadoVehiculos: Vehicle[] = [];
  img: string = 'https://starwars-visualguide.com/assets/img/vehicles/';

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe(respuesta => {
      this.listadoVehiculos = respuesta.results;
    });
  }

  getVehicleImgUrl(url: string): string {
    let id = url.split('/')[5];

    return `${this.img}${id}.jpg`;
  }
}







