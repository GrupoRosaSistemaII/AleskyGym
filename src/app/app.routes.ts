import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NewClassComponent } from './new-class/new-class.component';
import { Component } from '@angular/core';
import { SidebarComponent } from './side-panel/side-panel.component';
import { RegistrarInstructorComponent } from './add-instructor/add-instructor.component';
import { ListInstructorComponent } from './list-instructor/list-instructor.component';
import { ListClassComponent } from './list-class/list-class.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent},

  { path: 'clases', component: ListClassComponent },
  { path: 'clases/crear', component: NewClassComponent },

  { path: 'instructores', component: ListInstructorComponent },
  { path: 'instructores/registrar', component: RegistrarInstructorComponent },


];
