import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MensajeDocentePage } from './mensaje-docente';

@NgModule({
  declarations: [
    MensajeDocentePage,
  ],
  imports: [
    IonicPageModule.forChild(MensajeDocentePage),
  ],
  exports: [
    MensajeDocentePage
  ]
})
export class MensajeDocentePageModule {}
