import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TareasAlumnoPage } from './tareas-alumno';

@NgModule({
  declarations: [
    TareasAlumnoPage,
  ],
  imports: [
    IonicPageModule.forChild(TareasAlumnoPage),
  ],
  exports: [
    TareasAlumnoPage
  ]
})
export class TareasAlumnoPageModule {}
