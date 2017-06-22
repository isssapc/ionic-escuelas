import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoMensajeForoAlumnoPage } from './nuevo-mensaje-foro-alumno';

@NgModule({
  declarations: [
    NuevoMensajeForoAlumnoPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoMensajeForoAlumnoPage),
  ],
  exports: [
    NuevoMensajeForoAlumnoPage
  ]
})
export class NuevoMensajeForoAlumnoPageModule {}
