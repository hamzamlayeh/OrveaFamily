import { ProgressBarComponent } from './../../components/progress-bar/progress-bar';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StockagePage } from './stockage';

@NgModule({
  declarations: [
    StockagePage,
    ProgressBarComponent
  ],
  imports: [
    IonicPageModule.forChild(StockagePage),
  ],
})
export class StockagePageModule {}
