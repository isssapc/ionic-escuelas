import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GruposAdminPage } from './grupos-admin';

@NgModule({
  declarations: [
    GruposAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(GruposAdminPage),
  ],
  exports: [
    GruposAdminPage
  ]
})
export class GruposAdminPageModule {}
