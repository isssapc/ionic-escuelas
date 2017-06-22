import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarioAlumnoPage } from './calendario-alumno';

@NgModule({
  declarations: [
    CalendarioAlumnoPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarioAlumnoPage),
  ],
  exports: [
    CalendarioAlumnoPage
  ]
})
export class CalendarioAlumnoPageModule {}
