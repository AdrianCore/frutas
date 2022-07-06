import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fruit } from './fruit';


@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private httpClient:HttpClient) { }

  getAllFruits(): Observable<any>{
    return this.httpClient.get<any>('/api/fruit/all')
  }

  // Método para buscar una cuenta por ID
  findById(id:number) : Observable<Fruit> {
    return this.httpClient.get<Fruit>(`/api/fruit/${id}`);
  }

}
