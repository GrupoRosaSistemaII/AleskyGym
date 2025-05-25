import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from './side-panel/side-panel.component';
import { CommonModule } from '@angular/common';
 
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <app-instructors-list></app-instructors-list>
    <app-classes-list></app-classes-list>
  `
})
export class AppComponent {
  constructor(public router: Router) { }

}
