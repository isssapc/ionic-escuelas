import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoMensajeAlumnoPage } from './nuevo-mensaje-alumno';

@NgModule({
  declarations: [
    NuevoMensajeAlumnoPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoMensajeAlumnoPage),
  ],
  exports: [
    NuevoMensajeAlumnoPage
  ]
})
export class NuevoMensajeAlumnoPageModule {}
