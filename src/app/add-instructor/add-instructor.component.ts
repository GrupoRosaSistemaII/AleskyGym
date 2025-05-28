import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { InstructorServiceService } from "../services/instructor-service.service";
import Swal from 'sweetalert2'; // para mostrar mensajes 


/**
 * @Component Decorator
 * Define los metadatos para el RegistrarInstructorComponent.
 */
@Component({
  selector: "app-add-instructor",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./add-instructor.component.html",
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
      cedula: ["", Validators.required],

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
      // Imprime los datos del formulario por consola
      console.log(this.instructorForm.value);

      // Enviar datos al backend
      this.instructorService.postInstructor(this.instructorForm.value).subscribe({
        next: (response) => {
          Swal.fire({
            title: '¡Instructor registrado!',
            text: 'El instructor ha sido agregado correctamente.',
            icon: 'success',
            width: '400px', // Cambia el ancho del moda
            confirmButtonText: 'Confirmar',
            customClass: {
              popup: 'swal-wide' // Clase CSS personalizada
            }
          }).then(() => {
            this.instructorForm.reset();
            this.router.navigate(["/instructores"]);
          });
        },
        error: () => {
          Swal.fire({
            title: 'Error',
            text: 'No se pudo registrar el instructor',
            icon: 'error',
            confirmButtonText: 'Intentar nuevamente'
          });
        }
      });
    } else {
      this.instructorForm.markAllAsTouched();
    }
  }

  cancelar() {
    this.router.navigate(["/clases"]);
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
