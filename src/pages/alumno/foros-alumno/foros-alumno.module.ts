import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForosAlumnoPage } from './foros-alumno';

@NgModule({
  declarations: [
    ForosAlumnoPage,
  ],
  imports: [
    IonicPageModule.forChild(ForosAlumnoPage),
  ],
  exports: [
    ForosAlumnoPage
  ]
})
export class ForosAlumnoPageModule {}
