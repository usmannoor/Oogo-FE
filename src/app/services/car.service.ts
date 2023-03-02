import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ICar,
  ICarSearch
} from '../interfaces/car.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CarService {

  constructor(private http: HttpClient) {
  }

  fetchSearchResults(searchFormValue: ICarSearch): Promise<ICar[]> {
    return this.http.get<ICar[]>(
      `${environment.baseURL}car/${searchFormValue.search}`)
      .toPromise();
  }
}
