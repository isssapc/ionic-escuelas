import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlumnosAdminPage } from './alumnos-admin';

@NgModule({
  declarations: [
    AlumnosAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(AlumnosAdminPage),
  ],
  exports: [
    AlumnosAdminPage
  ]
})
export class AlumnosAdminPageModule {}
