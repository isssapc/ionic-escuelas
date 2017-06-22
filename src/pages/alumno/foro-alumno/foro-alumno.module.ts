import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForoAlumnoPage } from './foro-alumno';

@NgModule({
  declarations: [
    ForoAlumnoPage,
  ],
  imports: [
    IonicPageModule.forChild(ForoAlumnoPage),
  ],
  exports: [
    ForoAlumnoPage
  ]
})
export class ForoAlumnoPageModule {}
