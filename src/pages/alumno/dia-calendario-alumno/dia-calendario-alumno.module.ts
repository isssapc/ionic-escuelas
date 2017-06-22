import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiaCalendarioAlumnoPage } from './dia-calendario-alumno';

@NgModule({
  declarations: [
    DiaCalendarioAlumnoPage,
  ],
  imports: [
    IonicPageModule.forChild(DiaCalendarioAlumnoPage),
  ],
  exports: [
    DiaCalendarioAlumnoPage
  ]
})
export class DiaCalendarioAlumnoPageModule {}
