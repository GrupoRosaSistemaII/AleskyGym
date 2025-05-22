import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria';
import { delay, Observable } from 'rxjs';
import { Sala } from '../interfaces/sala';
import { Instructor } from '../interfaces/instructor';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private categoria_URL = 'http://localhost:8080/gimnasio-app/categorias';
  private sala_URL = 'http://localhost:8080/gimnasio-app/salas';
  private instructor_URL = 'http://localhost:8080/gimnasio-app/instructores';

  constructor(private http: HttpClient) {
    // No se necesita inicialización
  }

  // OBTENER LA LISTA DE CATEGORIAS
  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.categoria_URL)
      .pipe(delay(0)); // Agrega un pequeño retraso para ayudar a romper posibles dependencias circulares.
  }

  // OBTENER LA LISTA DE SALAS
  getSalas(): Observable<Sala[]> {
    return this.http.get<Sala[]>(this.sala_URL)
      .pipe(delay(0));
  }

  // OBTENER LA LISTA DE INSTRUCTORES
  getInstructores(): Observable<Instructor[]> {
    return this.http.get<Instructor[]>(this.instructor_URL)
      .pipe(delay(0));
  }
}
