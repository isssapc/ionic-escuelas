import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoDocenteAdminPage } from './nuevo-docente-admin';

@NgModule({
  declarations: [
    NuevoDocenteAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoDocenteAdminPage),
  ],
  exports: [
    NuevoDocenteAdminPage
  ]
})
export class NuevoDocenteAdminPageModule {}
