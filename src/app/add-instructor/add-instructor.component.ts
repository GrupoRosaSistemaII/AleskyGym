import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { SidebarComponent } from "../side-panel/side-panel.component";
import { InstructorServiceService } from "../services/instructor-service.service";

@Component({
  selector: "app-add-instructor",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SidebarComponent],
  templateUrl: "./add-instructor.component.html",
  styleUrls: ["./add-instructor.component.css"],
})


export class RegistrarInstructorComponent {
  instructorForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private instructorService: InstructorServiceService
  ) {
    this.instructorForm = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      telefono: ["", [Validators.required, Validators.pattern("^[0-9]{6,12}$")]],
      correo: ["", [Validators.required, Validators.email]],
    });
  }

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
          // Aquí podrías mostrar un mensaje de error al usuario
        }
      });
    } else {
      // Marcar todos los campos como touched para mostrar errores
      this.instructorForm.markAllAsTouched();
    }
  }

  cancelar() {
    this.router.navigate(["/instructores"]);
  }

  // Método de ayuda para mostrar errores en la plantilla
  campoInvalido(campo: string): boolean {
    const control = this.instructorForm.get(campo);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
