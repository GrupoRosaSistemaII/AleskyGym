import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definición de una interfaz para las columnas de la tabla
export interface ColumnDef {
  field: string;     
  header: string;    
}

@Component({
  selector: 'app-table',                   
  templateUrl: './generic-table.component.html',   
  imports: [CommonModule]                 
})  
export class GenericTableComponent implements OnChanges {
   @Input() data: any[] = [];             // Datos a mostrar en la tabla
  @Input() columns: ColumnDef[] = [];    // Definiciones de las columnas
  @Input() actions: string[] = [];       // Lista de acciones disponibles por fila (ej: ['modificar', 'eliminar'])
  @Input() pageSize = 5;                 // Tamaño de la página (número de filas por página)

  // Evento de salida para notificar al padre sobre una acción realizada en una fila
  @Output() rowAction = new EventEmitter<{ action: string, row: any }>();

  // Variables internas para el control de paginación
  currentPage = 0;                      
  pagedData: any[] = [];                 

  // Se ejecuta cuando cambian los inputs (como data o pageSize)
  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] || changes['pageSize']) {
      this.currentPage = 0;              // Reinicia a la primera página
      this.updatePagedData();            // Actualiza los datos paginados
    }
  }

  // Calcula el total de páginas basado en la longitud de los datos
  get totalPages(): number {
    return Math.ceil(this.data.length / this.pageSize);
  }

  // Actualiza el subconjunto de datos que se muestra en la página actual
  updatePagedData() {
    const start = this.currentPage * this.pageSize;
    this.pagedData = this.data.slice(start, start + this.pageSize);
  }

  // Cambia a la página anterior si es posible
  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePagedData();
    }
  }

  // Cambia a la página siguiente si es posible
  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updatePagedData();
    }
  }

  // Maneja una acción (como modificar o eliminar) sobre una fila específica
  onAction(action: string, row: any) {
    this.rowAction.emit({ action, row });  // Emite el evento al componente padre
  }
}
