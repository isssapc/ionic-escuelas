import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrupoDocentePage } from './grupo-docente';

@NgModule({
  declarations: [
    GrupoDocentePage,
  ],
  imports: [
    IonicPageModule.forChild(GrupoDocentePage),
  ],
  exports: [
    GrupoDocentePage
  ]
})
export class GrupoDocentePageModule {}
