import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../interfaces/vehicle.interfaces';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getVehicles() {
    return this.http.get<Vehicle[]>('http://localhost:3000/listaVehiculos');
  }
}
