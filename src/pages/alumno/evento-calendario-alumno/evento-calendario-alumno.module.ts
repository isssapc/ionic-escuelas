import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventoCalendarioAlumnoPage } from './evento-calendario-alumno';

@NgModule({
  declarations: [
    EventoCalendarioAlumnoPage,
  ],
  imports: [
    IonicPageModule.forChild(EventoCalendarioAlumnoPage),
  ],
  exports: [
    EventoCalendarioAlumnoPage
  ]
})
export class EventoCalendarioAlumnoPageModule {}
