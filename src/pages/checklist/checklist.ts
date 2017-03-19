import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/*
  Generated class for the Checklist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html'
})

export class ChecklistPage {

  checklist: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

    this.checklist = this.navParams.get('checklist');

  }

  // Current Development
  addItem():        void {}


  toggleItem(item): void {}
  removeItem(item): void {}
  renameItem(item): void {}
  uncheckItems():   void {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChecklistPage');
  }

}
