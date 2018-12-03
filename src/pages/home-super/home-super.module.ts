import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeSuperPage } from './home-super';

@NgModule({
  declarations: [
    HomeSuperPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeSuperPage),
  ],
})
export class HomeSuperPageModule {}
