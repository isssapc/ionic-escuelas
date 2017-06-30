import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlumnosGrupoAdminPage } from './alumnos-grupo-admin';

@NgModule({
  declarations: [
    AlumnosGrupoAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(AlumnosGrupoAdminPage),
  ],
  exports: [
    AlumnosGrupoAdminPage
  ]
})
export class AlumnosGrupoAdminPageModule {}
