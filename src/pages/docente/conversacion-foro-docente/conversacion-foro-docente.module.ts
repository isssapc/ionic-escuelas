import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConversacionForoDocentePage } from './conversacion-foro-docente';

@NgModule({
  declarations: [
    ConversacionForoDocentePage,
  ],
  imports: [
    IonicPageModule.forChild(ConversacionForoDocentePage),
  ],
  exports: [
    ConversacionForoDocentePage
  ]
})
export class ConversacionForoDocentePageModule {}
