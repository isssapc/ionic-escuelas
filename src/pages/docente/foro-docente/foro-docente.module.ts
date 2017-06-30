import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForoDocentePage } from './foro-docente';

@NgModule({
  declarations: [
    ForoDocentePage,
  ],
  imports: [
    IonicPageModule.forChild(ForoDocentePage),
  ],
  exports: [
    ForoDocentePage
  ]
})
export class ForoDocentePageModule {}
