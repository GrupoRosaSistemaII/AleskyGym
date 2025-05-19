import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SidebarComponent } from "../side-panel/side-panel.component";
import { InstructorServiceService } from "../services/instructor-service.service";

/**
 * @Component Decorator
 * Define los metadatos para el RegistrarInstructorComponent.
 */
@Component({
  selector: "app-add-instructor",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SidebarComponent],
  templateUrl: "./add-instructor.component.html",
  styleUrls: ["./add-instructor.component.css"],
})

/**
 * RegistrarInstructorComponent Class
 * Este componente es responsable de manejar el registro de nuevos instructores.
 * Incluye un formulario para capturar los detalles del instructor y utiliza un servicio para enviar los datos al backend.
 */
export class RegistrarInstructorComponent {
  /**
   * instructorForm: FormGroup
   * Define el grupo de formularios para el formulario del instructor.
   */
  instructorForm: FormGroup;

  /**
   * Constructor para el RegistrarInstructorComponent.
   * @param {FormBuilder} fb - El servicio FormBuilder para crear el formulario.
   * @param {Router} router - El servicio Router para la navegación.
   * @param {InstructorServiceService} instructorService - El InstructorServiceService para realizar solicitudes HTTP.
   */
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private instructorService: InstructorServiceService
  ) {
    // Inicializa el instructorForm con controles de formulario y validadores
    this.instructorForm = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      telefono: ["", [Validators.required, Validators.pattern("^[0-9]{6,12}$")]],
      correo: ["", [Validators.required, Validators.email]],
    });
  }

  /**
   * onSubmit Method
   * Maneja el envío del formulario del instructor.
   * Comprueba si el formulario es válido, envía los datos al backend y navega a la lista de instructores.
   */
  onSubmit() {
    if (this.instructorForm.valid) {
      console.log("Formulario enviado:", this.instructorForm.value);

      // Usar el servicio para enviar datos al backend
      this.instructorService.postInstructor(this.instructorForm.value).subscribe({
        next: (response) => {
          console.log('Instructor registrado con éxito:', response);

          // Limpiar el formulario
          this.instructorForm.reset();

          // Redirigir a la lista de instructores
          this.router.navigate(["/instructores"]);
        },
        error: (error) => {
          console.error('Error al registrar instructor:', error);
          // Aquí se muestra un mensaje de error al usuario
        }
      });
    } else {
      // Marcar todos los campos como touched para mostrar errores
      this.instructorForm.markAllAsTouched();
    }
  }

  /**
   * cancelar Method
   * Navega al usuario a la página de la lista de instructores.
   */
  cancelar() {
    this.router.navigate(["/instructores"]);
  }

  /**
   * campoInvalido Method
   * Método de ayuda para determinar si un campo del formulario no es válido y debe mostrar un error.
   * @param {string} campo - El nombre del campo del formulario para verificar.
   * @returns {boolean} - True si el campo no es válido y debe mostrar un error, false de lo contrario.
   */
  campoInvalido(campo: string): boolean {
    const control = this.instructorForm.get(campo);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
