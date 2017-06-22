import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilAlumnoPage } from './perfil-alumno';

@NgModule({
  declarations: [
    PerfilAlumnoPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilAlumnoPage),
  ],
  exports: [
    PerfilAlumnoPage
  ]
})
export class PerfilAlumnoPageModule {}
