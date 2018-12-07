import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InviterMembrePage } from './inviter-membre';

@NgModule({
  declarations: [
    InviterMembrePage,
  ],
  imports: [
    IonicPageModule.forChild(InviterMembrePage),
  ],
})
export class InviterMembrePageModule {}
