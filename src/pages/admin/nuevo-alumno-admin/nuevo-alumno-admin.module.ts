import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoAlumnoAdminPage } from './nuevo-alumno-admin';

@NgModule({
  declarations: [
    NuevoAlumnoAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoAlumnoAdminPage),
  ],
  exports: [
    NuevoAlumnoAdminPage
  ]
})
export class NuevoAlumnoAdminPageModule {}
