import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocenteAdminPage } from './docente-admin';

@NgModule({
  declarations: [
    DocenteAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(DocenteAdminPage),
  ],
  exports: [
    DocenteAdminPage
  ]
})
export class DocenteAdminPageModule {}
