import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  private baseApiUrl = 'http://localhost:8080/api/v0/';

  constructor(private _http: HttpClient) { }

  // Method to retrieve goal data
  DisplayGoal(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // Since this is a data retrieval operation, use GET request
    return this._http.get(this.baseApiUrl + 'getGoal', { headers });
  }
}
