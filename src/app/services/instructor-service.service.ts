import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';

// Define an interface for the Instructor model
export interface Instructor {
  id?: number;
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
}

@Injectable({
  providedIn: 'root'
})
export class InstructorServiceService {
  private API_URL = 'http://localhost:8080/gimnasio-app/Instructor';

  constructor(private http: HttpClient) {
    // No initialization needed
  }

  /**
   * Envía los datos de un instructor al backend
   * @param instructor Objeto con los datos del instructor a crear
   * @returns Observable con la respuesta del servidor
   */
  postInstructor(instructor: Instructor): Observable<Instructor> {
    return this.http.post<Instructor>(this.API_URL, instructor)
      .pipe(delay(0)); // Add a small delay to help break potential circular dependencies
  }

  /**
   * Obtiene todos los instructores
   * @returns Observable con la lista de instructores
   */
  getInstructors(): Observable<Instructor[]> {
    return this.http.get<Instructor[]>(this.API_URL)
      .pipe(delay(0)); // Add a small delay to help break potential circular dependencies
  }

  /**
   * Obtiene un instructor por su ID
   * @param id ID del instructor
   * @returns Observable con los datos del instructor
   */
  getInstructorById(id: number): Observable<Instructor> {
    return this.http.get<Instructor>(`${this.API_URL}/${id}`)
      .pipe(delay(0)); // Add a small delay to help break potential circular dependencies
  }

  /**
   * Actualiza los datos de un instructor
   * @param id ID del instructor a actualizar
   * @param instructor Datos actualizados del instructor
   * @returns Observable con la respuesta del servidor
   */
  updateInstructor(id: number, instructor: Instructor): Observable<Instructor> {
    return this.http.put<Instructor>(`${this.API_URL}/${id}`, instructor)
      .pipe(delay(0)); // Add a small delay to help break potential circular dependencies
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
