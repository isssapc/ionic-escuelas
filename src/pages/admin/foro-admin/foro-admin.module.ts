import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForoAdminPage } from './foro-admin';

@NgModule({
  declarations: [
    ForoAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(ForoAdminPage),
  ],
  exports: [
    ForoAdminPage
  ]
})
export class ForoAdminPageModule {}
