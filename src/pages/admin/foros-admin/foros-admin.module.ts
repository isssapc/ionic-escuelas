import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForosAdminPage } from './foros-admin';

@NgModule({
  declarations: [
    ForosAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(ForosAdminPage),
  ],
  exports: [
    ForosAdminPage
  ]
})
export class ForosAdminPageModule {}
