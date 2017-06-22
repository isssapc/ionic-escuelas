import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TareaAlumnoPage } from './tarea-alumno';

@NgModule({
  declarations: [
    TareaAlumnoPage,
  ],
  imports: [
    IonicPageModule.forChild(TareaAlumnoPage),
  ],
  exports: [
    TareaAlumnoPage
  ]
})
export class TareaAlumnoPageModule {}
