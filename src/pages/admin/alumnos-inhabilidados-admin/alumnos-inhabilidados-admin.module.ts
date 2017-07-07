import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlumnosInhabilidadosAdminPage } from './alumnos-inhabilidados-admin';

@NgModule({
  declarations: [
    AlumnosInhabilidadosAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(AlumnosInhabilidadosAdminPage),
  ],
  exports: [
    AlumnosInhabilidadosAdminPage
  ]
})
export class AlumnosInhabilidadosAdminPageModule {}
