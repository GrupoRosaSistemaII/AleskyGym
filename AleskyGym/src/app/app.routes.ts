import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NewClassComponent } from './new-class/new-class.component';
import { Component } from '@angular/core';
import { SidebarComponent } from './side-panel/side-panel.component';
import { RegistrarInstructorComponent } from './add-instructor/add-instructor.component';

export const routes: Routes = [
  //{ path: 'clases', component: NewClassComponent }, //modificarrrrrrr
  {
    path: 'clases',
    loadComponent: () => import('./new-class/new-class.component').then(m => m.NewClassComponent)
  },
  {
    // Carga diferida --> se cargar dinamicamente al acceder a la ruta mejorando el rendimiento
    path: 'instructores',
    loadComponent: () => import('./add-instructor/add-instructor.component').then(m => m.RegistrarInstructorComponent)
  },
  // Redireccion por defecto
  { path: '', redirectTo: 'clases', pathMatch: 'full' }
];
