import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router }    from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from './side-panel/side-panel.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    constructor(public router: Router) {}

 }
