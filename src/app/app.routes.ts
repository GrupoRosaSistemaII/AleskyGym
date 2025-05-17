import { Routes } from '@angular/router';
import { NewClassComponent } from './new-class/new-class.component';

export const routes: Routes = [
  { path: 'clases', component: NewClassComponent },
  { 
    path: 'instructores', 
    loadComponent: () => import('./add-instructor/add-instructor.component').then(m => m.RegistrarInstructorComponent)
  },
  { path: '', redirectTo: 'clases', pathMatch: 'full' }
];
