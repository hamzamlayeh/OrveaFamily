import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-project',
  templateUrl: 'add-project.html',
})
export class AddProjectPage {
show:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.show=true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProjectPage');
  }
  onSelectChange(){
    this.show=false;
  }
  onSelectChangee(){
    this.show=true;
  }
  

}
