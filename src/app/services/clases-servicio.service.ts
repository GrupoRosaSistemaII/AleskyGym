import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasesServicioService {

  constructor(private http : HttpClient) { }

  private API_URL = 'http://localhost:8080/gimnasio-app/Clases';


  postClases(clases: any): Observable<any> {
    return this.http.post<any>(this.API_URL, clases)
      .pipe(delay(0)); // agregar un pequeño retraso para ayudar a romper dependencias circulares potenciales
  }

  getClases(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL)
      .pipe(delay(0)); // agregar un pequeño retraso para ayudar a romper dependencias circulares potenciales
  }

  getClasesById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${id}`)
      .pipe(delay(0)); // agregar un pequeño retraso para ayudar a romper dependencias circulares potenciales
  }

  actualizarClases(id: number, clases: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${id}`, clases)
      .pipe(delay(0)); // agregar un pequeño retraso para ayudar a romper dependencias circulares potenciales
  }

}
