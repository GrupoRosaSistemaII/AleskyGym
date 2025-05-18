import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  type FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
 
@Component({
  selector: "app-add-instructor",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,  ],
  templateUrl: "./add-instructor.component.html",
  styleUrls: ["./add-instructor.component.css"],
})
export class RegistrarInstructorComponent {
  instructorForm: FormGroup;

  /** Lista de especialidades disponibles */
  especialidades: string[] = [
    "Yoga",
    "Pilates",
    "CrossFit",
    "Spinning",
    "Boxeo",
    "Zumba",
  ];


  constructor(private fb: FormBuilder, private router: Router) {
    this.instructorForm = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      telefono: ["", [Validators.required, Validators.pattern("[0-9]{6,12}")]],
      correo: ["", [Validators.required, Validators.email]],
      especialidad: ["", Validators.required],
    });
  }

  onSubmit() {
    if (this.instructorForm.valid) {
      console.log("Formulario enviado:", this.instructorForm.value);
      // → instructorForm.value.especialidades será un array de strings escogidos

      // Llamada al servicio para guardar
      // this.instructorService.create(this.instructorForm.value).subscribe(...);

      this.router.navigate(["/instructores"]);
    } else {
      // Marcar todos los campos como touched para dispara validaciones
      Object.keys(this.instructorForm.controls).forEach((key) => {
        this.instructorForm.get(key)?.markAsTouched();
      });
    }
  }

  cancelar() {
    this.router.navigate(["/instructores"]);
  }
}
