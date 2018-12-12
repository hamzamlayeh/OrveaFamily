import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
})
export class ProjectPage {
  art:any;
  ma:any;
  tab1Root: any = 'ProjectImagePage';
  tab2Root: any = 'ProjectRapportsPage';
  tab3Root: any = 'ProjectListesPage';
  tab4Root: any = 'ProjectEquipePage';
  tab5Root: any = 'ProjectCarnetPage';
  myIndex: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPage');
  }

}