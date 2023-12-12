import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private _http: HttpClient) { }

  addOrder(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/orders', data);
  }

  getOrderList(): Observable<any> {
    return this._http.get('http://localhost:3000/orders');
  }

  deleteOrder(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/orders/${id}`)
  }

  getOrderbyId(id: number): Observable<any> {
    return this._http.get(`http://localhost:3000/orders/${id}`)
  }
}
