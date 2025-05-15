import { Component } from "@angular/core"
import { RouterLink, RouterLinkActive } from "@angular/router"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: "./side-panel.component.html",
  styleUrls: ["./side-panel.component.css"],
})
export class SidebarComponent {
  menuItems = [
    {
      label: "Inicio",
      route: "/inicio",
      icon: "home",
    },
    {
      label: "Crear Clases",
      route: "/clases",
      icon: "calendar",
    },
    {
      label: "Registrar Instructores",
      route: "/instructores",
      icon: "users",
    },
     
    {
      label: "Ajustes",
      route: "/ajustes",
      icon: "settings",
    },
  ]
}
