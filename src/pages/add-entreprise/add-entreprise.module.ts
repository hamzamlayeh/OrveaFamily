import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEntreprisePage } from './add-entreprise';

@NgModule({
  declarations: [
    AddEntreprisePage,
  ],
  imports: [
    IonicPageModule.forChild(AddEntreprisePage),
  ],
})
export class AddEntreprisePageModule {}
