import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';
import { Instructor } from '../interfaces/instructor'; // Se Trae la clase instructor

@Injectable({
  providedIn: 'root'
})
export class InstructorServiceService {
  private API_URL = 'http://localhost:8080/gimnasio-app/instructores'; // URl PARA INTERACTUAR CON EL BACK

  constructor(private http: HttpClient) {
    // No se necesita inicialización
  }

  /**
   * Envía los datos de un instructor al backend
   * @param instructor Objeto con los datos del instructor a crear
   * @returns Observable con la respuesta del servidor
   */
  postInstructor(instructor: Instructor): Observable<Instructor> {
    return this.http.post<Instructor>(this.API_URL, instructor)
      .pipe(delay(0)); // Agrega un pequeño retraso para ayudar a romper posibles dependencias circulares.
  }

  /**
   * Obtiene un instructor por su ID
   * @param id_instructor ID del instructor
   * @returns Observable con los datos del instructor
   */
  getInstructorById(id_instructor: number): Observable<Instructor> {
    return this.http.get<Instructor>(`${this.API_URL}/${id_instructor}`)
      .pipe(delay(0)); 
  }

  /**
   * Actualiza los datos de un instructor
   * @param id ID del instructor a actualizar
   * @param instructor Datos actualizados del instructor
   * @returns Observable con la respuesta del servidor
   */
  updateInstructor(id: number, instructor: Instructor): Observable<Instructor> {
    return this.http.put<Instructor>(`${this.API_URL}/${id}`, instructor)
      .pipe(delay(0));
  }

  /**
   * Elimina un instructor
   * @param id ID del instructor a eliminar
   * @returns Observable con la respuesta del servidor
   */
  deleteInstructor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`)
      .pipe(delay(0)); // Add a small delay to help break potential circular dependencies
  }
}
