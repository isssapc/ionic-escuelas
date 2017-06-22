import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoForoDocentePage } from './nuevo-foro-docente';

@NgModule({
  declarations: [
    NuevoForoDocentePage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoForoDocentePage),
  ],
  exports: [
    NuevoForoDocentePage
  ]
})
export class NuevoForoDocentePageModule {}
