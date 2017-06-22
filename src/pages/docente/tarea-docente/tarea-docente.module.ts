import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TareaDocentePage } from './tarea-docente';

@NgModule({
  declarations: [
    TareaDocentePage,
  ],
  imports: [
    IonicPageModule.forChild(TareaDocentePage),
  ],
  exports: [
    TareaDocentePage
  ]
})
export class TareaDocentePageModule {}
