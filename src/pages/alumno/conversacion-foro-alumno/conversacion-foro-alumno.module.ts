import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConversacionForoAlumnoPage } from './conversacion-foro-alumno';

@NgModule({
  declarations: [
    ConversacionForoAlumnoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConversacionForoAlumnoPage),
  ],
  exports: [
    ConversacionForoAlumnoPage
  ]
})
export class ConversacionForoAlumnoPageModule {}
