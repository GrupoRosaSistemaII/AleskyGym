import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormBuilder, type FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { SidebarComponent } from "../side-panel/side-panel.component";

@Component({
  selector: "app-new-class",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SidebarComponent],
  templateUrl: "./new-class.component.html",
  styleUrls: ["./new-class.component.css"],
})
export class NewClassComponent {
  claseForm: FormGroup
  resumenVisible = false

  // Datos de ejemplo para los dropdowns
  categorias = ["Yoga", "Pilates", "Cardio", "Fuerza", "Baile", "Spinning"]
  salas = ["Sala 1", "Sala 2", "Sala 3", "Sala Principal", "Terraza"]
  instructores = ["Juan Pérez", "María García", "Carlos López", "Ana Martínez"]

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.claseForm = this.fb.group({
      nombre: ["", Validators.required],
      descripcion: [""],
      categoria: ["", Validators.required],
      sala: ["", Validators.required],
      capacidad: ["", [Validators.required, Validators.min(1)]],
      instructor: ["", Validators.required],
        })

     }

   

   


   


   


  onSubmit() {
    if (this.claseForm.valid) {
      console.log("Formulario enviado:", this.claseForm.value)
      // Aquí iran las llamadas al servicio para guardar la clase


    } else {
      // Marcar todos los campos como touched para mostrar errores
      Object.keys(this.claseForm.controls).forEach((key) => {
        this.claseForm.get(key)?.markAsTouched()
      })
    }
  }

  cancelar() {
    this.router.navigate(["/inicio"])
  }
}
