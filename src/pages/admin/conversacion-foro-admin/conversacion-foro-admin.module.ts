import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConversacionForoAdminPage } from './conversacion-foro-admin';

@NgModule({
  declarations: [
    ConversacionForoAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(ConversacionForoAdminPage),
  ],
  exports: [
    ConversacionForoAdminPage
  ]
})
export class ConversacionForoAdminPageModule {}
