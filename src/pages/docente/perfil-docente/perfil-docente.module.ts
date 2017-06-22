import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilDocentePage } from './perfil-docente';

@NgModule({
  declarations: [
    PerfilDocentePage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilDocentePage),
  ],
  exports: [
    PerfilDocentePage
  ]
})
export class PerfilDocentePageModule {}
