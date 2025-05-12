import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormBuilder, type FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { SidebarComponent } from "../side-panel/side-panel.component";

@Component({
  selector: "app-add-instructor",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SidebarComponent],
  templateUrl: "./add-instructor.component.html",
  styleUrls: ["./add-instructor.component.css"],
})
export class RegistrarInstructorComponent {
  instructorForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.instructorForm = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      telefono: ["", [Validators.required, Validators.pattern("[0-9]{6,12}")]],
      correo: ["", [Validators.required, Validators.email]],
    })
  }

  onSubmit() {
    if (this.instructorForm.valid) {
      console.log("Formulario enviado:", this.instructorForm.value)
      // Aquí irían las llamadas al servicio para guardar el instructor

      // Redirigir a la lista de instructores o mostrar mensaje de éxito
      this.router.navigate(["/instructores"])
    } else {
      // Marcar todos los campos como touched para mostrar errores
      Object.keys(this.instructorForm.controls).forEach((key) => {
        this.instructorForm.get(key)?.markAsTouched()
      })
    }
  }

  cancelar() {
     this.router.navigate(["/instructores"])
  }
}
