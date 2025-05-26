import { Component, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormBuilder, type FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { SidebarComponent } from "../side-panel/side-panel.component";
import { Instructor, InstructorServiceService } from "../services/instructor-service.service";
import { ClasesServicioService } from "../services/clases-servicio.service";
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

  private API_URL = 'http://localhost:8080/gimnasio-app/Clases'; // URL del API de clases

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private instructorService: InstructorServiceService,
    private clasesService: ClasesServicioService,
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
    // Usar el endpoint definido en el servicio (sin pasar URL como parámetro)
    this.instructorService.getInstructors().subscribe({
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
      console.log("Formulario enviado:", this.claseForm.value);
      
      // Crear objeto clase con los datos del formulario
      const nuevaClase = {
        nombre: this.claseForm.value.nombre,
        descripcion: this.claseForm.value.descripcion,
        categoria: this.claseForm.value.categoria,
        sala: this.claseForm.value.sala,
        capacidad: this.claseForm.value.capacidad,
        instructor: this.claseForm.value.instructor
      };
      
      // Llamar al servicio para guardar la clase
      this.clasesService.postClases(nuevaClase).subscribe({
        next: (response) => {
          console.log('Clase guardada con éxito:', response);
          // Navegar a la página de inicio o lista de clases después de guardar
          this.router.navigate(['/inicio']);
        },
        error: (error) => {
          console.error('Error al guardar la clase:', error);
          // Aquí puedes mostrar un mensaje de error al usuario
          alert('Error al guardar la clase. Por favor, inténtelo de nuevo.');
        }
      });
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
