import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MembrePage } from './membre';

@NgModule({
  declarations: [
    MembrePage,
  ],
  imports: [
    IonicPageModule.forChild(MembrePage),
  ],
})
export class MembrePageModule {}
