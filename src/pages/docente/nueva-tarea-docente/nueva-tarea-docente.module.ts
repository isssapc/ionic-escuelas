import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevaTareaDocentePage } from './nueva-tarea-docente';

@NgModule({
  declarations: [
    NuevaTareaDocentePage,
  ],
  imports: [
    IonicPageModule.forChild(NuevaTareaDocentePage),
  ],
  exports: [
    NuevaTareaDocentePage
  ]
})
export class NuevaTareaDocentePageModule {}
