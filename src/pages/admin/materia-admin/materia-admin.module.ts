import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MateriaAdminPage } from './materia-admin';

@NgModule({
  declarations: [
    MateriaAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(MateriaAdminPage),
  ],
  exports: [
    MateriaAdminPage
  ]
})
export class MateriaAdminPageModule {}
