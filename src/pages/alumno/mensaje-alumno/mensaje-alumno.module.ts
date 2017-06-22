import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MensajeAlumnoPage } from './mensaje-alumno';

@NgModule({
  declarations: [
    MensajeAlumnoPage,
  ],
  imports: [
    IonicPageModule.forChild(MensajeAlumnoPage),
  ],
  exports: [
    MensajeAlumnoPage
  ]
})
export class MensajeAlumnoPageModule {}
