import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './generic-table.component.html',
  imports: [CommonModule]
})
export class GenericTableComponent implements OnInit, OnChanges {
  @Input() data: any[] = [];
  @Input() columns: ColumnDef[] = [];
  @Input() actions: string[] = [];
  @Input() pageSize = 5;
  @Output() rowAction = new EventEmitter<{ action: string, row: any }>();

  currentPage = 0;
  pagedData: any[] = [];

  ngOnInit() {
    this.updatePagedData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] || changes['pageSize']) {
      this.currentPage = 0;
      this.updatePagedData();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.data.length / this.pageSize);
  }

  updatePagedData() {
    const start = this.currentPage * this.pageSize;
    this.pagedData = this.data.slice(start, start + this.pageSize);
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePagedData();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updatePagedData();
    }
  }

  onAction(action: string, row: any) {
    // ← Logging en TS, no en template
    console.log('GenericTableComponent onAction:', action, row);
    this.rowAction.emit({ action, row });
  }
}
import { CommonModule } from '@angular/common';
export interface ColumnDef {
  field: string;
  header: string;
} 