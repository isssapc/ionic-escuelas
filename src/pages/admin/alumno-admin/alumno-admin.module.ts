import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlumnoAdminPage } from './alumno-admin';

@NgModule({
  declarations: [
    AlumnoAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(AlumnoAdminPage),
  ],
  exports: [
    AlumnoAdminPage
  ]
})
export class AlumnoAdminPageModule {}
