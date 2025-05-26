import { Component, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormBuilder, type FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { SidebarComponent } from "../side-panel/side-panel.component";
import { Instructor, InstructorServiceService } from "../services/instructor-service.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-new-class",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SidebarComponent, FormsModule],
  templateUrl: "./new-class.component.html",
  styleUrls: ["./new-class.component.css"],
})
export class NewClassComponent implements OnInit {

  claseForm: FormGroup
  resumenVisible = false

  // Datos de ejemplo para los dropdowns
  categorias = ["Yoga", "Pilates", "Cardio", "Fuerza", "Baile", "Spinning"]
  salas = ["Sala 1", "Sala 2", "Sala 3", "Sala Principal", "Terraza"]
  instructores: Instructor[] = []

  private API_URL = 'http://localhost:8080/gimnasio-app/Clases'// URL del API de instructores

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private instructorService: InstructorServiceService,

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

  ngOnInit() {
    // Aquí se cargarán los datos de los instructores, salas y categorías desde un servicio
    this.cargarInstructores()
  }

  cargarInstructores() {
    this.instructorService.getInstructors(this.API_URL).subscribe({
      next: (instructores: Instructor[]) => {
        this.instructores = instructores;
        console.log('Instructores cargados:', this.instructores);
      },
      error: (error: any) => {
        console.error('Error al cargar instructores:', error);
        // Aquí puedes manejar el error, mostrar un mensaje al usuario, etc.
      }
    });
  }

  onSubmit() {
    if (this.claseForm.valid) {
      console.log("Formulario enviado:", this.claseForm.value)
      // Aquí irán las llamadas al servicio para guardar la clase
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
