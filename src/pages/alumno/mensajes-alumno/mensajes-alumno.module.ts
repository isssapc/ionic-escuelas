import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MensajesAlumnoPage } from './mensajes-alumno';

@NgModule({
  declarations: [
    MensajesAlumnoPage,
  ],
  imports: [
    IonicPageModule.forChild(MensajesAlumnoPage),
  ],
  exports: [
    MensajesAlumnoPage
  ]
})
export class MensajesAlumnoPageModule {}
