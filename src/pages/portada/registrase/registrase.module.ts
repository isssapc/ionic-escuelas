import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrasePage } from './registrase';

@NgModule({
  declarations: [
    RegistrasePage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrasePage),
  ],
  exports: [
    RegistrasePage
  ]
})
export class RegistrasePageModule {}
