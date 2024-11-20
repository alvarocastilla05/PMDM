import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateRequestTokenResponse } from '../interfaces/create-request-token.interface';

const API_KEY = "330dac319c12144e2cfd7dfb4bfcb9fd"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //STEP 1
  createRequestToken(): Observable<CreateRequestTokenResponse>{
    return this.http.get<CreateRequestTokenResponse>(`https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`)
  }
}
