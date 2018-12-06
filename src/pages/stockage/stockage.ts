import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StockagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stockage',
  templateUrl: 'stockage.html',
})
export class StockagePage {
  progress:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.progress=60
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StockagePage');
  }

}
