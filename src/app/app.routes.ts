import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NewClassComponent } from './new-class/new-class.component';
import { Component } from '@angular/core';
import { SidebarComponent } from './side-panel/side-panel.component';
import { RegistrarInstructorComponent } from './add-instructor/add-instructor.component';

export const routes: Routes = [
  { path: 'clases', component: NewClassComponent },
  {path:'instructores', component:RegistrarInstructorComponent },
 
];
