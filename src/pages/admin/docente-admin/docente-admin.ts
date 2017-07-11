import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';

/**
 * Generated class for the DocenteAdminPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-docente-admin',
  templateUrl: 'docente-admin.html',

})
export class DocenteAdminPage {



  constructor(public navCtrl: NavController, public navParams: NavParams,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocenteAdminPage');
  }



}
