import { Component } from '@angular/core';
import { ColumnDef } from '../shared/generic-table/generic-table.component';
import { Router } from '@angular/router';
import { GenericTableComponent } from "../shared/generic-table/generic-table.component";

@Component({
  selector: 'app-instructors',
  templateUrl: './list-instructor.component.html',
  standalone: true,
  imports: [GenericTableComponent],
})
export class ListInstructorComponent {
  constructor(private router: Router) {
  }
  instructors = [  // Datos de ejemplo, reemplazar con datos reales
    { nombre: 'Juan López', cedula: '67890', clases: 3 },
    { nombre: 'María García', cedula: '54321', clases: 5 },
  
    { nombre: 'Carlos Fernández', cedula: '11223', clases: 2 },
    { nombre: 'Laura Martínez', cedula: '44556', clases: 6 },
  
    { nombre: 'Pedro Sánchez', cedula: '78901', clases: 1 },
    { nombre: 'Ana Pérez', cedula: '12345', clases: 4 },
    { nombre: 'Ana Pérez', cedula: '12345', clases: 4 },
  
    
  ];


  cols: ColumnDef[] = [
    { field: 'nombre', header: 'Nombre' },
    { field: 'cedula', header: 'Cédula' },
    { field: 'clases', header: 'Clases' },
  ];

  onRowAction(event: { action: string, row: any }) {
    if (event.action === 'modificar') {
      // lógica para editar instructor
    } else if (event.action === 'eliminar') {
      // lógica para eliminar instructor
    }
  }

  Registrar_instructor() {
    this.router.navigate(["/instructores/registrar"]);
  }

  editarInstructor(instructor: any) {
    console.log('Editar:', instructor);
  }

  eliminarInstructor(instructor: any) {
    console.log('Eliminar:', instructor);
  }
}
