import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServicesService {

  private baseApiUrl = 'http://localhost:8080/api/v0/';
  constructor(private _http: HttpClient) { }


  Login(data : any) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 
    });


    return this._http.post(this.baseApiUrl + 'login', data, {headers : headers});
  }

  Register(data : any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });


    return this._http.post(this.baseApiUrl + 'register', data, {headers : headers});
  }

}
