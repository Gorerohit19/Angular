import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  GetRevenue(theaterId:number):Observable<any>{
    let url = "http://localhost:5274/api/revenues/"+ theaterId;
    return this.http.get<any>(url);
  }
}
