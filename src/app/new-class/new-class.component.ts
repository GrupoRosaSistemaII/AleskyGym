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
      fechaInicio: ["", Validators.required],
      fechaFin: ["", Validators.required],
      horaInicio: ["", Validators.required],
      horaFin: ["", Validators.required],
    })

    // Escuchar cambios en los campos de fecha y hora para mostrar el resumen
    this.claseForm.get("fechaInicio")?.valueChanges.subscribe(() => this.actualizarResumen())
    this.claseForm.get("horaInicio")?.valueChanges.subscribe(() => this.actualizarResumen())
  }

  actualizarResumen() {
    const fechaInicio = this.claseForm.get("fechaInicio")?.value
    const horaInicio = this.claseForm.get("horaInicio")?.value

    if (fechaInicio && horaInicio) {
      this.resumenVisible = true
    }
  }

  obtenerDuracion(): string {
    const horaInicio = this.claseForm.get("horaInicio")?.value;
    const horaFin = this.claseForm.get("horaFin")?.value;

    if (!horaInicio || !horaFin) {
      return "";
    }

    const [hInicio, mInicio] = horaInicio.split(":").map(Number);
    const [hFin, mFin] = horaFin.split(":").map(Number);

    const minutosInicio = hInicio * 60 + mInicio;
    const minutosFin = hFin * 60 + mFin;

    let duracion = minutosFin - minutosInicio;
    if (duracion < 0) duracion += 24 * 60;

    const horas = Math.floor(duracion / 60);
    const minutos = duracion % 60;

    return `${horas}h ${minutos}m`;
  }


  obtenerFechaFormateada(): string {
  const raw = this.claseForm.get("fechaInicio")?.value;
  if (!raw) return "";

  const fecha = new Date(raw);

  // Compensa el desfase UTC:
  fecha.setMinutes(fecha.getMinutes() + fecha.getTimezoneOffset());

  const diaSemana = new Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(fecha);
  const diaNumero = fecha.getDate();
  const hora      = fecha.getHours().toString().padStart(2, '0');
  const minutos   = fecha.getMinutes().toString().padStart(2, '0');

  return `${this.capitalizar(diaSemana)} ${diaNumero}, ${hora}:${minutos}`;
}


  private capitalizar(texto: string): string {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
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
