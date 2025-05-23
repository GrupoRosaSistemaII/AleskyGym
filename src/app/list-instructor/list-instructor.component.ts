import { Component } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-list-instructor',
  imports: [],
  
  templateUrl: './list-instructor.component.html',
 })
export class ListInstructorComponent {
   constructor(private router: Router) {
   }


Registrar_instructor() {
    this.router.navigate(["/instructores/registrar"]);
  }
}
 





 