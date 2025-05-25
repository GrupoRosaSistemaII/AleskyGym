import { Component } from '@angular/core';
import { ColumnDef } from '../shared/generic-table/generic-table.component';
import { Router } from '@angular/router';
import { GenericTableComponent } from "../shared/generic-table/generic-table.component";


@Component({
  selector: 'app-list-class',
  imports: [GenericTableComponent],
  templateUrl: './list-class.component.html',
})
export class ListClassComponent {

  constructor(private router: Router) { }


  classes = [// Datos de ejemplo, reemplazar con datos reales
    { nombre: 'Yoga', instructor: 'Ana Pérez', horario: '08:00-09:00', capacidad: 20 },
    { nombre: 'Pilates', instructor: 'Luis Gómez', horario: '09:00-10:00', capacidad: 15 },
    { nombre: 'Zumba', instructor: 'María López', horario: '10:00-11:00', capacidad: 25 },
    { nombre: 'Yoga', instructor: 'Ana Pérez', horario: '08:00-09:00', capacidad: 20 },
    { nombre: 'Pilates', instructor: 'Luis Gómez', horario: '09:00-10:00', capacidad: 15 },
    { nombre: 'Zumba', instructor: 'María López', horario: '10:00-11:00', capacidad: 25 },
   ];
  cols: ColumnDef[] = [
    { field: 'nombre', header: 'Clase' },
    { field: 'instructor', header: 'Instructor' },
    { field: 'horario', header: 'Horario' },
    { field: 'capacidad', header: 'Capacidad' },
  ];


  onRowAction(event: { action: string, row: any }) {
    if (event.action === 'modificar') {
      // editar clase
    } else if (event.action === 'eliminar') {
      // eliminar clase
    }
  }
  
  crearClase() {
    this.router.navigate(["clases/crear"]);
  }

}
