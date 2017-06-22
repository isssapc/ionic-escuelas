import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GruposDocentePage } from './grupos-docente';

@NgModule({
  declarations: [
    GruposDocentePage,
  ],
  imports: [
    IonicPageModule.forChild(GruposDocentePage),
  ],
  exports: [
    GruposDocentePage
  ]
})
export class GruposDocentePageModule {}
