import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-class',
  imports: [],
  templateUrl: './list-class.component.html',
 })
export class ListClassComponent {

  constructor(private router: Router) {}

  crearClase() {
      this.router.navigate(["clases/crear"]);
  }

}
