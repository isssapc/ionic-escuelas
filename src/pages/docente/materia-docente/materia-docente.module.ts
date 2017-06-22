import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MateriaDocentePage } from './materia-docente';

@NgModule({
  declarations: [
    MateriaDocentePage,
  ],
  imports: [
    IonicPageModule.forChild(MateriaDocentePage),
  ],
  exports: [
    MateriaDocentePage
  ]
})
export class MateriaDocentePageModule {}
