import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoMensajeDocentePage } from './nuevo-mensaje-docente';

@NgModule({
  declarations: [
    NuevoMensajeDocentePage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoMensajeDocentePage),
  ],
  exports: [
    NuevoMensajeDocentePage
  ]
})
export class NuevoMensajeDocentePageModule {}
