import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocentesAdminPage } from './docentes-admin';

@NgModule({
  declarations: [
    DocentesAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(DocentesAdminPage),
  ],
  exports: [
    DocentesAdminPage
  ]
})
export class DocentesAdminPageModule {}
