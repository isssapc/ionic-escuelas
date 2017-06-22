import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoGrupoAdminPage } from './nuevo-grupo-admin';

@NgModule({
  declarations: [
    NuevoGrupoAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoGrupoAdminPage),
  ],
  exports: [
    NuevoGrupoAdminPage
  ]
})
export class NuevoGrupoAdminPageModule {}
