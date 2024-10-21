import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle, VehicleListResponse } from '../interfaces/vehicle.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<VehicleListResponse> {
    return this.http.get<VehicleListResponse>('https://swapi.dev/api/vehicles');
  }
}
