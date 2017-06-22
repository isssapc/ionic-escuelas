import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrupoAdminPage } from './grupo-admin';

@NgModule({
  declarations: [
    GrupoAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(GrupoAdminPage),
  ],
  exports: [
    GrupoAdminPage
  ]
})
export class GrupoAdminPageModule {}
